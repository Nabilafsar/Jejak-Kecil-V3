function validasiEmail() {
    let inputEmail = document.getElementById("email");
    let pola = /^[^\s@]+@gmail\.com$/;

    if (!pola.test(inputEmail.value)) {
        alert("Email tidak valid.");
        return false;
    }

    return true;
}

function register() {
    if (!validasiEmail()) {
        return false; 
    }

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("registerUsers")) || [];

    let userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("Email sudah terdaftar!");
        return false;
    }

    if (password === "") {
        alert("Password tidak boleh kosong!");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("registerUsers", JSON.stringify(users));

    alert("Registrasi berhasil! Silakan login.");
    return false;
}