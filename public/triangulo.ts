function sumaTotal (evaluacion:number): [number,number,number] | null {
    for (let a = 1; a < evaluacion/3; a++) {
        for (let b = 1; b < (evaluacion - a)/2; b++) {
            const c = evaluacion - a - b
            if (a*a+b*b===c*c){
                return [a,b,c]
            }
            
        }
    }
    return null;
}


const triangulo = sumaTotal(1000);

if (triangulo){
    const [a,b,c] = triangulo;
    console.log(`Se encontro el triangulo con suma 1000 y sus lados son: a= ${a}, b= ${b} y c= ${c}`)
} else {
    console.log("No se pudo encontrar un trialgulo con la dimension solicitada")
}