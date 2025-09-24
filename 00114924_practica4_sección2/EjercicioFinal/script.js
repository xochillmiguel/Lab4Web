function mostrarActividad() {
    const diaIngresado = document.getElementById("campo-dia").value.toLowerCase();
    const notaPersonal = document.getElementById("campo-nota").value;
    const salida = document.getElementById("salida");

    // para no dejar el campo vacío
    if (!diaIngresado) {
        alert("Por favor, ingrese un día de la semana");
        return;
    }

    let tarea = "";

    switch (diaIngresado) {
        case "lunes":
            tarea = "Atender un cliente específico";
            break;
        case "martes":
            tarea = "Visitar una agencia fuera de la ciudad";
            break;
        case "miércoles":
        case "miercoles": // por si no ponen tilde
            tarea = "Llevar a tu hija al ballet";
            break;
        case "jueves":
            tarea = "Priorizar entregas de desarrollo";
            break;
        case "viernes":
            tarea = "Atender problemas de manera remota";
            break;
        case "sábado":
        case "sabado":
            tarea = "Hacer lo que tu esposa quiera";
            break;
        case "domingo":
            tarea = "Descansar, es domingo";
            break;
        default:
            tarea = "El día ingresado no es válido";
            alert(tarea);
            return; 
    }

    // si el dia es valido se ejecuta
    salida.textContent = `Tarea asignada: ${tarea}${notaPersonal ? " | Nota: " + notaPersonal : ""}`;
}
