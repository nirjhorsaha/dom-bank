document.getElementById("submit-btn").addEventListener('click', function() {
    // console.log('submit button clicked');
    const emailfield = document.getElementById("user-email");
    const email = emailfield.value;
    
    const passwordfield = document.getElementById("user-password");
    const password = passwordfield.value;
    // console.log(email, password);
    if (email === 'user@gmail.com' && password==='secretPassword') {
        // console.log('Valid User');
        window.location.href='bank.html'
    } else {
        alert('Invalid User');
        
    }
});