  const productos = [
    { nombre:"Camiseta", precio: 15, categoria: "Ropa"},
    { nombre:"Laptop", precio: 800, categoria: "Electrónica"},
    { nombre: "Zapatos", precio: 12, categoria: "Educación"},
    { nombre: "Libro", precio: 12, categoria: "Educación"},
    { nombre: "Celular", precio: 600, categoria: "Eletrónica"},

]
const menosDe100 = productos.filter(product => product.precio < 100);
console.log(menosDe100);

const Ordenar = productos.sort( (a, b) => a.nombre.localeCompare(b.nombre));
console.log(Ordenar);

const nombreProducto = productos.map(product => product.nombre);
console.log(nombreProducto);
