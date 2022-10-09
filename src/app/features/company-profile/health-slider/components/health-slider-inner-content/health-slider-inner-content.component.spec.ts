import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSliderInnerContentComponent } from './health-slider-inner-content.component';

describe('HealthSliderInnerContentComponent', () => {
  let component: HealthSliderInnerContentComponent;
  let fixture: ComponentFixture<HealthSliderInnerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthSliderInnerContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthSliderInnerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
