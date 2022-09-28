let fecha= document.getElementById("fecha");
let buscarBtn=document.getElementById("buscarBtn");
let datos;
let sesion = JSON.parse(localStorage.getItem("Login"));
let datosRender=``;
let list = document.querySelector(".list");
datos = sesion[0].servicios.filter(x => x.monto == "0");
console.log(datos);
/*generarDatos();*/

function movimientos(motivo,fecha){
    this.motivo=motivo;
    this.fecha=fecha;
}
imprimirDatos(datos);

function imprimirDatos(listas){
    datosRender=``;
    for (const lista of listas) {
        datosRender += `<li class="list-items"><span class="line-btn"></span><p id="movimientoMotivo" class="movimiento-motivo">${lista.nombre}</p><p id="fechaMovimientos" class="movimiento-fecha">Vto ${lista.vencimiento}</p></li>`;
    }
    list.innerHTML = datosRender;
}


buscarBtn.addEventListener("click",()=>{
    let nuevaFecha=new Date(fecha.value);
    nuevaFecha.setDate(nuevaFecha.getDate()+1);
    listRender(nuevaFecha.toLocaleDateString());
});

function listRender(fechaBuscar){
    const result = datos.filter(dato => dato.vencimiento == fechaBuscar);
    imprimirDatos(result);
}