import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MACDComponent } from './macd.component';

describe('MacdComponent', () => {
  let component: MACDComponent;
  let fixture: ComponentFixture<MACDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MACDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MACDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
