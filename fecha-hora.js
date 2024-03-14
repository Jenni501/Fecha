
const fechaHoraElemento = document.getElementById('fecha-hora');

function mostrarFechaHoraFormateada() {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const fechaHoraActual = new Date();
    const diaSemana = diasSemana[fechaHoraActual.getDay()];
    const dia = fechaHoraActual.getDate();
    const mes = meses[fechaHoraActual.getMonth()];
    const año = fechaHoraActual.getFullYear();
    let hora = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();
    const ampm = hora >= 12 ? 'pm' : 'am';

    hora = hora % 12;
    hora = hora ? hora : 12;

    const fechaHoraFormateada = `${diaSemana} ${dia} de ${mes} de ${año} ${hora}:${minutos < 10 ? '0' + minutos : minutos}${ampm}`;

    fechaHoraElemento.textContent = fechaHoraFormateada;
}

mostrarFechaHoraFormateada();