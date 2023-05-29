import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointmentComponent } from './create-appointment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { Router } from '@angular/router';

describe('CreateAppointmentComponent', () => {
  let component: CreateAppointmentComponent;
  let fixture: ComponentFixture<CreateAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAppointmentComponent],
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
    });
    fixture = TestBed.createComponent(CreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
