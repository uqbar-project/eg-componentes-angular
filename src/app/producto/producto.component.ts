import { Component, Input } from '@angular/core'
import { Producto } from './producto.domain'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input() producto!: Producto
  @Input() productoElegido: boolean = false

}
