const select=document.getElementById("selectPagar");
const sesion = JSON.parse(localStorage.getItem("Login"));
const pagarServicio = document.getElementById("pagarServicio");
const monto = document.getElementById("monto");
const btnCancelar = document.getElementById("btnCancelar");
let options = "";
let montoSelect="";
monto.disabled=true;
cargarSelect();

function cargarSelect(){
    monto.value = ""
    options='<option value="elegir" selected>Elija un servicio</option>'
    for (const servicio of sesion[0].servicios) {    
        if(parseInt(servicio.monto) > 0) options+=`<option value="${servicio.nombre}">${servicio.nombre}</option>`;
    }
    select.innerHTML = options;
}
select.addEventListener("change",()=>{
    select.value != "elegir" ? verMonto(): monto.value = "";
});
btnCancelar.addEventListener("click",()=>{
    window.location.href="/secciones/servicios/menuServicio.html"
});
function verMonto(){
    let saldo = sesion[0].servicios.filter(x=> x.nombre==select.value);
    monto.value=parseInt(saldo[0].monto);
}

pagarServicio.addEventListener("click",()=>{
    if(sesion[0].efectivo > parseInt(monto.value)){
        let servicioMod=sesion[0].servicios.filter((x)=>{
            if(x.nombre == select.value){
                x.monto ="0";
            }
            return x;
        });
        sesion[0].servicios=servicioMod;
        sesion[0].efectivo = sesion[0].efectivo - parseInt(monto.value);
        localStorage.setItem("Login",JSON.stringify(sesion));
        cargarSelect();
    }else{
        alert("No tiene fondos suficientes en su cuenta");
    }
    
});
