import { Component, Input } from '@angular/core'

import { GENERO, Usuario } from './usuario.domain'

const mapaColores = {
  [GENERO.FEMENINO]: 'accent',
  [GENERO.MASCULINO]: 'primary',
  [GENERO.NO_BINARIE]: 'neutral',
}

const mapaIconos = {
  [GENERO.FEMENINO]: '',
  [GENERO.MASCULINO]: '_outline',
  [GENERO.NO_BINARIE]: '',
}

@Component({ selector: 'app-usuario', templateUrl: './usuario.component.html', styleUrls: ['./usuario.component.css'] })
export class UsuarioComponent {

  @Input() usuario: Usuario

  get usuarioClass() {
    return mapaIconos[this.usuario.genero]
  }

  get usuarioColor() {
    return mapaColores[this.usuario.genero]
  }

}
