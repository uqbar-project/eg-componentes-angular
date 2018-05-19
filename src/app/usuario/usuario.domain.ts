export class Usuario {
    static readonly FEMENINO = "F"
    static readonly MASCULINO = "M"

    nombre : string
    fraseCabecera : string
    genero : string

    constructor(nombre, fraseCabecera, genero) {
        this.nombre = nombre
        this.fraseCabecera = fraseCabecera
        this.genero = genero
    }

    esMujer() {
        return this.genero === Usuario.FEMENINO
    }

}