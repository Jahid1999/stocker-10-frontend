import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherIndicatorsComponent } from './other-indicators.component';

describe('OtherIndicatorsComponent', () => {
  let component: OtherIndicatorsComponent;
  let fixture: ComponentFixture<OtherIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
