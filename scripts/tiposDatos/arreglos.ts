interface Alumno {
    nombre: string;
    edad: number;
}

var nombres: Array<string> = ["juan", "pedro", "maría"];
var numeros: Array<number> = [1, 2, 3, 4];
var alumnos: Array<Alumno> = [
    {
        nombre: "juan",
        edad: 19
    },
    {
        nombre: "maria",
        edad: 20
    }
]

console.log(nombres);
console.log(numeros);
console.log(alumnos);