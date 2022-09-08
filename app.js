function precioFinal (combo, cuotas){
    let precio = 0;
    switch (combo){
        case 1:
            precio = 1000;
            break;
        case 2:
            precio = 600;
            break;
        case 3:
            precio = 400;
            break;
    }
    switch (cuotas){
        case 1:
            return precio - precio / 4;
        case 2:
            return precio;
        case 3:
            return precio + (precio / 2);
    }
}

let combo = parseInt(prompt("Ingrese el codigo del combo que desea adquirir:    Combo 1) central + 6 sensores de movimiento ($1000)    Combo 2) central + 3 sensores de movimiento ($600)   Combo 3) central + 2 sensores de movimiento ($400)"));
while (combo != 1 && combo != 2 && combo != 3){
    combo = parseInt(prompt("Por favor, ingrese nuevamente el codigo que desea adquirir:     Combo 1) central + 6 sensores de movimiento ($1000)    Combo 2) central + 3 sensores de movimiento ($600)   Combo 3) central + 2 sensores de movimiento ($400)"));
}

let cuotas = parseInt(prompt("Ingrese el codigo de la forma de pago:     1) Efectivo (25% de descuento)   2) 3 cuotas sin interes    3) 6 cuotas con 50% de interes"));
while (cuotas != 1 && cuotas != 2 && cuotas != 3){
    cuotas = parseInt(prompt("Por favor, ingrese nuevamente el codigo de la forma de pago:    1) Efectivo (25% de descuento)   2) 3 cuotas sin interes    3) 6 cuotas con 50% de interes"));
}
alert(`Usted debera pagar un total de $ ${precioFinal(combo,cuotas)}`)


/*
alert("Ingrese el codigo de producto que desea comprar: 1-Camara     2-Alarma    3-Consola.    El precio de cada producto es:  1- $500      2-$200      3-$1000")
let seleccionado = parseInt(prompt("Ingrese el codigo del producto"))
let cobro = parseInt(prompt("Ingrese el metodo de pago: 1-efectivo (%15 de descuento)   2- 3 cuotas sin interes   3-6 cuotas con un interes del %54"))
alert(producto(seleccionado))*/