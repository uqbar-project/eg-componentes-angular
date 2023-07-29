import { Component, Input, } from '@angular/core'
import { Producto } from './producto.domain'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input() producto!: Producto

}
