import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAffiliateComponent } from './delete-affiliate.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AffiliatesService } from 'src/app/services/affiliates.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('DeleteAffiliateComponent', () => {
  let component: DeleteAffiliateComponent;
  let fixture: ComponentFixture<DeleteAffiliateComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAffiliateComponent],
      providers:[FormBuilder, MatDialog, AffiliatesService, Router],
      imports: [
        MaterialModule,
        HttpClientTestingModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(DeleteAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
