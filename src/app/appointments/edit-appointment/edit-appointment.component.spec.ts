import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppointmentComponent } from './edit-appointment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { Router } from '@angular/router';

describe('EditAppointmentComponent', () => {
  let component: EditAppointmentComponent;
  let fixture: ComponentFixture<EditAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAppointmentComponent],
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
    });
    fixture = TestBed.createComponent(EditAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
