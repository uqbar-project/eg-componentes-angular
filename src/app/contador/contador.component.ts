import { Component, Input, OnInit } from '@angular/core'
import { Contador } from './contador.domain'

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input() valorInicial : number
  contador : Contador
  
  ngOnInit() {
    this.contador = new Contador(this.valorInicial)
  }

}
