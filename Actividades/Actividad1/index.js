const Alumno = require("./Alumno");
const fs = require("fs/promises");
const path = "notas.txt";
const alumno1 = new Alumno ("Carlos", "Luis", 19, "DW", ["Aplicaciones Hibridas"]);
alumno1.modificarEdad(20);

console.log(alumno1.obtenerDatos());
console.log(alumno1.edad);
console.log(alumno1.obtenerCarrera());
alumno1.agregarMateria("Diseño Grafico de Web");
console.log(alumno1.mostrarMaterias());

const leerArchivo = async () =>{
    const data = await fs.readFile(path);
    console.log(data.toString());

};

const guardar = async (texto) => {
    await fs.writeFile(path,texto)
}

const Todo = async () => {
  await leerArchivo();
  await guardar("Escribiendo desde el archivo notas.txt");
}

Todo();