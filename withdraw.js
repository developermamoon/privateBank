document.getElementById('withdraw-btn').addEventListener('click', function(){

    // getting the withdraw value from user 
    const userWithdraw = document.getElementById('user-withdraw');//------------
    const userWithdrawAmountString = userWithdraw.value;
    const userWithdrawAmount = parseFloat(userWithdrawAmountString);

    // getting previous withdraw amount 
    const previousWithdraw = document.getElementById('previous-withdraw');//-----
    const previousWithdrawAmountString =previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // setting userWithdrawAmount to previousWithdraw 


    previousWithdraw.innerText= previousWithdrawAmount+userWithdrawAmount;
    userWithdraw.value ='';

    // setting the user withdraw into the total balance 
    const totalBalance = document.getElementById('total-balance'); //---------
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    
    const totalBalanceNew = totalBalanceValue - userWithdrawAmount;
    totalBalance.innerText = totalBalanceNew;
    


})