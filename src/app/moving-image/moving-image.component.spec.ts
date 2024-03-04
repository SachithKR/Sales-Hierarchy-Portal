import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingImageComponent } from './moving-image.component';

describe('MovingImageComponent', () => {
  let component: MovingImageComponent;
  let fixture: ComponentFixture<MovingImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovingImageComponent]
    });
    fixture = TestBed.createComponent(MovingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
