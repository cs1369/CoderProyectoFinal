const selectCuenta = document.getElementById("selectPagar");
const nombre = document.getElementById("nombreCuenta");
const montoTransferencia = document.getElementById("montoTransferencia");
const borrarCuenta = document.getElementById("borrarCuenta");
const fondos = document.getElementById("fondos");
const btnTransferir = document.getElementById("transferir");
const login = JSON.parse(localStorage.getItem("Login"));
const users = JSON.parse(localStorage.getItem("users"));


cargarCuentas();
nombre.disabled=true;
fondos.disabled=true;
fondos.value = `$${login[0].efectivo}`;

function cargarCuentas(){
    let options='<option value="elegir" selected>Elija una cuenta</option>'
    for (const servicio of login[0].cuentas) {
        options+=`<option value="${servicio.cbu}">${servicio.cbu}</option>`
    }
    selectCuenta.innerHTML = options;
}

selectCuenta.addEventListener("change",()=>{
    for (const cuenta of login[0].cuentas) {
        if(cuenta.cbu == selectCuenta.value){
            nombre.value = `${cuenta.nombre} ${cuenta.apellido}`;
        }
    }
});

btnTransferir.addEventListener("click",()=>{
    if(parseInt(montoTransferencia.value) >= 0 && parseInt(montoTransferencia.value) <= login[0].efectivo ){
        transferir();
        window.location.href="/secciones/transferencias/menuTrasferencias.html"
    }else{
        swal("Algo salio mal!", "Verifique el monto a transferir!", "warning");
    }
});

function transferir(){
    login[0].efectivo-=parseInt(montoTransferencia.value);
    for (const user of users) {
        if(user.cbu == selectCuenta.value) user.efectivo+=parseInt(montoTransferencia.value);
    }
    localStorage.setItem("Login",JSON.stringify(login));
    localStorage.setItem("users",JSON.stringify(users));
}