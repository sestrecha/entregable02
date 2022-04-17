import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRegComponent } from './pop-up-reg.component';

describe('PopUpRegComponent', () => {
  let component: PopUpRegComponent;
  let fixture: ComponentFixture<PopUpRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
