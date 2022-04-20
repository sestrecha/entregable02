import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariorescateComponent } from './formulariorescate.component';

describe('FormulariorescateComponent', () => {
  let component: FormulariorescateComponent;
  let fixture: ComponentFixture<FormulariorescateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariorescateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariorescateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
