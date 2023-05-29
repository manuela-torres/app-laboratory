import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestComponent } from './create-test.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { Router } from '@angular/router';

describe('CreateTestComponent', () => {
  let component: CreateTestComponent;
  let fixture: ComponentFixture<CreateTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTestComponent],
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
    });
    fixture = TestBed.createComponent(CreateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
