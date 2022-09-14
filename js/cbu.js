let cbu = document.querySelector(".cbu");
let obtenercbu = JSON.parse(localStorage.getItem("Login"));

cbu.textContent=obtenercbu[0].cbu;