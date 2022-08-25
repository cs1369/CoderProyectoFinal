const regUser = document.getElementById("regUser");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const rePass = document.getElementById("rePass");
const btnRegistro = document.getElementById("btnRegistro");
let usuarios = [];


btnRegistro.addEventListener("click",()=>{
    crearUsuario();
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
    
    if(regUser.value.length >6 && email.value.length>10 && pass.value.length > 6 && rePass.value.length && pass.value === rePass.value){
        ok=true;
    }
    return ok;
}