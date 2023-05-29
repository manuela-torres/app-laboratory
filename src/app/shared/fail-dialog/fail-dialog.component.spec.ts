/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FailDialogComponent } from './fail-dialog.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('FailDialogComponent', () => {
  let component: FailDialogComponent;
  let fixture: ComponentFixture<FailDialogComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };//no es necesario

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailDialogComponent ],
      providers:[ MatDialog, {
        provide: MatDialogRef,
        useValue: mockDialogRef
      },
      { provide: MAT_DIALOG_DATA, useValue: {} }],

      imports:[MatDialogModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
