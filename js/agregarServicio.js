const nombreServicio = document.getElementById("nomservicio");
const vencimiento = document.getElementById("vencimiento");
const monto = document.getElementById("monto");
const btnAgregar = document.getElementById("agregarServicio");

let sesion=JSON.parse(localStorage.getItem("Login"));

function servicio(nombre,vencimiento,monto){
    this._nombre=nombre;
    this._vencimiento=vencimiento;
    this._monto=monto;
}

btnAgregar.addEventListener("click",()=>{
    if(nombreServicio.value != "" && vencimiento.value != "" && monto.value != ""){
        if(monto.value > 0){
            agregar();
        }
        else{
            alert("El monto debe ser mayor a $0");
        }
    }
    else{
        alert("Debe completar todos los campos");
    }
});

function agregar(){
    let nuevaFecha=new Date(vencimiento.value);
    nuevaFecha.setDate(nuevaFecha.getDate()+1);
    sesion[0].servicios.push({
        nombre:nombreServicio.value,
        vencimiento:nuevaFecha.toLocaleDateString(),
        monto:monto.value
    });
    localStorage.setItem("Login",JSON.stringify(sesion));
    alert("El servicion fue agregado");
    setTimeout(() => {
        window.location.href="../menu.html";
    }, 1000);
    
}
