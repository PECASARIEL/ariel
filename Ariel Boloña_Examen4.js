class persona {
 
    var nombre;
    var apellido;
    var edad;
 
    persona ( nombre,apellido, sueldo, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
 
      var devuelveNombre () {
        return nombre + " " + apellido;
    }
 
    }
 
     getNombre() {
        return nombre;
    }
 
    setNombre(nombre) {
        this.nombre = nombre;
    }
 
    getApellido() {
        return apellido;
    }
 
    setApellido( apellido) {
        this.apellido = apellido;
    }
 
   getEdad() {
        return edad;
    }
 
  setEdad(edad) {
        this.edad = edad;
    }
    class empleado extends persona {

        var Tipo;
 
        empleado = ( nombre,  apellido,  edad, Tipo); {
        super(nombre, apellido, edad);
        this.Tipo
    }
 
     getTipo() {
        return Tipo;
    }
 
      setTipo(int Tipo) {
        this.Tipo = Tipo;
    }
 
   
}