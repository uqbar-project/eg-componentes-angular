import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { UsuarioComponent } from './usuario.component'
import { GENERO, Usuario } from './usuario.domain'

describe('UsuarioComponent', () => {
  let component: UsuarioComponent
  let fixture: ComponentFixture<UsuarioComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioComponent],
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
    component.usuario = new Usuario('Guadalupe Gerschwin', 'La vida es muy corta para poner una frase ingeniosa', GENERO.FEMENINO)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('a woman should appear with a rose icon', () => {
    const result = fixture.debugElement.nativeElement
    expect(esMujer(result)).toBeTruthy()
  })
})

function esMujer(result: any) {
  return result.querySelector('.mat-accent')
}
