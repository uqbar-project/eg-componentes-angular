import { Component, OnInit, Input } from '@angular/core'
import { Contador } from './contador.domain'

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  // https://stackoverflow.com/questions/66843040/what-is-the-equivalent-of-late-lazy-lateinit-in-typescript
  // el signo de admiración: lazy - lateinit 
  @Input() valorInicial!: number
  contador!: Contador

  ngOnInit() {
    this.contador = new Contador(this.valorInicial)
  }

}
