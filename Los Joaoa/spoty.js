function menu(){
    console.log ("1.- buscar canciones \n 2.-Parar \n 3.- Reproducir \n 4.- Lista de reproduccion \n 5.- Salir de menulet")
}

let canciones=[]
function cargarCanciones(){
   cancion1 = new Cancion ("this love",3.24,001,"pop","nose");
   cancion2 = new Cancion ("love",3.24,002,"rock","nose");
   cancion3 = new Cancion ("one",3.24,003,"reggae","nose");
   cancion4 = new Cancion ("2",3.24,004,"electronica","nose");
   cancion5 =new Cancion ("roxane",3.24,005,"House","nose");
   cancion6 =new Cancion ("this love",3.24,006,"metal","nose");
   cancion7 = new Cancion ("this love",3.24,007,"pop","nose");
   cancion8 =new Cancion ("this love",3.24,008,"pop","nose");
   cancion9 =new Cancion ("this love",3.24,009,"metal","nose");
   cancion10 =new Cancion ("this love",3.24,010,"rock","nose");
   cancion11 =new Cancion ("this love",3.24,011,"rock","nose");
   cancion12 = new Cancion ("this love",3.24,012,"rock-pop","nose");
   cancion13 = new Cancion ("this love",3.24,013,"electronica","nose");
   cancion14 =new Cancion ("this love",3.24,014,"electronica","nose");
   cancion15 = new Cancion ("this love",3.24,015,"reggae","nose");
   canciones.push(cancion1);
   canciones.push(cancion2);
   canciones.push(cancion3);
   canciones.push(cancion4);
   canciones.push(cancion5);
   canciones.push(cancion6);
   canciones.push(cancion7);
   canciones.push(cancion8);
   canciones.push(cancion9);
   canciones.push(cancion10);
   canciones.push(cancion11);
   canciones.push(cancion12);
   canciones.push(cancion13);
   canciones.push(cancion14);
   canciones.push(cancion15);
}

function mostarTodaslasCaNCIONES(){
    for (let i=0; i < canciones.length; i++)
}
let listas=[]
let opcion=1

while(opcion=! 5){
    menu();
    cargarCanciones();
    for(let i=0; i< canciones.length)
    opcion= prompt ("ingrese cancion:")
    
}