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

/* Función que recorre un array y nos retorna el índice del equipo 
con el valor de propiedad .nombre indicado (más adelante, podría servir para recorrer arrays
ordenados por goles a favor, en contra, etc) */
function indice(equipo, array = tablaTorneo) {
    for(elemento of array) {
        return array.findIndex(elemento => elemento.nombre === equipo);
    }
};

// Función que compara posiciones de equipos tomando sus índices
function comparacion(eq1, eq2, array = tablaTorneo) {
    if(array.indexOf(eq1) < array.indexOf(eq2)) {
        return eq1;
    } else {
        return eq2;
    }
}

/* Función para desplegar el nombre del equipo, dividiendo entonces las
tareas */
function mensaje(equipo) {
    console.log(`El equipo que se encuentra más arriba en la tabla es ${equipo.nombre}`);
}

// Función para calcular promedio con 3 dígitos decimales
function promedio(equipo) {
    let prom = equipo.pts / equipo.pj;
    return parseFloat(prom.toFixed(3));
}

// Agregamos a los equipos
const equipo1 = new Equipo("San Lorenzo", 3, 8, 1, 15, 12);
const equipo2 = new Equipo("Argentinos", 6, 2, 4, 15, 12);
const equipo3 = new Equipo("Independiente", 3, 2, 7, 11, 15);
const equipo4 = new Equipo("Unión", 6, 3, 2, 20, 17);
const equipo5 = new Equipo("Patronato", 5, 3, 4, 16, 13);
const equipo6 = new Equipo("River Plate", 5, 3, 4, 17, 12);
const equipo7 = new Equipo("Huracán", 5, 5, 2, 12, 9);
const equipo8 = new Equipo("Sarmiento", 5, 2, 5, 13, 13);
const equipo9 = new Equipo("Atl. Tucumán", 7, 4, 1, 13, 6);
const equipo10 = new Equipo("Gimnasia", 7, 3, 2, 13, 6);
const equipo11 = new Equipo("Platense", 4, 6, 2, 12, 10);
const equipo12 = new Equipo("C. Córdoba", 4, 2, 6, 14, 17);
const equipo13 = new Equipo("Arsenal", 3, 7, 2, 14, 14);
const equipo14 = new Equipo("Banfield", 3, 6, 3, 12, 10);
const equipo15 = new Equipo("Boca Juniors", 6, 0, 6, 18, 20);
const equipo16 = new Equipo("Tigre", 4, 4, 4, 20, 18);
const equipo17 = new Equipo("Godoy Cruz", 5, 3, 4, 13, 11);
const equipo18 = new Equipo("Colón", 3, 5, 4, 10, 12);
const equipo19 = new Equipo("Newells", 4, 5, 3, 10, 9);
const equipo20 = new Equipo("Defensa", 3, 5, 4, 11, 13);
const equipo21 = new Equipo("Racing Club", 5, 5, 2, 19, 11);
const equipo22 = new Equipo("Barracas Central", 3, 5, 4, 13, 16);
const equipo23 = new Equipo("Vélez", 1, 6, 5, 12, 16);
const equipo24 = new Equipo("Rosario Central", 4, 2, 6, 8, 13);
const equipo25 = new Equipo("Estudiantes", 3, 4, 5, 13, 16);
const equipo26 = new Equipo("Aldosivi", 2, 2, 8, 7, 19);
const equipo27 = new Equipo("Lanús", 1, 3, 8, 10, 19);
const equipo28 = new Equipo("Talleres", 3, 3, 5, 8, 10);

/* Array que contiene a los equipos (objetos) */
const equiposTorneo = [
    equipo1,
    equipo2,
    equipo3,
    equipo4,
    equipo5,
    equipo6,
    equipo7,
    equipo8,
    equipo9,
    equipo10,
    equipo11,
    equipo12,
    equipo13,
    equipo14,
    equipo15,
    equipo16,
    equipo17,
    equipo18,
    equipo19,
    equipo20,
    equipo21,
    equipo22,
    equipo23,
    equipo24,
    equipo25,
    equipo26,
    equipo27,
    equipo28,
]

/* Ahora sí, armamos una función ordenadora que respeta
los criterios futbolísticos (puntos / gf /gc) usando el método sort(),
en cada if con diferentes funciones comparadoras */
function ordenarFutbol(array) {

    // Orden descendente: b - a
    let equiposOrdenados = array
    equiposOrdenados.sort((a, b) => {

        // Si los puntos son == la resta devuelve 0, así que
        if (b.pts - a.pts == 0) {

            // pasamos a ordenar por gf, también en orden descendente
            array.sort((a, b) => {

                // Si los gf también son ==, entonces ordenamos
                if (b.gf - a.gf == 0) {

                    // según los goles en contra, ahora en orden ascendente
                    array.sort((a, b) => {

                        return a.gc - b.gc;

                    })

                } else { 
                    
                    return b.gf - a.gf;

                }


            })

        } else {

            return b.pts - a.pts;

        }
    });

    // La función devuelve un nuevo array, equiposOrdenados
    return equiposOrdenados;
}

/* Seguramente había una forma más sencilla de expresar esta función,
tomando como parámetro a la "comparadora" de antes, pero estaba medio perdido
con la recursividad */

let tablaTorneo = ordenarFutbol(equiposTorneo);

// Entrada para pedir equipo propio y último resultado
const entradaEquipo = prompt(`¿De qué equipo de fútbol de la primera división argentina
sos hincha o simpatizante?`);
const resultadoEquipo = prompt(`¿Cómo le fue a ${entradaEquipo} en su último partido?`);

/* Tomamos la entrada, buscamos el índice del objeto cuya propiedad "nombre" coincide con 
el ingresado por el usuario y así declaramos la variable equipoPropio*/ 
const equipoPropio = tablaTorneo[indice(entradaEquipo)]; 

// Llamamos a un método dependiendo del último resultado
if(resultadoEquipo == "Ganó") {
    equipoPropio.ganarPartido();
} else if(resultadoEquipo == "Perdió") {
    equipoPropio.perderPartido();
} else if(resultadoEquipo == "Empató") {
    equipoPropio.empatarPartido();
};

console.log(`Información actualizada de ${equipoPropio.nombre}`);
console.log(equipoPropio); // Información actualizada
tablaTorneo = ordenarFutbol(equiposTorneo);

// Hacemos un log de la propiedad "nombre" para cada uno de los elementos del array
for(e of tablaTorneo) {
    console.log(e.nombre);
}

// Entrada para definir equipo rival a comparar
let entradaEquipo2 = prompt("¿Con qué equipo deseás comparar las posiciones?");

/* Tomamos la entrada para asignarle 
un equipo */
let equipoRival = tablaTorneo[indice(entradaEquipo2)];

// Comparamos ambos equipos
mensaje((comparacion(equipoPropio, equipoRival)));



// Podemos averiguar promedios de equipos
let = preguntaPromedio = prompt("¿De qué equipo quieres saber el promedio?");
let = equipoPromedio = tablaTorneo[indice(preguntaPromedio)];
console.log(`El promedio de ${preguntaPromedio} es de ${promedio(equipoPromedio)}`);

function promedioBajo(array = tablaTorneo) {
    let bajo;

    array.reduce((a, b) => {
    return promedio(a) < promedio(b) ? bajo = a : bajo = b;
    });

    console.log(`El promedio más bajo es de ${bajo.nombre}, con ${promedio(bajo)}`); 
};

promedioBajo();