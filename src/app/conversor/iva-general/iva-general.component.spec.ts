import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvaGeneralComponent } from './iva-general.component';

describe('IvaGeneralComponent', () => {
  let component: IvaGeneralComponent;
  let fixture: ComponentFixture<IvaGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IvaGeneralComponent]
    });
    fixture = TestBed.createComponent(IvaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
