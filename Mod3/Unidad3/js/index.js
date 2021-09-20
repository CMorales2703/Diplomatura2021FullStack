var ejercicio;
ejercicio = prompt("ingrese ejercicio");

/*while(isNaN(ejercicio) || parseInt(ejercicio) != 1 || parseInt(ejercicio) != 2)
{
    ejercicio = prompt("los ejercicios existentes son: 1)Distancia, 2)Mayor");
}
*/

console.log(ejercicio);
switch (parseInt(ejercicio)) {
    case 1: funcionDistancia();
        break;
    case 2: funcionMayor();
        break;
    default: document.write("no existe el ejercicio");
}



function funcionDistancia(){
    var distancia;
    distancia = prompt("ingrese distancia");
    
    if (distancia <= 1000){
        document.write("pie");
    } else if (distancia > 1000 && distancia <= 10000) {
        document.write("bicicleta");
    } else if (distancia > 10000 && distancia <= 30000) {
        document.write("colectivo");
    } else if (distancia > 30000 && distancia <= 100000) {
        document.write("Auto");
    } else {
        document.write("Avión");
    }
}

function funcionMayor(){
    var numeros = [];
    var mayor, nuevoMayor = 0;

    for(var i=0; i < 5; i++)
    {
        numeros[i] = prompt("ingrese número " + (i + 1));
        document.write("se ingreso el número " + numeros[i]);
        
        mayor = parseInt(numeros[i]);
        
        if (mayor > nuevoMayor) {
            nuevoMayor = mayor;
        }
    }
    
    document.write("el mayor es " + nuevoMayor);

    console.log(numeros);
}