import { getByTestId } from './../../test-utils'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Producto } from './producto.domain'
import { ProductoComponent } from './producto.component'

describe('ProductoComponent', () => {
  let component: ProductoComponent
  let fixture: ComponentFixture<ProductoComponent>

  beforeEach(async () => {
    // Mockeamos la fecha del día
    jasmine.clock().install()
    jasmine.clock().mockDate(new Date(new Date(2014, 1, 26)))
    //
    
    await TestBed.configureTestingModule({
      declarations: [ ProductoComponent ]
    })
    .compileComponents()

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
    expect(getByTestId(fixture, 'fecha-entrega').innerHTML).toBe('Llega el 02/03/2014')
  })
})
