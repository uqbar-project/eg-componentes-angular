import { Component } from '@angular/core';
import { Usuario, FEMENINO, MASCULINO } from './usuario/usuario.domain'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  usuarios = [
    new Usuario('Gabriel Graves', 'Soy el Brad Pitt de Lugano', MASCULINO),
    new Usuario('Javier Zolotarchuk', 'Tengo el corazón mirando al Sur...', MASCULINO),
    new Usuario('Clara Allende', 'Git Git Scala Git', FEMENINO)
  ]
}
