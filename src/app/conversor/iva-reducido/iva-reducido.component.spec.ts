import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaReducidoComponent } from './iva-reducido.component';

describe('IvaReducidoComponent', () => {
  let component: IvaReducidoComponent;
  let fixture: ComponentFixture<IvaReducidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IvaReducidoComponent]
    });
    fixture = TestBed.createComponent(IvaReducidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
