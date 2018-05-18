import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UsuarioComponent } from './usuario.component'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material'

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
  })
  
  it('should create', () => {
    // fixture.detectChanges()
    expect(component).toBeTruthy()
  })
})
