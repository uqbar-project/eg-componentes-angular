import { async, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { ContadorComponent } from './contador/contador.component'
import { UsuarioComponent } from './usuario/usuario.component'

import './app.module'

/** Imports de Material */
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
