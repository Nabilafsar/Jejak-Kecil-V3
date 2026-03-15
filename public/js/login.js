function validasiEmail() {
    let inputEmail = document.getElementById("email");
    let pola = /^[^\s@]+@gmail\.com$/;

    if (!pola.test(inputEmail.value)) {
        alert("Email tidak valid.");
        return false;
    }

    return true;
}

function validasiLogin() {
    if (!validasiEmail()) {
        return false; 
    }

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("registerUsers")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (password === "") {
        alert("Password tidak boleh kosong!");
        return;
    }

    if (user){
        alert("Selamat Datang.")
        window.location.href = "/public/dashboard.html";
        return false;
    } else {
        alert("Login Gagal!!")
        return false;
    }
}