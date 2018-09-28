import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { UsuarioComponent } from './usuario.component'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material'
import { Usuario } from './usuario.domain'

describe('UsuarioComponent', () => {
  let component: UsuarioComponent
  let fixture: ComponentFixture<UsuarioComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ],
      imports: [
        MatButtonModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatCardModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent)
    component = fixture.componentInstance
    component.usuario = new Usuario("Guadalupe Gerschwin", "La vida es muy corta para poner una frase ingeniosa", Usuario.FEMENINO)
    fixture.detectChanges()
  })
  
  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('a woman should appear with a rose icon', () => {
    const result = fixture.debugElement.nativeElement
    expect(result.querySelector(".mat-accent")).toBeTruthy()
  })
})
