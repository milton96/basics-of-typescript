var sexo;
(function (sexo) {
    sexo["femenino"] = "Femenino";
    sexo["masculino"] = "Masculino";
})(sexo || (sexo = {}));
var usuarios = [
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
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var user = usuarios_1[_i];
    var msj = user.sexo === sexo.femenino ? "Bienvenida" : "Bienvenido";
    console.log(msj, user.nombre, user.apellido);
}
