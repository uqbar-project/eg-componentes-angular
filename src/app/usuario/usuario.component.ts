import { Component, Input } from '@angular/core';
import { Usuario } from './usuario.domain';

@Component({ selector: 'app-usuario', templateUrl: './usuario.component.html', styleUrls: ['./usuario.component.css'] })
export class UsuarioComponent {

  @Input() usuario: Usuario

  get usuarioClass() {
    return this.usuario.esMujer() ? '' : '_outline'
  }

  get usuarioColor() {
    return this.usuario.esMujer() ? 'accent' : 'primary'
  }

}
