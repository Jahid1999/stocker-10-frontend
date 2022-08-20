import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysDataComponent } from './todays-data.component';

describe('TodaysDataComponent', () => {
  let component: TodaysDataComponent;
  let fixture: ComponentFixture<TodaysDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
