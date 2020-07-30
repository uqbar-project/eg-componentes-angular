export enum GENERO {
    FEMENINO = 'F', MASCULINO = 'M', NO_BINARIE = 'X'
}

export class Usuario {

    constructor(public nombre = '', public fraseCabecera = '', public genero = GENERO.NO_BINARIE) { }

}
