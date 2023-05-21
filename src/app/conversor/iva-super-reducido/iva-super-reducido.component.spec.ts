import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaSuperReducidoComponent } from './iva-super-reducido.component';

describe('IvaSuperReducidoComponent', () => {
  let component: IvaSuperReducidoComponent;
  let fixture: ComponentFixture<IvaSuperReducidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IvaSuperReducidoComponent]
    });
    fixture = TestBed.createComponent(IvaSuperReducidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
