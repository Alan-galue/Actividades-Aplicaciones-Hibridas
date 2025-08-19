class Alumno {
    nombre = "";
    apellido = "";
    edad = "";
    carrera = "";
    materias = [];
    constructor(nombre, apellido, edad, carrera, materias=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;

    }

    obtenerCarrera(){
        return this.carrera;
    }

    obtenerDatos(){
        return `${this.nombre} ${this.apellido}`;
    }
    modificarEdad(edad){
        this.edad = edad;
    }
    mostrarMaterias(){
        console.table(this.materias);

    }

    agregarMateria(materia){
        this.materias.push(materia);
        this.mostrarMaterias();
        return this.materias;
        
    }
    retornarEdad(edad){
        return this.edad = edad;  
    }
}
module.exports = Alumno;