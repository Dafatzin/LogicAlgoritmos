const fs = require('fs');
const filePath = 'notas.json';

/**
 * @param {string} titulo - Titulo de nota
 * @param {string} descripcion - Descripcion de nota
 */
function agregarNota(titulo, descripcion) {
    let nota = [];
    if (fs.existsSync(filePath)){
        const data = fs.readFileSync(filePath, 'utf-8');
        nota = data.trim() ? JSON.parse(data) : [];
    }
        const nuevaNota = {titulo, descripcion};
        nota.push(nuevaNota);
        fs.writeFileSync(filePath, JSON.stringify(nota, null, 2));
     console.log(`Nota "${titulo}" agregada exitosamente`);

    }
     
    function listarNotas() {
        if (!fs.existsSync(filePath)){
            console.log('No hay notas para mostrar.');
            return;
        } 
             const data = fs.readFileSync(filePath, 'utf-8');
             const notas = JSON.parse(data);

             if (notas.length === 0) {
            console.log('No hay notas guardadas.');
            return;  
                }
        console.log('Notas guardadas:');
        notas.forEach((nota, index) => {
            console.log(`${index + 1}. Titulo: ${nota.titulo}, Descripcion: ${nota.descripcion}`);
        });
    }
    /**
     * @param {string} titulo - Titulo de nota a eliminar
     */
    function eliminarNota(titulo) {
        if (!fs.existsSync(filePath)){
           console.log('Sin nota...');
                    return;
                }
                const data = fs.readFileSync(filePath, 'utf-8');
                const notas = JSON.parse(data);
                const notasRestantes = notas.filter(nota => nota.titulo !== titulo);

                if(notasRestantes.length === notas.length){
                    console.log(`No se encontró la nota con el título "${titulo}".`);
                    return;
                }
                fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
                console.log('Nota eliminada exitosamente.');
            }
            agregarNota('Compras', 'Comprar leche y pan.');
            agregarNota('Tareas', 'Terminar el proyecto de programación.');
            listarNotas();
            eliminarNota('Compras');
            listarNotas();

            
    
    