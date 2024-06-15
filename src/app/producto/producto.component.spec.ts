import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductoComponent } from './producto.component'
import { getByTestId } from 'app/test-utils'
import { Producto } from './producto.domain'

describe('ProductoComponent', () => {
  let component: ProductoComponent
  let fixture: ComponentFixture<ProductoComponent>

  beforeEach(async () => {
    // Mockeamos la fecha del día
    jasmine.clock().install()
    jasmine.clock().mockDate(new Date(new Date(2014, 1, 26)))
    //

    await TestBed.configureTestingModule({
      imports: [ProductoComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ProductoComponent)
    component = fixture.componentInstance
    component.producto = new Producto('Proyector', 1, 1, 4, 'benq.png')
    fixture.detectChanges()
  })

  afterEach(() => {
    jasmine.clock().uninstall()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should delegate delivery date to product object', () => {
    expect(getByTestId(fixture, 'fecha-entrega').innerHTML).toBe(
      'Llega el 02/03/2014'
    )
  })

  it('should show selected product', () => {
    component.productoElegido = true
    fixture.detectChanges()
    expect(getByTestId(fixture, 'row').getAttribute('class')).toContain('elegido')
  })
})
