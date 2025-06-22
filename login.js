document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const usernameInput = document.getElementById("inp12").value.trim();
  const passwordInput = document.getElementById("inp22").value.trim();

  if (!usernameInput || !passwordInput) {
    alert("Введите логин и пароль!");
    return;
  }

  if (
    storedUser &&
    usernameInput === storedUser.username &&
    passwordInput === storedUser.password
  ) {
    localStorage.setItem("loggedInUser", usernameInput);
    alert("Вы вошли в систему!");
    window.location.href = "index.html";
  } else {
    alert("Неправильный логин или пароль!");
  }
});