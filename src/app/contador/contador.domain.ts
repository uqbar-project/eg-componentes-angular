export class Contador {
    constructor(public valor = 0) { }

    sumar() {
        this.valor++
    }

    restar() {
        this.valor--
    }
}
