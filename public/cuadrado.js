
function cuadrado (p1,p2,p3,p4){
    const puntos = [p1, p2, p3, p4];
    const distances = [];

    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            distances.push(distancias(puntos[i], puntos[j]));
        }
    }
    distances.sort((a, b) => a - b);
    const [lado1, lado2, lado3, lado4, diag1, diag2] = distances;
    return (
        lado1 > 0 &&
        lado1 === lado2 &&
        lado2 === lado3 &&
        lado3 === lado4 &&
        diag1 === diag2
    );
}

function distancias(p1, p2) {
    const dx = p1[0] - p2[0];
    const dy = p1[1] - p2[1];
    return dx * dx + dy * dy;
}