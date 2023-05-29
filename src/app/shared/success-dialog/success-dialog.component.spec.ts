import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDialogComponent } from './success-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('SuccessDialogComponent', () => {
  let component: SuccessDialogComponent;
  let fixture: ComponentFixture<SuccessDialogComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessDialogComponent ],
      providers:[ MatDialog, {
        provide: MatDialogRef,
        useValue: mockDialogRef
      },
      { provide: MAT_DIALOG_DATA, useValue: {} }],

      imports:[MatDialogModule ]
    }).compileComponents();

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SuccessDialogComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
