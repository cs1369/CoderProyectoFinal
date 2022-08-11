let fecha= document.getElementById("fecha");
let buscarBtn=document.getElementById("buscarBtn");
let datos=[];
let datosRender=``;
let list = document.querySelector(".list");
generarDatos();

function movimientos(motivo,fecha){
    this.motivo=motivo;
    this.fecha=fecha;
}
imprimirDatos(datos);

function imprimirDatos(listas){
    datosRender=``;
    for (const lista of listas) {
        datosRender += `<li class="list-items"><span class="line-btn"></span><p id="movimientoMotivo" class="movimiento-motivo">${lista.motivo}</p><p id="fechaMovimientos" class="movimiento-fecha">${lista.fecha}</p></li>`;
    }
    list.innerHTML = datosRender;
}
function generarDatos(){
    datos.push(new movimientos("MercadoPago","11/7/2022"));
    datos.push(new movimientos("Tarjeta Visa","12/6/2022"));
    datos.push(new movimientos("Entradas Cine",new Date().toLocaleDateString()));
    datos.push(new movimientos("Transferencia Pepito","9/1/2022"));
    datos.push(new movimientos("Luz","12/12/2021"));
    datos.push(new movimientos("Agua","11/7/2022"));
    datos.push(new movimientos("Gas","11/8/2022"));
    datos.push(new movimientos("Super Vea","5/3/2022"));
}

buscarBtn.addEventListener("click",()=>{
    let nuevaFecha=new Date(fecha.value);
    nuevaFecha.setDate(nuevaFecha.getDate()+1);
    listRender(nuevaFecha.toLocaleDateString());
});

function listRender(fechaBuscar){
    const result = datos.filter(dato => dato.fecha == fechaBuscar);
    imprimirDatos(result);
}
