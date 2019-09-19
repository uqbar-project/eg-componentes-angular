import {TestBed, async} from '@angular/core/testing'
import {AppComponent} from './app.component'
import {UsuarioComponent} from './usuario/usuario.component'
import {ContadorComponent} from './contador/contador.component'

/** Imports de Material */
import {FormsModule} from '@angular/forms' // necesario agregarlo aqui
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material'
import {Browser} from 'protractor'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, UsuarioComponent, ContadorComponent
      ],
      imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,
        FormsModule
      ]
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('app')
  }))
})
