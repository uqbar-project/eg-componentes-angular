import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ContadorComponent } from './contador.component'

/** Imports de Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatCardTitle } from '@angular/material';

describe('ContadorComponent', () => {
  let component: ContadorComponent
  let fixture: ComponentFixture<ContadorComponent>

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
    fixture = TestBed.createComponent(ContadorComponent)
    component = fixture.debugElement.componentInstance
    fixture.detectChanges()
    component.valorInicial = 5
    component.ngOnInit()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('initial value should be 5 if setted', () => {
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const result = fixture.debugElement.nativeElement
      expect(result.querySelector('#contador').value).toEqual('5')
    })
  })
  it('initial value should increase if plus button clicked', () => {
    const result = fixture.debugElement.nativeElement
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(result.querySelector('#contador').value).toEqual('6')
    })
  })
  it('initial value should decrease if minus button clicked', () => {
    const result = fixture.debugElement.nativeElement
    result.querySelector('#restar').click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(result.querySelector('#contador').value).toEqual('4')
    })
  })

})
