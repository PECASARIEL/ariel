class factura {
    numeroDeFactura;
    divisa;
    subtotal;

    notificar() {
        return"mivalor"+ calculo;
    }
    
    constructor(numeroDeFactura,divisa,subtotal) {
     this.numeroDeFactura;
     this.divisa;
     this.subtotal     
    }
}

var calculo =(subtotal, iva) => subtotal*0.16

console.log(calculo(62,0.16))

var suma=(calculo,subtotal) => calculo+subtotal;

console.log(suma(calculo,0.16));

let factura1= new factura(201,"ari","mx","62","16");
console.log(factura1.notificar());
let factura2= new factura(201,"ari","mx","62","16")
console.log(factura2.notificar());
let factura3= new factura(201,"ari","mx","62","16")
console.log(factura3.notificar());
let factura4= new factura(201,"ari","mx","62","16")
console.log(factura4.notificar());
let factura5= new factura(201,"ari","mx","62","16")
console.log(factura5.notificar());





