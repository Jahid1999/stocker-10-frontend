import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeStatBarchartComponent } from './trade-stat-barchart.component';

describe('TradeStatBarchartComponent', () => {
  let component: TradeStatBarchartComponent;
  let fixture: ComponentFixture<TradeStatBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeStatBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeStatBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
