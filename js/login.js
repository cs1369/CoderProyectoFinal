const btnIniciarSesion = document.querySelector(".btn__iniciarSesion");
const user = document.getElementById("user");
const pass = document.getElementById("pass"); 
btnIniciarSesion.addEventListener("click",()=>{

    validarUsuario() ? window.location.href ="secciones/menu.html" : 
    swal({
        title: "Error",
        text: "Los Datos Son Incorrectos",
        icon: "error",
      });
});

function validarUsuario(){
    let ok;
    let getLocalStorage;
    getLocalStorage = JSON.parse(localStorage.getItem("users"));

    ok =()=>{
        let valor = false;
        getLocalStorage.forEach(x => {
            x.usuario == user.value && x.pass == pass.value ? valor=true : valor ;
        });
        return valor;
    }
     if(ok()) guardarUsuario(user.value);
    return ok();
}
function guardarUsuario(usuario){
    let gls;
    let userOnline;
    gls= JSON.parse(localStorage.getItem("users"));
    userOnline=gls.filter(x=> x.usuario == usuario);
    localStorage.setItem("Login",JSON.stringify(userOnline));
}