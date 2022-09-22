const select=document.getElementById("selectPagar");
const sesion = JSON.parse(localStorage.getItem("Login"));
const pagarServicio = document.getElementById("pagarServicio");
const monto = document.getElementById("monto");
let options = "";

monto.disabled=true;
cargarSelect();

function cargarSelect(){
    options='<option value="elegir" selected>Elija un servicio</option>'
    for (const servicio of sesion[0].servicios) {
        options+=`<option value="${servicio.nombre}">${servicio.nombre}</option>`
    }
    select.innerHTML = options;
}
select.addEventListener("change",()=>{
    select.value != "elegir" ? verMonto(): monto.value = "";
    
});
function verMonto(){
    let saldo = sesion[0].servicios.filter(x=> x.nombre==select.value);
    monto.value=parseInt(saldo[0].monto);
}

pagarServicio.addEventListener("click",()=>{
    
});
