import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTestComponent } from './delete-test.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('DeleteTestComponent', () => {
  let component: DeleteTestComponent;
  let fixture: ComponentFixture<DeleteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTestComponent],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(DeleteTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
