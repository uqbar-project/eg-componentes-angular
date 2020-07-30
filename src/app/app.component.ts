import { Component } from '@angular/core'

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
}
