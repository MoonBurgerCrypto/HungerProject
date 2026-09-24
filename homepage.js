let balance = 10000;

let selectedTeam = "";
let selectedOdds = 0;

const balanceDisplay = document.getElementById("balance");
const empty = document.getElementById("empty");
const betContent = document.getElementById("bet-content");

const selectedTeamDisplay = document.getElementById("selected-team");
const selectedOddsDisplay = document.getElementById("selected-odds");

const betAmount = document.getElementById("bet-amount");
const profitDisplay = document.getElementById("profit");
const payoutDisplay = document.getElementById("payout");

function updateBalance() {
    balanceDisplay.textContent =
        "$" + balance.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
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
        selectedOdds = Number(button.dataset.odds);

        selectedTeamDisplay.textContent = selectedTeam;
        selectedOddsDisplay.textContent = selectedOdds.toFixed(2) + "x";

        empty.classList.add("hidden");
        betContent.classList.remove("hidden");

        updatePayout();
    });

});

betAmount.addEventListener("input", updatePayout);

document.querySelectorAll(".quick-buttons button").forEach(button => {

    button.addEventListener("click", () => {

        betAmount.value = button.dataset.amount;

        updatePayout();
    });

});

document.getElementById("clear").addEventListener("click", () => {

    selectedTeam = "";
    selectedOdds = 0;

    betContent.classList.add("hidden");
    empty.classList.remove("hidden");

});

document.getElementById("place-bet").addEventListener("click", () => {

    const amount = Number(betAmount.value);

    if (!selectedTeam) {
        return;
    }

    if (amount <= 0) {
        showToast("Enter a valid bet amount.");
        return;
    }

    if (amount > balance) {
        showToast("Insufficient balance.");
        return;
    }

    balance -= amount;

    updateBalance();

    showToast(
        `${selectedTeam} bet placed for $${amount.toFixed(2)}`
    );

    betContent.classList.add("hidden");
    empty.classList.remove("hidden");

});

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

updateBalance();
