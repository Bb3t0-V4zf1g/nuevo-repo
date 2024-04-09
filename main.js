class Estudiante{
    constructor(id, sexo, grado, grupo){
        this.identificador = id;
        this.sexo = sexo;
        this.grupo = grupo;
        this.grado = grado;
    }
    estudiar(){
        console.log(`El estudiante ${this.identificador} esta estudiando`)
    }
    gradoGrupo(){
        console.log(`El estudiante ${this.identificador} esta en el grado ${this.grado}, en el grupo ${this.grupo}`)
    }
}

class Trabajador extends Estudiante{
    constructor(id, sexo, puesto, grupo){
        this.puesto = puesto
        super(id, sexo, grupo)
    }
    estudiar(){
        console.log(`El trabajador ${this.identificador} está estudiando cosas laborales`)
    }
}