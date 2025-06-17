function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === "Thaynara" && password === "27032024") {
    window.location.href = "start.html"; // muda para a página das estrelas
  } else {
    errorMessage.textContent = "Usuário ou senha incorretos.";
  }
}
