interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}
var lista: Persona[] = [];

lista.push({ nombre: "maria", apellido: "perez", edad: 20 });
lista.push({ nombre: "carlos", apellido: "guitierrez", edad: 10 });
lista.push({ nombre: "pedro", apellido: "martinez", edad: 18 });
lista.push({ nombre: "juan", apellido: "gonzales", edad: 25 });


lista.forEach((persona) => {
    if (persona.edad >= 18) {
        console.log("Puedes pasar:",persona.nombre, persona.apellido);
    } else {
        console.log("No puedes pasar:",persona.nombre, persona.apellido);
    }
});