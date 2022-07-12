
class persona{
    hablar(){
        console.log("hola soy una personita que se llama Anne")
    }
}

let persona2= new persona ("Joao","vinces","31");
persona2.hablar ()

class animal {
    petname;
    petage;
    vacunas={vacuna1:"v1",vacuna2:"v2"};
    hablar(){
        return "Tengo" + this.petage;
        return this.vacunas.vacuna1;
    }
}
constructor(petname ="","nombre",petage="10")
this.petname=petname
this.petage=petage
    console.warn("ha nacido un pato y se llama"+ this.petname);

    const pato = new animal("patricio",2);
    console.log(pato.hablar());
