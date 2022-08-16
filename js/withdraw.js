document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(withdrawAmountString);
    console.log(newwithdrawAmount);

    withdrawField.value = "";

    if (isNaN(newwithdrawAmount)) {
        alert("Please provide a valid number");
        return;
    }


    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalString = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalString);





    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newwithdrawAmount > previousBalanceTotal) {
        alert("Moja Nao?.. Eto taka nai");
        return;
    }

    const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;
    withdrawTotal.innerText = currentwithdrawTotal;



    const currentBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = "";


})