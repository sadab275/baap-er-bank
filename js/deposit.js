document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-field");
    const depositAmountString = depositField.value;
    const newdepositAmount = parseFloat(depositAmountString);

    const depositTotal = document.getElementById("deposit-total");
    const depositTotalString = depositTotal.innerText;
    const previousdepositTotal = parseFloat(depositTotalString);
    const currentDepositTotal = previousdepositTotal + newdepositAmount;
    depositTotal.innerText = currentDepositTotal;



    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newdepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = "";
})