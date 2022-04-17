import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpIniComponent } from './pop-up-ini.component';

describe('PopUpIniComponent', () => {
  let component: PopUpIniComponent;
  let fixture: ComponentFixture<PopUpIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpIniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
