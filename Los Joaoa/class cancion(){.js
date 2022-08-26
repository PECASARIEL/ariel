class cancion(){
    

    constructor (nombre, duracion, id, genero, cantante){
        this.nombre=nombre;
        this.duracion=duracion;
        this.id=id
        this.genero= genero
    }
    
    reproducir(){
        console.log("cancion reproducioendose")
    }
    parar(){
        console.log("cancion en pausa")
    }

    get nombre (){
        return this.nombre;
    }
}