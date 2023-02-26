// add event handle with the withdraw button
document.getElementById("withdraw-btn").addEventListener('click', function () {
    // get the withdraw amount from withdraw field
    const withdrawField = document.getElementById("withdraw-input");
    const newWithdrawAmount = withdrawField.value;

    // get the current withdraw total
    const withdrawTotalField = document.getElementById("withdraw-total");
    const previousWithdrawTotal = withdrawTotalField.innerText;


    
    // set withdraw amount in withdraw field
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotalField.innerText = currentWithdrawTotal;
    withdrawField.value = "";

    
    // get current balance total
    const balanceTotalField = document.getElementById("balance-total");
    const previousbalanceTotal = balanceTotalField.innerText;

//   if (parseFloat(newWithdrawAmount) > parseFloat(previousWithdrawTotal)) {
//     alert("No suffecient money!");
//     return;
//   }
  

    // calculate total balance after withdraw
    const currentBalanceTotal = parseFloat(previousbalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotalField.innerText = currentBalanceTotal;


});