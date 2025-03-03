export class Estudiante {
    static contadorId = 1;
    constructor(nombre, edad, curso) {
        this.id = Estudiante.contadorId++;
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}