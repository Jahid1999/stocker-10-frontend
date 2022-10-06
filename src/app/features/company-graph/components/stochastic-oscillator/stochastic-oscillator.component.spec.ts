import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StochasticOscillatorComponent } from './stochastic-oscillator.component';

describe('StochasticOscillatorComponent', () => {
  let component: StochasticOscillatorComponent;
  let fixture: ComponentFixture<StochasticOscillatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StochasticOscillatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StochasticOscillatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
