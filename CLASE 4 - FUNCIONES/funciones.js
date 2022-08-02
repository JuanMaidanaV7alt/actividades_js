/* Parámetros para equipos: nombre, puntos, partidos jugados,
partidos ganados, partidos empatados, partidos perdidos,
goles a favor y goles en contra */

class Equipo {
    constructor(nombre, pg, pe, pp, gf, gc) {
        this.nombre = nombre;
        this.pg = pg;
        this.pe = pe;
        this.pp = pp;
        this.pj = pg + pe + pp;
        this.pts = (pg * 3) + pe;
        this.gf = gf;
        this.gc = gc;
    }
    
    // El método "Ganar partido" suma 3 puntos
    ganarPartido() {
        this.pts += 3;
        this.pj = this.pj + 1;
        this.pg += 1;
    }

    // El método "Empatar partido" suma 1 punto
    empatarPartido() {
        this.pts += 1;
        this.pj = this.pj + 1;
        this.pe += 1;
    }

    // El método "Perder partido" no suma puntos
    perderPartido() {
        this.pj = this.pj + 1;
        this.pp += 1;
    }
}

/* Primer intento de comparación, accediendo directamente a las llaves
sin indicar ninguna en particular (funciona sólo si se reordenan como 
pts - gf - etc, ya que si no toma el nombre del equipo y, además,
es inútil para comparar goles en contra, ya que ahí debería arrojar al
que menos tiene). */

/* function comparacion(obj1, obj2) {
    const llaves1 = Object.keys(obj1);
    const llaves2 = Object.keys(obj2);

    if (llaves1.length !== llaves2.length) {
        return null;
    }
    for (let llave of llaves1) {
        if (obj1[llave] > obj2[llave]) {
            return obj1;
        } else if (obj2[llave] > obj1[llave]) {
            return obj2;
        }
    }

}; */


/* Función que compara en dos equipos: puntos, 
goles a favor y goles en contra y devuelve al mejor posicionado */

function comparacion(obj1, obj2) {
    
    if((obj1.pts > obj2.pts) || ((obj1.pts == obj2.pts) && (obj1.gf > obj2.gf)) || ((obj1.pts == obj2.pts) && (obj1.gf == obj2.gf) && (obj1.gc < obj2.gc)) ) {
        return obj1;
    } else {
        return obj2;
    }

};

/* Función para desplegar el nombre del equipo, dividiendo entonces las
tareas */

function mensaje(equipo) {
    console.log("El equipo que se encuentra más arriba en la tabla es " + equipo.nombre);
}

// Agregamos a los equipos
const equipo1 = new Equipo("Boca Juniors", 5, 0, 6, 16, 19);
const equipo2 = new Equipo("River Plate", 4, 3, 4, 16, 12);
const equipo3 = new Equipo("Racing", 5, 4, 2, 19, 11);
const equipo4 = new Equipo("Independiente", 2, 2, 6, 8, 14);
const equipo5 = new Equipo("San Lorenzo", 3, 7, 1, 15, 12);

// Creamos un objeto que contiene a los equipos como valores
const grandes = {
    "Boca Juniors" : equipo1,
    "River Plate" : equipo2,
    "Racing" : equipo3,
    "Independiente" : equipo4,
    "San Lorenzo" : equipo5,
};

console.log(grandes);

// Entrada para pedir equipo propio y último resultado
const entradaEquipo = prompt("¿Por cuál de los grandes del fútbol argentino sentís más simpatía?");
const resultadoEquipo = prompt("¿Cómo le fue a " + entradaEquipo + " en su último partido?");

// Tomamos la entrada para acceder (y asignar) un valor de "grandes"
const equipoPropio = grandes[entradaEquipo]; 

// Llamamos a un método dependiendo del último resultado
if(resultadoEquipo == "Ganó") {
    equipoPropio.ganarPartido();
} else if(resultadoEquipo == "Perdió") {
    equipoPropio.perderPartido();
} else if(resultadoEquipo == "Empató") {
    equipoPropio.empatarPartido();
};

console.log(equipoPropio); // Información actualizada

let entradaEquipo2 
let equipoRival

while(equipoRival !== "") {

    // Entrada para definir equipo rival a comparar
    entradaEquipo2 = prompt("¿Con qué equipo deseás comparar las posiciones?");

    /* Tomamos la entrada para acceder (y asignar) 
    un valor de "grandes" */
    equipoRival = grandes[entradaEquipo2];
    
    // Comparamos ambos equipos
    mensaje((comparacion(equipoPropio, equipoRival)));
}