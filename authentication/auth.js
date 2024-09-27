document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert('Username or Email already taken!');
    } else {
        
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign Up Successful! You can now log in.');
        window.location.href = 'login.html';  
    }
});


document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        localStorage.setItem('currentUser', JSON.stringify(validUser));
        alert('Login successful!');
        window.location.href = '/main/index.html';  
    } else {
        alert('Invalid username or password');
    }
});


function logout() {
    localStorage.removeItem('currentUser');
    alert('Logged out successfully!');
    window.location.href = 'login.html';  
}


document.getElementById('forgot-password-link')?.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
});


document.getElementById('reset-password-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('new-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
       
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password reset successful! You can now log in with your new password.');
        window.location.href = 'login.html'; 
    } else {
        alert('Email not found!');
    }
});