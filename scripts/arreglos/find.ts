interface Persona {
    ID: number;
    nombre: string;
    apellido: string;
    edad: number;
}
var lista: Persona[] = [];

lista.push({ ID: 1, nombre: "maria", apellido: "perez", edad: 20 });
lista.push({ ID: 2, nombre: "carlos", apellido: "guitierrez", edad: 10 });
lista.push({ ID: 3, nombre: "pedro", apellido: "martinez", edad: 18 });
lista.push({ ID: 4, nombre: "juan", apellido: "gonzales", edad: 25 });


lista.forEach((persona) => {
    if (persona.edad >= 18) {
        console.log("Puedes pasar:", persona.nombre, persona.apellido);
    } else {
        console.log("No puedes pasar:", persona.nombre, persona.apellido);
    }
});

var personaEncontrada = lista.find((persona) => {
   // return persona.ID == 2;
   return persona.nombre.includes("ar");
});

console.log(personaEncontrada);