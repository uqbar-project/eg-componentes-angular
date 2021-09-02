import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { UsuarioComponent } from './usuario.component'
import { GENERO, Usuario } from './usuario.domain'

describe('UsuarioComponent', () => {
  let component: UsuarioComponent
  let fixture: ComponentFixture<UsuarioComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioComponent],
      imports: [
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

  it('female gender should appear with a special icon', () => {
    const result = fixture.debugElement.nativeElement
    expect(esMujer(result)).toBeTruthy()
  })
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function esMujer(result: any) {
  return result.querySelector('.accent')
}
