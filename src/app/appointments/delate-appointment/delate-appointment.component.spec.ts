import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateAppointmentComponent } from './delate-appointment.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('DelateAppointmentComponent', () => {
  let component: DelateAppointmentComponent;
  let fixture: ComponentFixture<DelateAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelateAppointmentComponent],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(DelateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
