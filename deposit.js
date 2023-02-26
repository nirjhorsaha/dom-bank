// add addEventListener to the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the deposit amount from the deposit input field
  const depositField = document.getElementById("deposit-input");
  // for input field, use .value to get value inside the input field
  const newDepositAmount = depositField.value;

  // get the current deposit total
  const depositTotalField = document.getElementById("deposite-total");
  // for non-input field(like text), use .innerText to get text
  const previousDepositTotal = depositTotalField.innerText;

    // initially previousDepositTotal and newDepositAmount value was string . for this we use parseFloat to convert string to number;
  // add numbers to set the total deposit
  const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
  depositTotalField.innerText = currentDepositTotal;
    depositField.value = "";
    
    // get current balance total
    const balanceTotalField = document.getElementById('balance-total');
    const previousbalanceTotal = balanceTotalField.innerText;

    // calculate total balance
    const currentBalanceTotal = parseFloat(previousbalanceTotal) + parseFloat(newDepositAmount);
    balanceTotalField.innerText = currentBalanceTotal;


});
