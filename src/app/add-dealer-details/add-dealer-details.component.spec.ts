import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealerDetailsComponent } from './add-dealer-details.component';

describe('AddDealerDetailsComponent', () => {
  let component: AddDealerDetailsComponent;
  let fixture: ComponentFixture<AddDealerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDealerDetailsComponent]
    });
    fixture = TestBed.createComponent(AddDealerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
