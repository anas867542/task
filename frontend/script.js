const API_URL = "http://localhost:3000";


// Load everything when page loads
window.onload = function () {
    loadTransactions();
    loadDashboard();
};



// Submit transaction
document.getElementById("transactionForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {

        transaction_id: document.getElementById("transaction_id").value,
        user_id: document.getElementById("user_id").value,
        amount: parseFloat(document.getElementById("amount").value),
        device_id: document.getElementById("device_id").value,
        timestamp: new Date().toISOString()

    };

    const res = await fetch(`${API_URL}/transactions`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    });

    if(res.ok) {

        alert("Transaction Added");

        loadTransactions();
        loadDashboard();

    } else {

        alert("Error adding transaction");

    }

});



// Load transactions table
async function loadTransactions() {

    const res = await fetch(`${API_URL}/transactions`);

    const transactions = await res.json();

    const tbody = document.querySelector("#transactionsTable tbody");

    tbody.innerHTML = "";

    transactions.forEach(tx => {

        const row = document.createElement("tr");

        if(tx.risk_flag === "HIGH_RISK")
            row.classList.add("high-risk");

        if(tx.risk_flag === "SUSPICIOUS")
            row.classList.add("suspicious");


        row.innerHTML = `
            <td>${tx.transaction_id}</td>
            <td>${tx.user_id}</td>
            <td>${tx.amount}</td>
            <td>${tx.device_id}</td>
            <td>${tx.risk_flag}</td>
            <td>${tx.rule_triggered || ""}</td>
        `;

        tbody.appendChild(row);

    });

}



// Load dashboard
async function loadDashboard() {

    const res = await fetch(`${API_URL}/dashboard`);

    const data = await res.json();

    document.getElementById("total").innerText = data.total_transactions;

    document.getElementById("flagged").innerText = data.flagged_transactions;

    document.getElementById("highRisk").innerText = data.high_risk;

    document.getElementById("suspicious").innerText = data.suspicious;

}
