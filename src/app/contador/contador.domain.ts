export class Contador {
    constructor(public valor = 0, public cantidad = 0) { }

    sumar() {
        if (this.cantidad > 0 && this.valor >= this.cantidad) {
            this.valor = 1
        } else {
            this.valor++
        }
    }

    restar() {
        if (this.cantidad > 0 && this.valor <= 1) {
            this.valor = this.cantidad
        } else {
            this.valor--
        }
    }
}
