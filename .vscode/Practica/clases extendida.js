class Device {
    constructor(n="bicicleta"){
        this.nombre =n;
    }
    quienSoy () {
        return "hola soy"+ this.nombre;
    }
 

    sirvopara () {
        return "te ayudo a ";
    }  
}
class carro extends Device {
    sirvopara(){
        return super.quienSoy() + "runrun";
    }
}
console.log (new Device().sirvopara());
console.log (new carro().sirvopara());