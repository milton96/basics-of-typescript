interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    altura: number;
    peso: number;
}

var persona1: Persona = {
    nombre: "Martin",
    apellido: "Garcia",
    edad: 15,
    altura: 1.65,
    peso: 55
}

console.log(persona1);