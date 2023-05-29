import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffiliateComponent } from './edit-affiliate.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditAffiliateComponent', () => {
  let component: EditAffiliateComponent;
  let fixture: ComponentFixture<EditAffiliateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAffiliateComponent],
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
    });
    fixture = TestBed.createComponent(EditAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
