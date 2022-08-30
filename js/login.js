const btnIniciarSesion = document.querySelector(".btn__iniciarSesion");
const user = document.getElementById("user");
const pass = document.getElementById("pass"); 
btnIniciarSesion.addEventListener("click",()=>{

    validarUsuario() ? window.location.href ="secciones/menu.html" : alert("Los datos son incorrectos");
});

function validarUsuario(){
    let ok = false;
    let getLocalStorage;
    getLocalStorage = JSON.parse(localStorage.getItem("users"));
    for(let usuario of getLocalStorage){
        usuario.usuario === user.value && usuario.pass === pass.value ? ok=true : ok=false;       
    }
    return ok;
}