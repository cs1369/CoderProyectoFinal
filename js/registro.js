const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const regUser = document.getElementById("regUser");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const rePass = document.getElementById("rePass");
const btnRegistro = document.getElementById("btnRegistro");
let usuarios;

JSON.parse(localStorage.getItem("users")) == null ? usuarios=[]: usuarios=JSON.parse(localStorage.getItem("users"));

btnRegistro.addEventListener("click",()=>{
    crearUsuario();
});

document.getElementById("btnCancelar").addEventListener("click",()=>{
    window.location.href="../../index.html";
});

function users(nombre,apellido,usuario,email,pass,cbu){
    this.nombre=nombre;
    this.apellido=apellido;
    this.usuario = usuario;
    this.email = email;
    this.pass = pass;
    this.efectivo = 120000;
    this.cbu=cbu;
    this.servicios=[];
    this.transferencias=[];
    this.cuentas=[];
}
function crearUsuario(){
    if(validaciones()){
        usuarios.push(new users(nombre.value,apellido.value,regUser.value,email.value,pass.value,generarCbu()));
        localStorage.setItem("users",JSON.stringify(usuarios));
        window.location.href="../../index.html";
    }
}
function generarCbu(){
    let n1=Math.floor(Math.random(100,999)*10000000);
    let n2=Date.now();
    return n1+""+n2;
}
function validaciones(){
    let ok = false;

    regUser.value.length >6 ? pass.value.length>6 ? pass.value === rePass.value? ok=true : error("*Las contraseñas no coinciden") : error("*La contraseña debe tener mas de 6 digitos.") : error("*El usuario debe tener mas de 6 caracteres.");

    return ok;
}

function error(value){
    document.querySelector(".errores__container").innerHTML="";
    let mensaje = document.createElement("p");
    mensaje.textContent=value;
    mensaje.classList.add("error__p");
    document.querySelector(".errores__container").appendChild(mensaje);
}