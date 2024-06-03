import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Producto } from './producto/producto.domain'
import { ProductoComponent } from './producto/producto.component'
import { ContadorComponent } from './contador/contador.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoComponent, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eg-componentes-angular'
  item = 1
  productos = [
    new Producto('Proyector Benq Ms560 Svga 4000l', 155990, 4, 1, 'benq.png'),
    new Producto('Oferta 2 Sommier 1 Plaza Y Media Sanzio 90x190 Sueño Dorado', 100524, 142, 3, 'sommier.png'),
    new Producto('Mountain bike Fierce FM18F29AM210 2019 18 frenos de disco mecánico color negro/celeste', 63599, 152, 2, 'bicicleta.png'),
    new Producto('Hidrolavadora eléctrica Logus 130 Bar con 130bar de presión máxima 220V', 68888, 34, 3, 'hidro.png'),
  ]

  seleccionarProducto(nuevoItem: number) {
    this.item = nuevoItem
  }
}
