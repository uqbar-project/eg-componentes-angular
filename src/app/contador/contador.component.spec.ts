import { ContadorComponent } from './contador.component'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { getByTestId } from '../../test-utils'

/** Imports de Material */
describe('fixture', () => {
  let component: ContadorComponent
  let fixture: ComponentFixture<ContadorComponent>

  beforeEach(waitForAsync(() => {
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

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ContadorComponent)
    component = fixture.componentInstance
    component.valorInicial = 5
    component.ngOnInit()
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('initial value should be 5 if setted', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(getByTestId(fixture, 'contador').value).toEqual('5')
    })
  }))
  it('initial value should increase if plus button clicked', waitForAsync(() => {
    getByTestId(fixture, 'sumar').click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(getByTestId(fixture, 'contador').value).toEqual('6')
    })
  }))
  it('initial value should decrease if minus button clicked', waitForAsync(() => {
    getByTestId(fixture, 'restar').click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(getByTestId(fixture, 'contador').value).toEqual('4')
    })
  }))

})
