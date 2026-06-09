function EncontrarPalabraMasLarga(texto){
const palabras = texto.split(' ');
let palabraMasLarga = '';
    for(let i = 0; i < palabras.length; i++){
        if(palabras[i].length > palabraMasLarga.length){
            palabraMasLarga = palabras[i];
        }
    }
   console.log("Palabra más Larga= " + palabraMasLarga);
   return palabraMasLarga;
} 
let resultado = prompt("Ingresa el texto a analizar:");
EncontrarPalabraMasLarga(resultado);

