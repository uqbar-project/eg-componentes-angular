import {Component, Input, OnInit} from '@angular/core'
import { Usuario } from './usuario'

@Component({selector: 'app-usuario', templateUrl: './usuario.component.html', styleUrls: ['./usuario.component.css']})
export class UsuarioComponent implements OnInit {

  @Input() usuario : Usuario

  get usuarioClass() {
    if (this.usuario.esMujer()) {
      return ""
    } else {
      return "_outline"
    }
  }

  get usuarioColor() {
    if (this.usuario.esMujer()) {
      return "accent"
    } else {
      return "primary"
    }
  }

  ngOnInit() {}

}
