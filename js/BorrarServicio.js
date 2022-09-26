const select=document.getElementById("selectPagar");
const sesion = JSON.parse(localStorage.getItem("Login"));
const borrarServicio = document.getElementById("borrarServicio");
const monto = document.getElementById("monto");
const btnCancelar = document.getElementById("btnCancelar");
let options = "";
let servicioValue ="";
cargarSelect();

function cargarSelect(){
    options='<option value="elegir" selected>Elija un servicio</option>'
    for (const servicio of sesion[0].servicios) {
        options+=`<option value="${servicio.nombre}">${servicio.nombre}</option>`
    }
    select.innerHTML = options;
}
select.addEventListener("change",()=>{
    servicioValue=select.value;
    
});

borrarServicio.addEventListener("click",()=>{
    if(confirm("Estas Seguro que deseas borrar el servicio?")){
        borrarServicios();
        cargarSelect();
    }
});

btnCancelar.addEventListener("click",()=>{
    window.location.href="/secciones/servicios/menuServicio.html"
});

function borrarServicios(){
    let borrado = sesion[0].servicios.filter(x=> x.nombre!=servicioValue);
    sesion[0].servicios = borrado;
    localStorage.setItem("Login",JSON.stringify(sesion));
}



