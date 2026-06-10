function numeroMaximo(numeros){
    if(numeros.length === 0){
        return "Arreglo vacío";
    }
    if (numeros.length ===1){
        return numeros[0];
    }
    const mid = Math.floor(numeros.length / 2);
    const left = numeroMaximo(numeros.slice(0, mid));
    const right = numeroMaximo(numeros.slice(mid));
    const leftMax = left;
    const rightMax = right;
    return Math.max(leftMax, rightMax);
}
const numeros = [3, 7, 2, 9, 5, 1];
console.log(numeroMaximo(numeros));