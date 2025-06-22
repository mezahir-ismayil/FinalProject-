let b = document.getElementById("username11");
let log1 = document.getElementById("logBtn");

function updateHeader() {
    const profJson = localStorage.getItem("loginuser");

    if (profJson) {
        const prof = JSON.parse(profJson);
        b.innerHTML = prof.username;
        log1.innerHTML = "Log out";
    } else {
        b.innerHTML = "username";
        log1.innerHTML = "Log in";
    }
}

window.onload = updateHeader;

log1.addEventListener("click", function () {
    const profJson = localStorage.getItem("loginuser");

    if (profJson) {
        localStorage.removeItem("loginuser");
        updateHeader();
        window.location.href = "index.html"; 
    } else {
        window.location.href = "login.html"; 
    }
});