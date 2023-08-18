import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWheelComponent } from './carousel-wheel.component';

describe('CarouselWheelComponent', () => {
  let component: CarouselWheelComponent;
  let fixture: ComponentFixture<CarouselWheelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselWheelComponent]
    });
    fixture = TestBed.createComponent(CarouselWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
