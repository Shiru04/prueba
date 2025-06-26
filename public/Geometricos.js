function isPentagonal(x) {
    let n = (1 + Math.sqrt(1 + 24 * x)) / 6;
    return n === Math.floor(n);
} //se verifica por medio de la formula cuadratica general si el numero es entero y hace match con las carateristicas de un pentagonal

function hexagonal(n) {
    return n * (2 * n - 1); // se utiliza la formula proporcionada para encontrar cual es el siguiente numero hexagonal
}

let n = 144; // se obtiene este numero de parte del hecho que 143 pertenece a la secuencia de 40755

while (true) {
    let hex = hexagonal(n);
    if (isPentagonal(hex)) { //se evalua  el hecho que sea hexagonal y triangular
        console.log("El siguiente número que es triangular, pentagonal y hexagonal es:", hex);
        break;
    }
    n++;
}

//no se tomo en cuenta la formula triagular debido a que todos los numeros hexagonales siempre seran triangulares. 