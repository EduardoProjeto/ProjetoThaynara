function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Thaynara" && password === "27/03/2024") {
        window.location.href = "start.html";  // A próxima página será a da tela preta com estrelas
    } else {
        document.getElementById('error-message').innerText = "Login ou senha incorretos!";
    }
}
