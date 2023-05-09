import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAffiliateComponent } from './delete-affiliate.component';

describe('DeleteAffiliateComponent', () => {
  let component: DeleteAffiliateComponent;
  let fixture: ComponentFixture<DeleteAffiliateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAffiliateComponent]
    });
    fixture = TestBed.createComponent(DeleteAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
