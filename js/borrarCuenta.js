const selectCuenta = document.getElementById("selectPagar");
const nombre = document.getElementById("nombreCuenta");
const apellido = document.getElementById("apellidoCuenta");
const borrarCuenta = document.getElementById("borrarCuenta");
const login = JSON.parse(localStorage.getItem("Login"));

cargarCuentas();
nombre.disabled=true;
apellido.disabled=true;

function cargarCuentas(){
    let options='<option value="elegir" selected>Elija el CBU que va eliminar</option>'
    for (const servicio of login[0].cuentas) {
        options+=`<option value="${servicio.cbu}">${servicio.cbu}</option>`
    }
    selectCuenta.innerHTML = options;
}

selectCuenta.addEventListener("change",()=>{
    for (const item of login[0].cuentas) {
        if(item.cbu == selectCuenta.value){
            nombre.value = item.nombre;
            apellido.value = item.apellido;
        }
    }
});

borrarCuenta.addEventListener("click",()=>{
    let borrar=login[0].cuentas.filter(x=> x.cbu != selectCuenta.value);
    login[0].cuentas = borrar;
    localStorage.setItem("Login",JSON.stringify(login));
    limpiar();
    cargarCuentas();
});

function limpiar(){
    nombre.value="";
    apellido.value="";
}
