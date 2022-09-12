import { ContadorComponent } from './contador.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { getByTestId } from '../../test-utils'

describe('fixture', () => {
  let component: ContadorComponent
  let fixture: ComponentFixture<ContadorComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorComponent],
      imports: [
        BrowserAnimationsModule
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent)
    component = fixture.componentInstance
    component.valorInicial = 5
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('initial value should be 5 if setted', () => {
    expect(getByTestId(fixture, 'contador').value).toEqual('5')
  })
  it('initial value should increase if plus button clicked', () => {
    getByTestId(fixture, 'sumar').click()
    fixture.detectChanges()
    expect(getByTestId(fixture, 'contador').value).toEqual('6')
  })
  it('initial value should decrease if minus button clicked', () => {
    getByTestId(fixture, 'restar').click()
    fixture.detectChanges()
    expect(getByTestId(fixture, 'contador').value).toEqual('4')
  })

})
