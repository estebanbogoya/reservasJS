/* SISTEMA DE RESERVA DE HOTEL */

class Reserva {
    constructor(nombreCliente, apellidoCliente, numeroReserva, tHabitacion) {
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.numeroReserva = numeroReserva;
        this.tHabitacion = tHabitacion
    }
}

const reservas = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarReserva();
})

function agregarReserva() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const reserva = document.getElementById("reserva").value;
    const habitacion = document.getElementById("habitacion").value;

    const nuevaReserva = new Reserva(nombre, apellido, reserva, habitacion);
    reservas.push(nuevaReserva);
    console.log(reservas);
    formulario.reset();

    const reservasJSON = JSON.stringify(reservas);
    localStorage.setItem("reservas", reservasJSON);
}

const contenedorReservas = document.getElementById("contenedorReservas");
const verReservas = document.getElementById("verReservas");

verReservas.addEventListener("click", ()=>{
    contenedorReservas.innerHTML = "";
    reservas.forEach(rese => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div> 
            <h5>Nombre del cliente: ${rese.nombreCliente}</h5>
            <h5>Apellido cliente: ${rese.apellidoCliente}</h5>
            <p>Numero de reserva: ${rese.numeroReserva}</p>
            <p>Tipo de habitacion: ${rese.tHabitacion}</p>
            <br><br>
        </div>`
        contenedorReservas.appendChild(div);
    });
})