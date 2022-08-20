// step 1 login button add event listener 
document.getElementById('login-btn').addEventListener('click', function(){
    // getting user id 
    const getUserId = document.getElementById('user-email');
    const getUserIdValue = getUserId.value;

    // getting user password 

    const getUserPass = document.getElementById('user-pass');
    const getUserPassValue = getUserPass.value;

    // validation check 
    if(getUserIdValue === 'admin' && getUserPassValue ==='admin123'){
        window.location.href="bank.html";
    }
    else if (getUserIdValue === 'admin' && getUserPassValue !== 'admin123') {
        alert("Invalid Password");
    }
    else if (getUserIdValue !== 'admin' && getUserPassValue === 'admin123') {
        alert("Invalid Id");
    }
    else{
        alert("Invalid User id and Password");
    }

})