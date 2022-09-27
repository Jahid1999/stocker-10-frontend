import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecIndicatorTableComponent } from './tec-indicator-table.component';

describe('TecIndicatorTableComponent', () => {
  let component: TecIndicatorTableComponent;
  let fixture: ComponentFixture<TecIndicatorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecIndicatorTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecIndicatorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
