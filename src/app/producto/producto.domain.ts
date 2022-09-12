import { addDays } from "date-fns"

export class Producto {
  constructor(
    public descripcion: string, 
    public valor: number, 
    public cantidadDisponible: number, 
    public diasEntrega: number, 
    public imagen: string) {}

    fechaEntrega() {
      return addDays(new Date(), this.diasEntrega)
    }
}
