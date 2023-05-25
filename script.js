function limpiarFormulario() {

    document.getElementById("miForm").reset();
    document.getElementById("resumenApagar").innerHTML = 0

}

function calcularResumen() {

    var cantidadPersonas = parseInt(document.getElementById("cantidadPersonas").value);
    var categoriaDescuento = document.getElementById("categoriaDescuento").value;
    var precioEntrada = 200; // Precio base de la entrada

    // Calcular el descuento según la categoría seleccionada
    var descuento;
    if (categoriaDescuento === "estudiante") {
        descuento = 0.8; // 80% de descuento para estudiantes
    } else if (categoriaDescuento === "trainee") {
        descuento = 0.5; // 50% de descuento para trainees
    } else if (categoriaDescuento === "junior") {
        descuento = 0.15; // 15% de descuento para juniors
    } else {
        descuento = 0; // Sin descuento 
    }

    // Calcular el precio total

    var precioTotal = cantidadPersonas * precioEntrada * (1 - descuento);


    // Resumen a pagar 

    document.getElementById("resumenApagar").innerHTML = precioTotal;

}