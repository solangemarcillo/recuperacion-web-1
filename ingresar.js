/* EXPRESIONES REGULARES */
var expresiones_n1 = /^[0-9]$/;
var expresiones_n2 = /^\w+@\w+\.+[0-9]$/;


/* VALIDACION */
var validarNumero = document.getElementById("formulario-numero");

validarNumero.onsubmit = function() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n1').value;
    if (n1 == "" || n2 == "") {
        alert("Campos obligatorios");
        return false;
    }

    if (!expresiones_n1.test(n1)) {
        alert("Error solo se aceptan numeros");
        return false;
    } else if (!expresiones_n2.test(n2)) {
        alert("Error solo se aceptan numeros");
        return false;
    } else {
        alert("Resultado");
        validarNumero.reset();
    }
};

function guardar() {
    var n1 = prompt("Ingrese el primer numero: ");
    var n2 = prompt("Ingrese el segundo numero: ");
    var resultado;
    i = 1;
    for (i; i < 2; i++) {
        if (i == 1) {
            resultado = parseInt(n1) + parseInt(n2);
            alert("RESULTADO ENTRE LOS NUMEROS A Y B ES:" + resultado);
            if (n1 > n2) {
                alert("numero uno es mayor que numero dos", n1);
            } else if (n2 > n1) {
                alert("numero dos es mayor que numero uno", n2);

            }
        }
    }
}