const validCredentials = [
    { username: 'james', password: 'james123' },
    { username: 'dev', password: 'developeraccountonlyfortesting' },
    { username: 'publiclogin', password: '1225' }
];

function validateLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const correct = validCredentials.some(cred => 
        cred.username === usernameInput && cred.password === passwordInput
    );

    if (correct) {
        window.location.href = `loginsuccess.html?username=${encodeURIComponent(usernameInput)}`;
    } else {
        alert('the login you have put is invalid.');
    }
}
