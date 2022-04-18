import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoComponent } from './seguimiento.component';

describe('PortadaComponent', () => {
  let component: SeguimientoComponent;
  let fixture: ComponentFixture<SeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
