let saldo = document.getElementById("saldo");
let obtenerSaldo = JSON.parse(localStorage.getItem("Login"));

saldo.textContent="$"+obtenerSaldo[0].efectivo;