import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Contador } from './contador.domain'

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  // https://stackoverflow.com/questions/66843040/what-is-the-equivalent-of-late-lazy-lateinit-in-typescript
  // el signo de admiración: lazy - lateinit
  @Input() valorInicial!: number
  @Input() cantidad: number = 0

  @Output() valorActual = new EventEmitter<number>()

  contador!: Contador

  ngOnInit() {
    this.contador = new Contador(this.valorInicial, this.cantidad)
  }

  sumar() {
    this.contador.sumar()
    this.valorActual.emit(this.contador.valor)
  }

  restar() {
    this.contador.restar()
    this.valorActual.emit(this.contador.valor)
  }

}
