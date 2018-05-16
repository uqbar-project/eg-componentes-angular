export class Usuario {
    static readonly FEMENINO = "F"
    static readonly MASCULINO = "M"

    nombre : string
    fraseCabecera : string
    sexo : string

    constructor(nombre, fraseCabecera, sexo) {
        this.nombre = nombre
        this.fraseCabecera = fraseCabecera
        this.sexo = sexo
    }

    esMujer() {
        return this.sexo === Usuario.FEMENINO
    }

}