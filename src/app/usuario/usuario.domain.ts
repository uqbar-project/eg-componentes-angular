export const FEMENINO = 'F'
export const MASCULINO = 'M'

export class Usuario {

    constructor(public nombre = '', public fraseCabecera = '', public genero = '') { }

    esMujer() {
        return this.genero === FEMENINO
    }

}
