const DATA_VERSION = "primebet-v3";

let balance;
let bets;
let selectedBet = "";
let selectedOdds = 1;


// --------------------------------------------------
// DEMO DATA
// --------------------------------------------------

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


// --------------------------------------------------
// INITIALIZE
// --------------------------------------------------

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
    loadSport("NFL", document.querySelector(".sport-tab"));
}


// --------------------------------------------------
// DEMO BETS
// --------------------------------------------------

function createDemoBets() {

    const selections = [

        ["Packers", 1.61],
        ["Vikings", 1.88],
        ["Chiefs", 2.05],
        ["Eagles", 1.78],
        ["Longest Field Goal Over 49.5 yards", 1.91],
        ["Passing Yards Over 265.5", 1.87],
        ["Celtics", 1.72],
        ["Timberwolves", 2.05],
        ["Player Points Over 24.5", 1.91],
        ["Player Rebounds Over 8.5", 1.84],
        ["Dodgers", 1.55],
        ["Yankees", 1.64],
        ["Total Runs Over 8.5", 1.90],
        ["Pitcher Strikeouts Over 6.5", 1.82],
        ["Maple Leafs", 1.74],
        ["Wild", 2.05],
        ["Total Goals Over 6.5", 1.95],
        ["Goalie Saves Over 27.5", 1.88],
        ["Bitcoin above $125,000", 2.12],
        ["Ethereum below $5,000", 1.74],
        ["Apple above $250", 1.82],
        ["Tesla below $400", 1.78],
        ["S&P 500 Up", 1.86],
        ["Nasdaq Down", 2.01],
        ["Gold above $4,000", 2.05],
        ["Oil below $100", 1.76],
        ["Fed holds rates", 1.58],
        ["CPI above expectations", 2.08],
        ["Super Bowl Winner — Chiefs", 5.25],
        ["NBA Champion — Timberwolves", 9.00],
        ["World Series Winner — Dodgers", 4.50],
        ["Stanley Cup Winner — Avalanche", 6.00]

    ];

    const amounts = [
        25,
        40,
        50,
        75,
        100,
        125,
        150,
        200,
        250,
        300
    ];

    const statuses = [
        "PENDING",
        "PENDING",
        "PENDING",
        "WON",
        "LOST",
        "PENDING"
    ];

    return selections.map((item, index) => {

        const amount =
            amounts[index % amounts.length];

        const odds = item[1];

        return {
            selection: item[0],
            odds: odds,
            amount: amount,
            payout: amount * odds,
            status: statuses[index % statuses.length],
            date: index < 3
                ? "Today"
                : index < 10
                    ? "Yesterday"
                    : `${index} days ago`
        };

    });

}


// --------------------------------------------------
// PAGE SWITCHING
// --------------------------------------------------

function showPage(page) {

    document.getElementById("sportsPage")
        .classList.toggle("hidden", page !== "sports");

    document.getElementById("marketsPage")
        .classList.toggle("hidden", page !== "markets");

    document.getElementById("betsPage")
        .classList.toggle("hidden", page !== "bets");

    document.querySelectorAll(".nav-btn")
        .forEach(button => button.classList.remove("active"));

    if (page === "sports") {

        document.querySelectorAll(".nav-btn")[0]
            .classList.add("active");

    } else if (page === "markets") {

        document.querySelectorAll(".nav-btn")[1]
            .classList.add("active");

    } else {

        document.querySelectorAll(".nav-btn")[2]
            .classList.add("active");

        renderBets();

    }

}


// --------------------------------------------------
// SPORTS
// --------------------------------------------------

function loadSport(sport, button) {

    document
        .querySelectorAll(".sport-tab")
        .forEach(btn => btn.classList.remove("active"));

    if (button) {
        button.classList.add("active");
    }

    document.getElementById("sportTitle").textContent = sport;

    const container =
        document.getElementById("sportsContainer");

    const data = sports[sport];

    let html = "";


    // GAMES

    html += `<div class="game-section">
        <h2>Games</h2>`;

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

            <div class="market-buttons">
        `;

        game.markets.forEach(market => {

            html += `
                <button
                    onclick="selectBet('${market[0]} — ${game.title}', ${market[1]})">

                    ${market[0]}

                    <b>${market[1].toFixed(2)}x</b>

                </button>
            `;

        });

        html += `
            </div>

        </div>`;

    });

    html += `</div>`;


    // PROPS

    html += `
    <div class="game-section">

        <h2>🔥 Player & Game Props</h2>

        <div class="prop-grid">
    `;

    data.props.forEach((prop, index) => {

        const overOdds =
            (1.75 + (index % 5) * 0.08).toFixed(2);

        const underOdds =
            (1.80 + ((index + 2) % 5) * 0.07).toFixed(2);

        html += `
        <div class="prop">

            <div class="prop-name">
                ${prop[0]}
            </div>

            <div class="prop-buttons">

                <button
                    onclick="selectBet('${prop[0]} ${prop[1]}', ${overOdds})">

                    ${prop[1]}

                    <span>${overOdds}x</span>

                </button>

                <button
                    onclick="selectBet('${prop[0]} ${prop[2]}', ${underOdds})">

                    ${prop[2]}

                    <span>${underOdds}x</span>

                </button>

            </div>

        </div>
        `;

    });

    html += `
        </div>
    </div>
    `;


    // FUTURES

    html += `
    <div class="game-section">

        <h2>🏆 Futures</h2>

        <div class="future-list">
    `;

    data.futures.forEach(future => {

        html += `
        <div class="future">

            <span>${future[0]}</span>

            <button
                onclick="selectBet('${future[0]}', ${future[1]})">

                ${future[1].toFixed(2)}x

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


// --------------------------------------------------
// BET SLIP
// --------------------------------------------------

function selectBet(selection, odds) {

    selectedBet = selection;
    selectedOdds = Number(odds);

    document.getElementById("selectedBet")
        .textContent = selection;

    document.getElementById("selectedOdds")
        .textContent = selectedOdds.toFixed(2) + "x";

    document.getElementById("betAmount").value = "";

    document.getElementById("profit")
        .textContent = "$0.00";

    document.getElementById("payout")
        .textContent = "$0.00";

    document.getElementById("betSlip")
        .classList.remove("hidden");

}


function closeSlip() {

    document.getElementById("betSlip")
        .classList.add("hidden");

}


function calculatePayout() {

    const amount =
        Number(document.getElementById("betAmount").value) || 0;

    const payout =
        amount * selectedOdds;

    const profit =
        payout - amount;

    document.getElementById("profit")
        .textContent =
        "$" + profit.toFixed(2);

    document.getElementById("payout")
        .textContent =
        "$" + payout.toFixed(2);

}


// --------------------------------------------------
// PLACE BET
// --------------------------------------------------

function placeBet() {

    const amount =
        Number(document.getElementById("betAmount").value);

    if (!amount || amount <= 0) {

        alert("Enter a valid bet amount.");

        return;

    }

    if (amount > balance) {

        alert("Not enough balance.");

        return;

    }


    const payout =
        amount * selectedOdds;


    balance -= amount;


    bets.unshift({

        selection: selectedBet,

        odds: selectedOdds,

        amount: amount,

        payout: payout,

        status: "PENDING",

        date: "Just now"

    });


    saveData();

    updateBalance();

    closeSlip();

    alert("Bet placed!");

}


// --------------------------------------------------
// MY BETS
// --------------------------------------------------

function renderBets() {

    const container =
        document.getElementById("betsContainer");

    let totalWagered = 0;
    let potentialPayout = 0;


    bets.forEach(bet => {

        totalWagered += Number(bet.amount);

        potentialPayout += Number(bet.payout);

    });


    document.getElementById("totalBets")
        .textContent = bets.length;

    document.getElementById("totalWagered")
        .textContent =
        "$" + totalWagered.toFixed(2);

    document.getElementById("potentialPayout")
        .textContent =
        "$" + potentialPayout.toFixed(2);


    container.innerHTML = bets.map(bet => {

        const statusClass =
            bet.status.toLowerCase();

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


            <div class="bet-details">

                <div>
                    <small>Bet</small>
                    <strong>
                        $${Number(bet.amount).toFixed(2)}
                    </strong>
                </div>

                <div>
                    <small>Odds</small>
                    <strong>
                        ${Number(bet.odds).toFixed(2)}x
                    </strong>
                </div>

                <div>
                    <small>Payout</small>
                    <strong>
                        $${Number(bet.payout).toFixed(2)}
                    </strong>
                </div>

            </div>

        </div>
        `;

    }).join("");

}


// --------------------------------------------------
// STORAGE
// --------------------------------------------------

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


function updateBalance() {

    document.getElementById("balance")
        .textContent =
        "$" + balance.toFixed(2);

}
function showDepositMessage() {
    document.getElementById("depositModal").classList.remove("hidden");
}

function closeDepositMessage() {
    document.getElementById("depositModal").classList.add("hidden");
}

// --------------------------------------------------
// START
// --------------------------------------------------

initialize();
