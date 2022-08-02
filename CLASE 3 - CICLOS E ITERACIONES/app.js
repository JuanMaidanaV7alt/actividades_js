let fecha = 2022;
let espectativaVida = 76;
let entradaNombre = prompt("Ingrese su nombre");

// While para asegurarnos de que la entrada no esté vacía, caso contrario: alert //
while(entradaNombre == "") {
    
    alert("Ingrese un nombre válido, por favor");
    entradaNombre = prompt("Ingrese su nombre");
}

// Tras la bienvenida al sitio, le pedimos al usuario que ingrese su año de nacimiento //
alert("Bienvenid@, " + entradaNombre);

let entradaNacimiento = prompt("Ingrese su año de nacimiento");

// While para asegurarnos de que la entrada no esté vacía, caso contrario: alert //
while(entradaNacimiento == "") {

    alert("Ingrese una fecha válida, por favor");
    entradaNacimiento = prompt("Ingrese su año de nacimiento");
}

/* Una vez que contamos con el dato, lo convertimos a número en un const 
 -ya que la fecha de nacimiento no cambia- */
const fechaNacimiento = parseInt(entradaNacimiento);

/* Tomando la expectativa de vida, que puede variar a lo largo del tiempo, 
calculamos la edad del usuario durante los próximos mundiales y, 
si la superan, le damos las malas noticias*/
for (fecha = 2022; fecha <= 2100; fecha = fecha + 4) {

    let edad = fecha - fechaNacimiento;

    if (edad <= espectativaVida) {
    
    console.log("En el mundial del " + fecha + ", usted tendrá " + edad + " años");
    } else {

    console.log("La esperanza de vida en la Argentina, de " + espectativaVida + " años, nos impide asegurarle si llegará con vida a esta fecha. ¡Qué lástima!");
    }

}
