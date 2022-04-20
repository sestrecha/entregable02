import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescatemarchaComponent } from './rescatemarcha.component';

describe('RescatemarchaComponent', () => {
  let component: RescatemarchaComponent;
  let fixture: ComponentFixture<RescatemarchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescatemarchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescatemarchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
