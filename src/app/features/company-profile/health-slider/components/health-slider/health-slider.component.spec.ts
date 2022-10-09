import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSliderComponent } from './health-slider.component';

describe('HealthSliderComponent', () => {
  let component: HealthSliderComponent;
  let fixture: ComponentFixture<HealthSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
