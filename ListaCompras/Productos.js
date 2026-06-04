const productos = [
    {nombre : "Mouse", stock: 3},
    {nombre : "Teclado", stock: 0},
    {nombre : "Monitor", stock: 2},
    {nombre: "Cable", stock: 0}    
]
productos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre}, Stock: ${producto.stock}`);
});

const Usuarios = [
    {id: 1, nombre:"Juan", activo: true},
    {id: 2, nombre:"Maria", activo: false},
    {id: 3, nombre:"Pedro", activo: true}, 
]
    Usuarios.forEach((usuario) => {
if(usuario.activo === true){ 
    console.log(`Id: ${usuario.id}, Usuario: ${usuario.nombre}, Activo: ${usuario.activo}`);
}else {
    console.log(` Usuario: ${usuario.nombre} inactivo`);
}
    })