document.getElementById('withdraw-btn').addEventListener('click', function(){

    // getting the withdraw value from user 
    const userWithdraw = document.getElementById('user-withdraw');//------------
    const userWithdrawAmountString = userWithdraw.value;
    const userWithdrawAmount = parseFloat(userWithdrawAmountString);

    // getting previous withdraw amount 
    const previousWithdraw = document.getElementById('previous-withdraw');//-----
    const previousWithdrawAmountString =previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);


    // setting the user withdraw into the total balance 
    const totalBalance = document.getElementById('total-balance'); //---------
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    userWithdraw.value ='';
    
    // condition 
    if(isNaN(userWithdrawAmount)){
        alert("Invalid Input");
        return;
    }


    if (userWithdrawAmount > totalBalanceValue) {
        alert("You Do not Have Enough Money to withdraw");
        return;
    }
    
    // setting userWithdrawAmount to previousWithdraw 
    previousWithdraw.innerText= previousWithdrawAmount+userWithdrawAmount;

    

    
    
    const totalBalanceNew = totalBalanceValue - userWithdrawAmount;
    totalBalance.innerText = totalBalanceNew;
    


})