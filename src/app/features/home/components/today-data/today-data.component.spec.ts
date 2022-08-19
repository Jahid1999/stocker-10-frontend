import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDataComponent } from './today-data.component';

describe('BarChartComponent', () => {
  let component: TodayDataComponent;
  let fixture: ComponentFixture<TodayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
