import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Affiliate } from 'src/app/models/affiliate';
import { AffiliatesService } from 'src/app/services/affiliates.service';

import { AffiliateListComponent } from './affiliate-list.component';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material/material.module';

describe('AffiliateListComponent', () => {
  let component: AffiliateListComponent;
  let fixture: ComponentFixture<AffiliateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule],
      declarations: [AffiliateListComponent],
      providers:[AffiliatesService]
    }).compileComponents();

  });

  it('Exista array affiliates', () => {

    const fixture = TestBed.createComponent(AffiliateListComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.affiliates).toEqual([]);
  });



});
