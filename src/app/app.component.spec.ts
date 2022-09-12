import { waitForAsync, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { ContadorComponent } from './contador/contador.component'
import { ProductoComponent } from './producto/producto.component'
import { UsuarioComponent } from './usuario/usuario.component'

import './app.module'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        ContadorComponent,
        ProductoComponent,
        UsuarioComponent, 
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule
      ]
    }).compileComponents()
  }))
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it(`should have as title 'app'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('app')
  }))
})
