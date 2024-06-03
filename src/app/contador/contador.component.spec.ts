import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ContadorComponent } from './contador.component'
import { getByTestId } from '../test-utils'

describe('ContadorComponent', () => {
  let component: ContadorComponent
  let fixture: ComponentFixture<ContadorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorComponent]
    })
    .compileComponents()
    fixture = TestBed.createComponent(ContadorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('counter - no limit', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ContadorComponent)
      component = fixture.componentInstance
      component.valorInicial = 5
      fixture.detectChanges()
    })

    it('initial value should be the one set', () => {
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

  describe('counter - limit', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(ContadorComponent)
      component = fixture.componentInstance
      component.valorInicial = 2
      component.cantidad = 4
      fixture.detectChanges()
    })

    it('initial value should be the one set', () => {
      expect(getByTestId(fixture, 'contador').value).toEqual('2')
    })
    it('initial value should increase if plus button clicked, up to limit', () => {
      getByTestId(fixture, 'sumar').click()
      fixture.detectChanges()
      expect(getByTestId(fixture, 'contador').value).toEqual('3')
      getByTestId(fixture, 'sumar').click()
      getByTestId(fixture, 'sumar').click()
      fixture.detectChanges()
      expect(getByTestId(fixture, 'contador').value).toEqual('1')
    })
    it('initial value should decrease if minus button clicked, and start over from limit', () => {
      getByTestId(fixture, 'restar').click()
      fixture.detectChanges()
      expect(getByTestId(fixture, 'contador').value).toEqual('1')
      getByTestId(fixture, 'restar').click()
      fixture.detectChanges()
      expect(getByTestId(fixture, 'contador').value).toEqual('4')
    })
  })

})
