const cbuCuenta = document.getElementById("cbuCuenta");
const nombre = document.getElementById("nombreCuenta");
const apellido = document.getElementById("apellidoCuenta");
const buscarCbu = document.getElementById("buscarCbu");
const agregarCuenta = document.getElementById("agregarCuenta");
const users = JSON.parse(localStorage.getItem("users"));
const login = JSON.parse(localStorage.getItem("Login"));


nombre.disabled=true;
apellido.disabled=true;

buscarCbu.addEventListener("click",()=>{
    let datos = users.filter(x=> x.cbu == cbuCuenta.value);
    nombre.value = datos[0].nombre;
    apellido.value = datos[0].apellido;
});

agregarCuenta.addEventListener("click",()=>{
    agregar();
    swal("Nueva Cuenta!", "Agregaste una nueva cuenta!", "success");
    limpiar();
});

function agregar(){
    login[0].cuentas.push({
        cbu: cbuCuenta.value,
        nombre: nombre.value,
        apellido:apellido.value
    });
    localStorage.setItem("Login",JSON.stringify(login));
}

function limpiar(){
    cbuCuenta.value="";
    nombre.value="";
    apellido.value="";
}

