import { Component } from '@angular/core'

import { Producto } from './producto/producto.domain'
import { GENERO, Usuario } from './usuario/usuario.domain'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  usuarios = [
    new Usuario('Gabriel Graves', 'Soy el Brad Pitt de Lugano', GENERO.MASCULINO),
    new Usuario('Javier Zolotarchuk', 'Tengo el corazón mirando al Sur...', GENERO.MASCULINO),
    new Usuario('Clara Allende', 'Git Git Scala Git', GENERO.FEMENINO),
    new Usuario('Pepedu', 'No soy de aquí, ni soy de allá', GENERO.NO_BINARIE)
  ]
  productos = [
    new Producto('Proyector Benq Ms560 Svga 4000l', 155990, 4, 1, 'benq.png'),
    new Producto('Oferta 2 Somier 1 Plaza Y Media Sanzio 90x190 Sueño Dorado', 100524, 142, 3, 'sommier.png'),
    new Producto('Mountain bike Fierce FM18F29AM210 2019 18 frenos de disco mecánico color negro/celeste', 63599, 152, 2, 'bicicleta.png'),
    new Producto('Hidrolavadora eléctrica Logus 130 Bar con 130bar de presión máxima 220V', 68888, 34, 3, 'hidro.png'),
  ]
}
