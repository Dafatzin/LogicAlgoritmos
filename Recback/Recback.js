const gifts = ["muñeca", "carro de juguete", "rompecabezas", "lego", "pelota","consola de videojuegos"];
function encontrarGift(gifts, giftName, index= 0) {
    if (index === gifts.length) {
        return "Regalo no encontrado";
    }
    if (gifts[index] === giftName) {
        return `Regalo encontrado en la posición ${index + 1}`;
    }
    return encontrarGift(gifts, giftName, index + 1);
}
const giftName = prompt("Ingrese el nombre del regalo que quiera encontrar: ").toLowerCase(); 
const resultado = encontrarGift(gifts, giftName);
console.log(resultado);