document.getElementById('login-button').addEventListener('click', function () {
    // get email from input
    const userEmail = document.getElementById('user-email')
    const email = userEmail.value
    // get password from input
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value
    // get confirm password from input
    const userConfirmPassword = document.getElementById('user-confirmPassword')
    const confirmPassword = userConfirmPassword.value

    if (email == 'admin@admin.com' && password == 123456 && confirmPassword == 123456) {
        window.location.href = 'cart.html'
    }
    else if (password != 123456) {
        alert('Your password  is incorrect')
    }
    else if (password != confirmPassword) {
        alert('Your password  is incorrect')
    }
    else if (email != 'admin@admin.com') {
        alert('Your email address is invalid')
    }
    else {
        alert('Please try again')
    }


})