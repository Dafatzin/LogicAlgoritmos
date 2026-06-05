const invitados = ["Adal", "María", "Pedro", "Ana", "Luis"];
function Encontrar(invitados) {let inicio = 0; let fin = invitados.length - 1;
    const encontrados = []
    while(inicio <= fin){ 
        if(invitados[inicio][0] === "A"){
            encontrados.push(invitados[inicio]);
        } else if (invitados[fin][0] === "A"){
            encontrados.push(invitados[fin]);
        }
        inicio ++;  fin --;
    }
     return encontrados;
    }
    console.log("Los invitados que empiezan con A son: " + Encontrar(invitados));