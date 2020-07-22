interface Usuario {
    nombre: string;
    apellido: string;
    sexo: string;
}

enum sexo2 {
    femenino = "Femenino",
    masculino = "Masculino"
}

var usuarios: Array<Usuario> = [
    {
        nombre: "maria",
        apellido: "martinez",
        sexo: sexo2.femenino
    }, {
        nombre: "juan",
        apellido: "gonzales",
        sexo: sexo2.masculino
    }, {
        nombre: "pepito",
        apellido: "perez",
        sexo: sexo2.masculino
    }
];

for (const key in usuarios) {
    if (Object.prototype.hasOwnProperty.call(usuarios, key)) {
        const element = usuarios[key];
        console.log(key);
        console.log(element);
    }
}