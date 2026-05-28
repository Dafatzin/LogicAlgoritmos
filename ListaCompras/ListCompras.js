let listaDeCompras= []
function agregarProducto(){
    let producto = prompt("¿Qué producto deseas agregar?")

    if(producto){
        listaDeCompras.push(producto);
        console.log(`"${producto}" fue agregado a la lista`)
    } else{
        console.log("Aún no has escrito");
    }
}
function eliminarProducto(){
    listaDeCompras.pop()
}
function mostrarLista(){
    console.log("Tu lista de Compras: " + listaDeCompras);
}
agregarProducto();
mostrarLista();
eliminarProducto();
mostrarLista();