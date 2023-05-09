import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffiliateComponent } from './edit-affiliate.component';

describe('EditAffiliateComponent', () => {
  let component: EditAffiliateComponent;
  let fixture: ComponentFixture<EditAffiliateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAffiliateComponent]
    });
    fixture = TestBed.createComponent(EditAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
