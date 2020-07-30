import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { getByTestId } from 'src/test-utils'

import { ContadorComponent } from './contador.component'

/** Imports de Material */
describe('ContadorComponent', () => {
  let component: ContadorComponent
  let contadorComponent: ComponentFixture<ContadorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorComponent],
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
    contadorComponent = TestBed.createComponent(ContadorComponent)
    component = contadorComponent.debugElement.componentInstance
    contadorComponent.detectChanges()
    component.valorInicial = 5
    component.ngOnInit()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('initial value should be 5 if setted', () => {
    contadorComponent.detectChanges()
    contadorComponent.whenStable().then(() => {
      expect(getByTestId(contadorComponent, 'contador').value).toEqual('5')
    })
  })
  it('initial value should increase if plus button clicked', () => {
    getByTestId(contadorComponent, 'sumar').click()
    contadorComponent.detectChanges()
    contadorComponent.whenStable().then(() => {
      expect(getByTestId(contadorComponent, 'contador').value).toEqual('6')
    })
  })
  it('initial value should decrease if minus button clicked', () => {
    getByTestId(contadorComponent, 'restar').click()
    contadorComponent.detectChanges()
    contadorComponent.whenStable().then(() => {
      expect(getByTestId(contadorComponent, 'contador').value).toEqual('4')
    })
  })

})
