import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateAppointmentComponent } from './delate-appointment.component';

describe('DelateAppointmentComponent', () => {
  let component: DelateAppointmentComponent;
  let fixture: ComponentFixture<DelateAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelateAppointmentComponent]
    });
    fixture = TestBed.createComponent(DelateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
