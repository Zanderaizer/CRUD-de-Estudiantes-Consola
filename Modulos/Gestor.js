import { Estudiante } from "./Estudiante.js";

export const GestorEstudiantes = {
    estudiantes: [],

    crear(nombre, edad, curso) {
        const nuevoEstudiante = new Estudiante(nombre, edad, curso);
        this.estudiantes.push(nuevoEstudiante);
        console.log("Estudiante agregado:", nuevoEstudiante);
    },

    listar() {
        if (this.estudiantes.length === 0) {
            console.log("No hay estudiantes registrados.");
            return;
        }
        this.estudiantes.forEach(est => {
            console.log(`ID: ${est.id}, Nombre: ${est.nombre}, Edad: ${est.edad}, Curso: ${est.curso}`);
        });
    },

    actualizar(id, nuevoNombre, nuevaEdad, nuevoCurso) {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                this.estudiantes[i].nombre = nuevoNombre;
                this.estudiantes[i].edad = nuevaEdad;
                this.estudiantes[i].curso = nuevoCurso;
                console.log("Estudiante actualizado:", this.estudiantes[i]);
                return;
            }
        }
        console.log("Estudiante no encontrado.");
    },

    eliminar(id) {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                console.log("Estudiante eliminado:", this.estudiantes[i]);
                this.estudiantes.splice(i, 1);
                return;
            }
        }
        console.log("Estudiante no encontrado.");
    }
};