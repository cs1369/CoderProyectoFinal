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

function users(usuario,email,pass,repass){
    this.usuario = usuario;
    this.email = email;
    this.pass = pass;
    this.rePass = repass;
}
function crearUsuario(){
    if(validaciones()){
        usuarios.push(new users(regUser.value,email.value,pass.value,rePass.value));
        localStorage.setItem("users",JSON.stringify(usuarios));
        window.location.href="../../index.html";
    }
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