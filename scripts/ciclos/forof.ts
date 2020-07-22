interface Usuario {
    nombre: string;
    apellido: string;
    sexo: string;
}

enum sexo {
    femenino = "Femenino",
    masculino = "Masculino"
}

var usuarios: Array<Usuario> = [
    {
        nombre: "maria",
        apellido: "martinez",
        sexo: sexo.femenino
    }, {
        nombre: "juan",
        apellido: "gonzales",
        sexo: sexo.masculino
    }, {
        nombre: "pepito",
        apellido: "perez",
        sexo: sexo.masculino
    }
];

for (const user of usuarios) {
    let msj = user.sexo === sexo.femenino ? "Bienvenida" : "Bienvenido";
    console.log(msj, user.nombre, user.apellido);
}