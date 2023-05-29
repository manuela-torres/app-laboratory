import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsListComponent } from './appointments-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppointmentsService } from 'src/app/services/appointments.service';

describe('AppointmentsListComponent', () => {
  let component: AppointmentsListComponent;
  let fixture: ComponentFixture<AppointmentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsListComponent],
      imports: [
        MaterialModule,
        HttpClientTestingModule],
      providers:[AppointmentsService]
    });
    fixture = TestBed.createComponent(AppointmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
