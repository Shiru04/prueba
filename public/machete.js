const machete = []

for (let index = 0; index < 10000; index++) {
    let eva = index
    let n = 0;

    while (n < 50) {
        let reverse = reverseDigit(eva);
        eva += reverse; // se hace la evaluacion de ambos terminos para la suma

        if (eva === reverseDigit(eva)) {
            break;
        }

        if (n === 49) {
            machete.push(index);
        }

        n++;
    }
}

function reverseDigit(number) {
    let digit = 0;
    let result = 0;

    while (number) {
        digit = number % 10;
        result = (result * 10) + digit;
        number = Math.floor(number / 10);
    }

    return result;
} //se utiliza una base matematica para invertir el numero, esto evita utilizacion de mayores recursos con approaches como el volverlo un array

console.log(machete);
