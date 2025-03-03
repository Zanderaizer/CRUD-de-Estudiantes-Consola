import readline from "readline";
import { GestorEstudiantes } from "./Modulos/Gestor.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\nSistema de Gestión de Estudiantes");
    console.log("1. Agregar estudiante");
    console.log("2. Listar estudiantes");
    console.log("3. Actualizar estudiante");
    console.log("4. Eliminar estudiante");
    console.log("5. Salir");

    rl.question("Seleccione una opción: ", opcion => {
        if (opcion === "1") {
            rl.question("Nombre: ", nombre => {
                rl.question("Edad: ", edad => {
                    rl.question("Curso: ", curso => {
                        GestorEstudiantes.crear(nombre, parseInt(edad), curso);
                        mostrarMenu();
                    });
                });
            });
        } else if (opcion === "2") {
            GestorEstudiantes.listar();
            mostrarMenu();
        } else if (opcion === "3") {
            rl.question("ID del estudiante a actualizar: ", id => {
                rl.question("Nuevo nombre: ", nombre => {
                    rl.question("Nueva edad: ", edad => {
                        rl.question("Nuevo nivel: ", nivel => {
                            GestorEstudiantes.actualizar(parseInt(id), nombre, parseInt(edad), nivel);
                            mostrarMenu();
                        });
                    });
                });
            });
        } else if (opcion === "4") {
            rl.question("ID del estudiante a eliminar: ", id => {
                GestorEstudiantes.eliminar(parseInt(id));
                mostrarMenu();
            });
        } else if (opcion === "5") {
            console.log("Saliendo...");
            rl.close();
        } else {
            console.log("Opción no válida");
            mostrarMenu();
        }
    });
}

mostrarMenu();
