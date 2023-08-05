//
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-amount');
    // console.log(previousDepositTotal);

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit total value
    setTextElementValueById('deposit-amount', newDepositTotal);

    // get previous balance by using function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

});