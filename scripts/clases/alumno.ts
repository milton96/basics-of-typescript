class Alumno {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private peso: number;

    constructor (nombre: string, apellido: string, edad: number, peso: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;

        this.mostrarMensaje();
    }

    private mostrarMensaje() {
        console.log("Hola", this.nombre, this.apellido);
        console.log("Tu edad es:", this.edad);
        console.log("Tu peso es:", this.peso);
    }
}

var alumno1: Alumno = new Alumno('pedro', 'martinez', 15, 60);

var alumno2: Alumno = new Alumno('maria', 'perez', 18, 61);
