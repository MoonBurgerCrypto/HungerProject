const DATA_VERSION = "primebet-v5";

let balance;
let bets;
let selectedBet = "";
let selectedOdds = 1;
let selectedOpenedOdds = 1;


// ==================================================
// SPORTS DATA
// ==================================================

const sports = {

    NFL: {

        games: [

            {
                title: "Atlanta Falcons @ Green Bay Packers",
                time: "THU 8:15 PM",
                markets: [
                    ["Falcons", 2.35],
                    ["Packers", 1.61]
                ]
            },

            {
                title: "Minnesota Vikings @ Tampa Bay Buccaneers",
                time: "SUN 12:00 PM",
                markets: [
                    ["Vikings", 1.88],
                    ["Buccaneers", 2.02]
                ]
            },

            {
                title: "Dallas Cowboys @ Philadelphia Eagles",
                time: "SUN 3:25 PM",
                markets: [
                    ["Cowboys", 2.15],
                    ["Eagles", 1.78]
                ]
            },

            {
                title: "Detroit Lions @ Chicago Bears",
                time: "SUN 12:00 PM",
                markets: [
                    ["Lions", 1.72],
                    ["Bears", 2.25]
                ]
            },

            {
                title: "Kansas City Chiefs @ Buffalo Bills",
                time: "SUN 7:20 PM",
                markets: [
                    ["Chiefs", 2.05],
                    ["Bills", 1.84]
                ]
            }

        ],

        props: [

            ["Longest Field Goal", "Over 49.5 yards", "Under 49.5 yards"],
            ["Total Passing Yards", "Over 265.5", "Under 265.5"],
            ["Total Rushing Yards", "Over 105.5", "Under 105.5"],
            ["Total Receiving Yards", "Over 74.5", "Under 74.5"],
            ["Total Touchdowns", "Over 2.5", "Under 2.5"],
            ["First Team to Score", "Home", "Away"],
            ["Team Total", "Over 24.5", "Under 24.5"],
            ["Longest Reception", "Over 29.5", "Under 29.5"],
            ["Field Goals Made", "Over 1.5", "Under 1.5"]

        ],

        futures: [
            ["Super Bowl Winner — Chiefs", 5.25],
            ["Super Bowl Winner — Eagles", 7.00],
            ["Super Bowl Winner — Packers", 8.50],
            ["Super Bowl Winner — Bills", 6.75],
            ["Most Regular Season Wins — Lions", 9.00],
            ["Most Regular Season Wins — Chiefs", 6.25]
        ]

    },


    NBA: {

        games: [

            {
                title: "Boston Celtics @ New York Knicks",
                time: "UPCOMING",
                markets: [
                    ["Celtics", 1.72],
                    ["Knicks", 2.18]
                ]
            },

            {
                title: "Minnesota Timberwolves @ Denver Nuggets",
                time: "UPCOMING",
                markets: [
                    ["Timberwolves", 2.05],
                    ["Nuggets", 1.82]
                ]
            },

            {
                title: "Los Angeles Lakers @ Golden State Warriors",
                time: "UPCOMING",
                markets: [
                    ["Lakers", 2.25],
                    ["Warriors", 1.67]
                ]
            },

            {
                title: "Dallas Mavericks @ Phoenix Suns",
                time: "UPCOMING",
                markets: [
                    ["Mavericks", 1.95],
                    ["Suns", 1.91]
                ]
            }

        ],

        props: [

            ["Team Points", "Over 112.5", "Under 112.5"],
            ["Player Points", "Over 24.5", "Under 24.5"],
            ["Player Rebounds", "Over 8.5", "Under 8.5"],
            ["Player Assists", "Over 6.5", "Under 6.5"],
            ["3-Pointers Made", "Over 3.5", "Under 3.5"],
            ["Double-Double", "Yes", "No"],
            ["First Basket", "Home", "Away"],
            ["Highest Scoring Team", "Home", "Away"],
            ["Total Points", "Over 224.5", "Under 224.5"]

        ],

        futures: [
            ["NBA Champion — Celtics", 5.50],
            ["NBA Champion — Nuggets", 6.25],
            ["NBA Champion — Timberwolves", 9.00],
            ["NBA Champion — Lakers", 8.00],
            ["Most Wins — Celtics", 5.00],
            ["Most Wins — Thunder", 6.50]
        ]

    },


    MLB: {

        games: [

            {
                title: "Cleveland Guardians @ Boston Red Sox",
                time: "UPCOMING",
                markets: [
                    ["Guardians", 2.10],
                    ["Red Sox", 1.78]
                ]
            },

            {
                title: "Houston Astros @ Seattle Mariners",
                time: "UPCOMING",
                markets: [
                    ["Astros", 2.25],
                    ["Mariners", 1.70]
                ]
            },

            {
                title: "New York Yankees @ Toronto Blue Jays",
                time: "UPCOMING",
                markets: [
                    ["Yankees", 1.64],
                    ["Blue Jays", 2.35]
                ]
            },

            {
                title: "Los Angeles Dodgers @ San Diego Padres",
                time: "UPCOMING",
                markets: [
                    ["Dodgers", 1.55],
                    ["Padres", 2.50]
                ]
            }

        ],

        props: [

            ["Total Runs", "Over 8.5", "Under 8.5"],
            ["Team Hits", "Over 8.5", "Under 8.5"],
            ["Home Runs", "Over 2.5", "Under 2.5"],
            ["Pitcher Strikeouts", "Over 6.5", "Under 6.5"],
            ["Player Hits", "Over 1.5", "Under 1.5"],
            ["Total Bases", "Over 2.5", "Under 2.5"],
            ["First 5 Innings", "Home", "Away"],
            ["First Team to Score", "Home", "Away"],
            ["Extra Innings", "Yes", "No"]

        ],

        futures: [
            ["World Series Winner — Dodgers", 4.50],
            ["World Series Winner — Yankees", 6.00],
            ["World Series Winner — Braves", 7.50],
            ["World Series Winner — Red Sox", 12.00],
            ["Most Home Runs", 8.50],
            ["Most Wins", 7.00]
        ]

    },


    NHL: {

        games: [

            {
                title: "Ottawa Senators @ Toronto Maple Leafs",
                time: "PRESEASON",
                markets: [
                    ["Senators", 2.20],
                    ["Maple Leafs", 1.74]
                ]
            },

            {
                title: "Minnesota Wild @ Dallas Stars",
                time: "PRESEASON",
                markets: [
                    ["Wild", 2.05],
                    ["Stars", 1.82]
                ]
            },

            {
                title: "Los Angeles Kings @ Anaheim Ducks",
                time: "PRESEASON",
                markets: [
                    ["Kings", 1.80],
                    ["Ducks", 2.10]
                ]
            },

            {
                title: "Colorado Avalanche @ Vegas Golden Knights",
                time: "UPCOMING",
                markets: [
                    ["Avalanche", 1.72],
                    ["Golden Knights", 2.14]
                ]
            }

        ],

        props: [

            ["Total Goals", "Over 6.5", "Under 6.5"],
            ["Team Goals", "Over 3.5", "Under 3.5"],
            ["Player Shots", "Over 3.5", "Under 3.5"],
            ["Player Points", "Over 1.5", "Under 1.5"],
            ["Goalie Saves", "Over 27.5", "Under 27.5"],
            ["First Goal", "Home", "Away"],
            ["Power Play Goals", "Over 1.5", "Under 1.5"],
            ["Total Shots", "Over 61.5", "Under 61.5"],
            ["Overtime", "Yes", "No"]

        ],

        futures: [
            ["Stanley Cup Winner — Avalanche", 6.00],
            ["Stanley Cup Winner — Stars", 8.50],
            ["Stanley Cup Winner — Wild", 15.00],
            ["Stanley Cup Winner — Golden Knights", 7.50],
            ["Most Regular Season Wins", 6.25],
            ["Most Goals", 8.00]
        ]

    }

};


// ==================================================
// MARKET MOVERS
// ==================================================

let marketMovers = [

    {
        name: "Bitcoin above $125K",
        odds: 2.12
    },

    {
        name: "Tesla below $400",
        odds: 1.78
    },

    {
        name: "Trump mentions tariffs",
        odds: 2.10
    },

    {
        name: "AI announcement",
        odds: 1.55
    }

];


// ==================================================
// INITIALIZE
// ==================================================

function initialize() {

    if (localStorage.getItem("primebetDataVersion") !== DATA_VERSION) {

        balance = 2301.56;

        bets = createDemoBets();

        localStorage.setItem(
            "primebetDataVersion",
            DATA_VERSION
        );

        saveData();

    } else {

        balance =
            Number(localStorage.getItem("balance")) || 2301.56;

        bets =
            JSON.parse(localStorage.getItem("bets")) || [];

    }

    updateBalance();

    loadSport(
        "NFL",
        document.querySelector(".sport-tab")
    );

    renderMarketMovers();

    startMarketMovement();
}


// ==================================================
// DEMO BET HISTORY
// ==================================================

function createDemoBets() {

    return [

        {
            id: generateBetID(),
            selection: "Packers",
            odds: 1.61,
            openedOdds: 1.61,
            amount: 25,
            payout: 40.25,
            status: "PENDING",
            date: "Today"
        },

        {
            id: generateBetID(),
            selection: "Timberwolves",
            odds: 2.05,
            openedOdds: 2.05,
            amount: 50,
            payout: 102.50,
            status: "PENDING",
            date: "Today"
        },

        {
            id: generateBetID(),
            selection: "Bitcoin above $125,000",
            odds: 2.12,
            openedOdds: 2.12,
            amount: 100,
            payout: 212.00,
            status: "PENDING",
            date: "Today"
        },

        {
            id: generateBetID(),
            selection: "Trump mentions tariffs",
            odds: 2.10,
            openedOdds: 2.10,
            amount: 50,
            payout: 105.00,
            status: "PENDING",
            date: "Today"
        },

        {
            id: generateBetID(),
            selection: "MrBeast next video — Challenge",
            odds: 1.95,
            openedOdds: 1.95,
            amount: 40,
            payout: 78.00,
            status: "PENDING",
            date: "Today"
        },

        {
            id: generateBetID(),
            selection: "Eagles",
            odds: 1.78,
            openedOdds: 1.78,
            amount: 75,
            payout: 133.50,
            status: "WON",
            date: "Yesterday"
        },

        {
            id: generateBetID(),
            selection: "Longest Field Goal Over 49.5 yards",
            odds: 1.91,
            openedOdds: 1.91,
            amount: 100,
            payout: 191.00,
            status: "WON",
            date: "Yesterday"
        },

        {
            id: generateBetID(),
            selection: "Celtics",
            odds: 1.72,
            openedOdds: 1.72,
            amount: 150,
            payout: 258.00,
            status: "LOST",
            date: "2 days ago"
        },

        {
            id: generateBetID(),
            selection: "Dodgers",
            odds: 1.55,
            openedOdds: 1.55,
            amount: 200,
            payout: 310.00,
            status: "WON",
            date: "2 days ago"
        }

    ];
}


// ==================================================
// GENERATE BET ID
// ==================================================

function generateBetID() {

    const number =
        Math.floor(
            100000 +
            Math.random() * 900000
        );

    return "PB-" + number;
}


// ==================================================
// PAGE SWITCHING
// ==================================================

function showPage(page) {

    document
        .getElementById("sportsPage")
        .classList.toggle(
            "hidden",
            page !== "sports"
        );

    document
        .getElementById("marketsPage")
        .classList.toggle(
            "hidden",
            page !== "markets"
        );

    document
        .getElementById("betsPage")
        .classList.toggle(
            "hidden",
            page !== "bets"
        );


    document
        .querySelectorAll(".nav-btn")
        .forEach(button =>
            button.classList.remove("active")
        );


    if (page === "sports") {

        document
            .querySelectorAll(".nav-btn")[0]
            .classList.add("active");

    }

    else if (page === "markets") {

        document
            .querySelectorAll(".nav-btn")[1]
            .classList.add("active");

    }

    else {

        document
            .querySelectorAll(".nav-btn")[2]
            .classList.add("active");

        renderBets();

    }

}


// ==================================================
// LOAD SPORTS
// ==================================================

function loadSport(sport, button) {

    document
        .querySelectorAll(".sport-tab")
        .forEach(btn =>
            btn.classList.remove("active")
        );

    if (button) {
        button.classList.add("active");
    }


    document
        .getElementById("sportTitle")
        .textContent = sport;


    const container =
        document.getElementById(
            "sportsContainer"
        );


    const data = sports[sport];

    let html = "";


    html += `
        <div class="game-section">

            <div class="section-heading">
                <h2>🏟️ Games</h2>
                <span>Moneyline</span>
            </div>
    `;


    data.games.forEach(game => {

        html += `
            <div class="game-card">

                <div class="game-header">

                    <div class="game-title">
                        ${game.title}
                    </div>

                    <div class="game-time">
                        ${game.time}
                    </div>

                </div>

                <div class="game-odds">
        `;


        game.markets.forEach(market => {

            html += `
                <button
                    class="game-bet-button"
                    onclick="selectBet('${market[0]} — ${game.title}', ${market[1]})"
                >

                    <span>
                        ${market[0]}
                    </span>

                    <b>
                        ${Number(market[1]).toFixed(2)}x
                    </b>

                </button>
            `;

        });


        html += `
                </div>
            </div>
        `;

    });


    html += `
        </div>
    `;


    html += `
        <div class="game-section">

            <div class="section-heading">
                <h2>🔥 Player & Game Props</h2>
                <span>Popular</span>
            </div>

            <div class="prop-grid">
    `;


    data.props.forEach((prop, index) => {

        const overOdds =
            1.75 + (index % 5) * 0.08;

        const underOdds =
            1.80 + ((index + 2) % 5) * 0.07;


        html += `
            <div class="prop">

                <div class="prop-name">
                    ${prop[0]}
                </div>

                <div class="prop-buttons">

                    <button
                        onclick="selectBet('${prop[0]} ${prop[1]}', ${overOdds.toFixed(2)})"
                    >

                        <span>
                            ${prop[1]}
                        </span>

                        <b>
                            ${overOdds.toFixed(2)}x
                        </b>

                    </button>


                    <button
                        onclick="selectBet('${prop[0]} ${prop[2]}', ${underOdds.toFixed(2)})"
                    >

                        <span>
                            ${prop[2]}
                        </span>

                        <b>
                            ${underOdds.toFixed(2)}x
                        </b>

                    </button>

                </div>

            </div>
        `;

    });


    html += `
            </div>
        </div>
    `;


    html += `
        <div class="game-section">

            <div class="section-heading">
                <h2>🏆 Futures</h2>
                <span>Long term</span>
            </div>

            <div class="future-list">
    `;


    data.futures.forEach(future => {

        html += `
            <div class="future">

                <span>
                    ${future[0]}
                </span>

                <button
                    onclick="selectBet('${future[0]}', ${future[1]})"
                >

                    ${Number(future[1]).toFixed(2)}x

                </button>

            </div>
        `;

    });


    html += `
            </div>
        </div>
    `;


    container.innerHTML = html;
}


// ==================================================
// BET SLIP
// ==================================================

function selectBet(selection, odds) {

    selectedBet = selection;

    selectedOdds = Number(odds);

    selectedOpenedOdds = Number(odds);


    document
        .getElementById("selectedBet")
        .textContent = selection;


    document
        .getElementById("selectedOdds")
        .textContent =
        selectedOdds.toFixed(2) + "x";


    document
        .getElementById("betAmount")
        .value = "";


    updateBetSlip();


    document
        .getElementById("betSlip")
        .classList.remove("hidden");

}


// ==================================================
// UPDATE BET SLIP
// ==================================================

function updateBetSlip() {

    const amount =
        Number(
            document.getElementById(
                "betAmount"
            ).value
        ) || 0;


    const totalReturn =
        amount * selectedOdds;


    const potentialProfit =
        totalReturn - amount;


    const amountElement =
        document.getElementById(
            "slipBetAmount"
        );


    const profitElement =
        document.getElementById(
            "slipPotentialProfit"
        );


    const returnElement =
        document.getElementById(
            "slipTotalReturn"
        );


    if (amountElement) {

        amountElement.textContent =
            "$" + amount.toFixed(2);

    }


    if (profitElement) {

        profitElement.textContent =
            "$" + potentialProfit.toFixed(2);

    }


    if (returnElement) {

        returnElement.textContent =
            "$" + totalReturn.toFixed(2);

    }


    const payout =
        document.getElementById("payout");


    if (payout) {

        payout.textContent =
            "$" + totalReturn.toFixed(2);

    }

}


// ==================================================
// QUICK BET BUTTON
// ==================================================

function setBetAmount(amount) {

    const input =
        document.getElementById(
            "betAmount"
        );


    if (!input) return;


    input.value = amount;

    updateBetSlip();

}


// ==================================================
// CLOSE BET SLIP
// ==================================================

function closeSlip() {

    document
        .getElementById("betSlip")
        .classList.add("hidden");

}


// ==================================================
// CALCULATE PAYOUT
// ==================================================

function calculatePayout() {

    updateBetSlip();

}


// ==================================================
// PLACE BET
// ==================================================

function placeBet() {

    const amount =
        Number(
            document.getElementById(
                "betAmount"
            ).value
        );


    if (!amount || amount <= 0) {

        alert(
            "Enter a valid bet amount."
        );

        return;
    }


    if (amount > balance) {

        alert(
            "Not enough balance."
        );

        return;
    }


    const payout =
        amount * selectedOdds;


    const newBet = {

        id: generateBetID(),

        selection: selectedBet,

        odds: selectedOdds,

        openedOdds: selectedOpenedOdds,

        amount: amount,

        payout: payout,

        status: "PENDING",

        date: "Just now"

    };


    balance -= amount;


    bets.unshift(newBet);


    saveData();

    updateBalance();

    closeSlip();

    renderBets();

    showBetConfirmation(newBet);

}


// ==================================================
// BET CONFIRMATION
// ==================================================

function showBetConfirmation(bet) {

    let confirmation =
        document.getElementById(
            "betConfirmation"
        );


    if (!confirmation) {

        confirmation =
            document.createElement("div");

        confirmation.id =
            "betConfirmation";

        confirmation.className =
            "bet-confirmation";

        document.body.appendChild(
            confirmation
        );

    }


    confirmation.innerHTML = `

        <div class="confirmation-icon">
            ✓
        </div>

        <div class="confirmation-content">

            <strong>
                Bet placed!
            </strong>

            <span>
                ${bet.selection}
            </span>

            <small>
                ${bet.id} • $${bet.amount.toFixed(2)}
            </small>

        </div>

    `;


    confirmation.classList.remove(
        "show"
    );


    setTimeout(() => {

        confirmation.classList.add(
            "show"
        );

    }, 20);


    setTimeout(() => {

        confirmation.classList.remove(
            "show"
        );

    }, 3500);

}


// ==================================================
// MARKET MOVERS
// ==================================================

function renderMarketMovers() {

    const container =
        document.getElementById(
            "marketMovers"
        );


    if (!container) return;


    container.innerHTML = "";


    marketMovers.forEach(market => {

        const row =
            document.createElement("button");


        row.className =
            "market-mover";


        row.innerHTML = `

            <span>
                ${market.name}
            </span>

            <b>
                ${market.odds.toFixed(2)}x
            </b>

        `;


        row.onclick = () => {

            selectBet(
                market.name,
                market.odds
            );

        };


        container.appendChild(row);

    });

}


// ==================================================
// RANDOM MARKET MOVEMENT
// ==================================================

function startMarketMovement() {

    const delay =
        Math.floor(
            Math.random() * 10000
        ) + 10000;


    setTimeout(() => {

        marketMovers.forEach(market => {

            const movement =
                (Math.random() * 0.10) - 0.05;


            market.odds += movement;


            if (market.odds < 1.10) {

                market.odds = 1.10;

            }


            market.odds =
                Number(
                    market.odds.toFixed(2)
                );

        });


        renderMarketMovers();

        startMarketMovement();

    }, delay);

}


// ==================================================
// MY BETS
// ==================================================

function renderBets() {

    const container =
        document.getElementById(
            "betsContainer"
        );


    let totalWagered = 0;

    let potentialPayout = 0;


    bets.forEach(bet => {

        totalWagered +=
            Number(bet.amount);


        if (bet.status === "PENDING") {

            potentialPayout +=
                Number(bet.payout);

        }

    });


    document
        .getElementById("totalBets")
        .textContent = bets.length;


    document
        .getElementById("totalWagered")
        .textContent =
        "$" + totalWagered.toFixed(2);


    document
        .getElementById("potentialPayout")
        .textContent =
        "$" + potentialPayout.toFixed(2);


    const pendingBets =
        bets.filter(
            bet =>
                bet.status === "PENDING"
        );


    const settledBets =
        bets.filter(
            bet =>
                bet.status === "WON" ||
                bet.status === "LOST"
        );


    let html = "";


    if (pendingBets.length > 0) {

        html += `
            <div class="bet-history-section">

                <div class="bet-history-heading">
                    <h2>🟡 Open Positions</h2>
                    <span>${pendingBets.length}</span>
                </div>
        `;


        pendingBets.forEach(bet => {

            html += createBetHTML(bet);

        });


        html += `
            </div>
        `;

    }


    if (settledBets.length > 0) {

        html += `
            <div class="bet-history-section settled-section">

                <div class="bet-history-heading">
                    <h2>📋 Settled Positions</h2>
                    <span>${settledBets.length}</span>
                </div>
        `;


        settledBets.forEach(bet => {

            html += createBetHTML(bet);

        });


        html += `
            </div>
        `;

    }


    if (!html) {

        html = `
            <div class="empty-bets">
                <div>📭</div>
                <h3>No positions yet</h3>
                <p>Choose a market to place your first position.</p>
            </div>
        `;

    }


    container.innerHTML = html;

}


// ==================================================
// ODDS MOVEMENT
// ==================================================

function getOddsMovement(bet) {

    const current =
        Number(bet.odds);


    const opened =
        Number(
            bet.openedOdds ||
            bet.odds
        );


    if (current > opened) {

        return {

            arrow: "↑",

            className: "odds-up"

        };

    }


    if (current < opened) {

        return {

            arrow: "↓",

            className: "odds-down"

        };

    }


    return {

        arrow: "→",

        className: "odds-same"

    };

}


// ==================================================
// CREATE BET HISTORY CARD
// ==================================================

function createBetHTML(bet) {

    const statusClass =
        bet.status.toLowerCase();


    let resultText = "";


    if (bet.status === "WON") {

        resultText =
            `+$${Number(bet.payout).toFixed(2)}`;

    }

    else if (bet.status === "LOST") {

        resultText =
            `-$${Number(bet.amount).toFixed(2)}`;

    }

    else {

        resultText =
            `$${Number(bet.payout).toFixed(2)} potential`;

    }


    const movement =
        getOddsMovement(bet);


    return `

        <div class="bet-history">

            <div class="bet-history-top">

                <div>

                    <h3>
                        ${bet.selection}
                    </h3>

                    <small>
                        ${bet.date}
                    </small>

                </div>

                <span class="status ${statusClass}">
                    ${bet.status}
                </span>

            </div>


            <div class="bet-id">
                BET #${bet.id}
            </div>


            <div class="bet-details">

                <div>

                    <small>
                        Position
                    </small>

                    <strong>
                        $${Number(bet.amount).toFixed(2)}
                    </strong>

                </div>


                <div>

                    <small>
                        Odds
                    </small>

                    <strong class="history-odds ${movement.className}">
                        ${Number(bet.odds).toFixed(2)}x
                        ${movement.arrow}
                    </strong>

                    <small class="opened-odds">
                        Opened at ${Number(
                            bet.openedOdds ||
                            bet.odds
                        ).toFixed(2)}x
                    </small>

                </div>


                <div>

                    <small>
                        ${bet.status === "PENDING"
                            ? "Potential Return"
                            : "Result"}
                    </small>

                    <strong class="bet-result ${statusClass}">
                        ${resultText}
                    </strong>

                </div>

            </div>

        </div>

    `;

}


// ==================================================
// STORAGE
// ==================================================

function saveData() {

    localStorage.setItem(
        "balance",
        balance.toFixed(2)
    );


    localStorage.setItem(
        "bets",
        JSON.stringify(bets)
    );

}


// ==================================================
// BALANCE
// ==================================================

function updateBalance() {

    document
        .getElementById("balance")
        .textContent =
        "$" + balance.toFixed(2);

}


// ==================================================
// DEPOSIT POPUP
// ==================================================

function showDepositMessage() {

    const modal =
        document.getElementById(
            "depositModal"
        );


    if (modal) {

        modal.classList.remove(
            "hidden"
        );

    }

}


function closeDepositMessage() {

    const modal =
        document.getElementById(
            "depositModal"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


// ==================================================
// START
// ==================================================

initialize();
