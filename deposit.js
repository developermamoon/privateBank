document.getElementById('deposit-btn').addEventListener('click', function(){

    // step 1 getting user deposit amount
    const UserDeposit = document.getElementById('user-deposit');
    const UserDepositAmountString = UserDeposit.value;

    //user deposit amount convert to number
    const UserDepositAmountValue = parseFloat(UserDepositAmountString);
    
    // step2 getting previous deposit 
    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositValueString= previousDeposit.innerText;
    //previous deposit value convert to number
    const previousDepositValue = parseFloat(previousDepositValueString);

    // step3 updating new deposit value and clearning the value in the input field
    previousDeposit.innerText = previousDepositValue+UserDepositAmountValue;
    UserDeposit.value ='';
})