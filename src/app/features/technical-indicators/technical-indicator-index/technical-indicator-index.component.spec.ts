import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalIndicatorIndexComponent } from './technical-indicator-index.component';

describe('TechnicalIndicatorIndexComponent', () => {
  let component: TechnicalIndicatorIndexComponent;
  let fixture: ComponentFixture<TechnicalIndicatorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalIndicatorIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalIndicatorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
