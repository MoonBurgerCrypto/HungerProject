let balance = Number(localStorage.getItem("balance")) || 10000;

let bets = JSON.parse(localStorage.getItem("bets")) || [];

let selectedTeam = "";
let selectedOdds = 0;

const balanceDisplay = document.getElementById("balance");

const empty = document.getElementById("empty");
const betContent = document.getElementById("bet-content");

const selectedTeamDisplay =
    document.getElementById("selected-team");

const selectedOddsDisplay =
    document.getElementById("selected-odds");

const betAmount =
    document.getElementById("bet-amount");

const profitDisplay =
    document.getElementById("profit");

const payoutDisplay =
    document.getElementById("payout");


function updateBalance() {

    balanceDisplay.textContent =
        "$" + balance.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    localStorage.setItem("balance", balance);

}


function updatePayout() {

    const amount = Number(betAmount.value) || 0;

    const profit = amount * (selectedOdds - 1);

    const payout = amount * selectedOdds;

    profitDisplay.textContent =
        "$" + profit.toFixed(2);

    payoutDisplay.textContent =
        "$" + payout.toFixed(2);

}


document.querySelectorAll(".odd").forEach(button => {

    button.addEventListener("click", () => {

        selectedTeam = button.dataset.team;

        selectedOdds =
            Number(button.dataset.odds);

        selectedTeamDisplay.textContent =
            selectedTeam;

        selectedOddsDisplay.textContent =
            selectedOdds.toFixed(2) + "x";

        empty.classList.add("hidden");

        betContent.classList.remove("hidden");

        updatePayout();

    });

});


betAmount.addEventListener(
    "input",
    updatePayout
);


document.querySelectorAll(
    ".quick-buttons button"
).forEach(button => {

    button.addEventListener("click", () => {

        betAmount.value =
            button.dataset.amount;

        updatePayout();

    });

});


document.getElementById("clear")
.addEventListener("click", () => {

    selectedTeam = "";

    selectedOdds = 0;

    betContent.classList.add("hidden");

    empty.classList.remove("hidden");

});


document.getElementById("place-bet")
.addEventListener("click", () => {

    const amount =
        Number(betAmount.value);

    if (!selectedTeam) {
        return;
    }

    if (amount <= 0) {

        showToast(
            "Enter a valid bet amount."
        );

        return;
    }

    if (amount > balance) {

        showToast(
            "Insufficient balance."
        );

        return;
    }


    const payout =
        amount * selectedOdds;


    balance -= amount;


    const newBet = {

        id: Date.now(),

        team: selectedTeam,

        odds: selectedOdds,

        amount: amount,

        payout: payout,

        date: new Date().toLocaleString(),

        status: "PENDING"

    };


    bets.unshift(newBet);


    localStorage.setItem(
        "bets",
        JSON.stringify(bets)
    );


    updateBalance();

    renderBets();


    showToast(
        `${selectedTeam} bet placed for $${amount.toFixed(2)}`
    );


    betContent.classList.add("hidden");

    empty.classList.remove("hidden");

});


/* MY BETS NAVIGATION */

document.getElementById("myBetsTab")
.addEventListener("click", () => {

    document
        .getElementById("sportsPage")
        .classList.add("hidden");

    document
        .getElementById("myBetsPage")
        .classList.remove("hidden");


    document
        .getElementById("sportsTab")
        .classList.remove("active");

    document
        .getElementById("myBetsTab")
        .classList.add("active");


    renderBets();

});


document.getElementById("sportsTab")
.addEventListener("click", () => {

    document
        .getElementById("myBetsPage")
        .classList.add("hidden");

    document
        .getElementById("sportsPage")
        .classList.remove("hidden");


    document
        .getElementById("myBetsTab")
        .classList.remove("active");

    document
        .getElementById("sportsTab")
        .classList.add("active");

});


function renderBets() {

    const list =
        document.getElementById("betsList");


    document.getElementById(
        "totalBets"
    ).textContent = bets.length;


    const wagered =
        bets.reduce(
            (total, bet) =>
                total + bet.amount,
            0
        );


    const potential =
        bets.reduce(
            (total, bet) =>
                total + bet.payout,
            0
        );


    document.getElementById(
        "totalWagered"
    ).textContent =
        "$" + wagered.toFixed(2);


    document.getElementById(
        "totalPotential"
    ).textContent =
        "$" + potential.toFixed(2);


    if (bets.length === 0) {

        list.innerHTML = `

            <div class="no-bets">

                <div>🎟️</div>

                <h3>No bets yet</h3>

                <p>
                    Your placed bets will appear here.
                </p>

            </div>

        `;

        return;
    }


    list.innerHTML = bets.map(bet => `

        <div class="bet-card">

            <div class="bet-top">

                <div>

                    <div class="bet-team">
                        ${bet.team}
                    </div>

                    <small>
                        Moneyline • ${bet.date}
                    </small>

                </div>

                <div class="bet-status">
                    ${bet.status}
                </div>

            </div>


            <div class="bet-details">

                <div class="bet-detail">

                    <span>BET</span>

                    <strong>
                        $${bet.amount.toFixed(2)}
                    </strong>

                </div>


                <div class="bet-detail">

                    <span>ODDS</span>

                    <strong>
                        ${bet.odds.toFixed(2)}x
                    </strong>

                </div>


                <div class="bet-detail">

                    <span>POTENTIAL PAYOUT</span>

                    <strong>
                        $${bet.payout.toFixed(2)}
                    </strong>

                </div>

            </div>

        </div>

    `).join("");

}


function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.style.display = "block";


    setTimeout(() => {

        toast.style.display = "none";

    }, 3000);

}


updateBalance();

renderBets();
