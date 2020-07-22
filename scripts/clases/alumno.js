var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, edad, peso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola", this.nombre, this.apellido);
        console.log("Tu edad es:", this.edad);
        console.log("Tu peso es:", this.peso);
    };
    return Alumno;
}());
var alumno1 = new Alumno('pedro', 'martinez', 15, 60);
var alumno2 = new Alumno('maria', 'perez', 18, 61);
