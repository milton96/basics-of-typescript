var sexo2;
(function (sexo2) {
    sexo2["femenino"] = "Femenino";
    sexo2["masculino"] = "Masculino";
})(sexo2 || (sexo2 = {}));
var usuarios = [
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
for (var key in usuarios) {
    if (Object.prototype.hasOwnProperty.call(usuarios, key)) {
        var element = usuarios[key];
        console.log(key);
        console.log(element);
    }
}
