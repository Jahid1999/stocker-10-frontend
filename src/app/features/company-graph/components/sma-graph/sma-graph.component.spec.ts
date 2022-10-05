import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmaGraphComponent } from './sma-graph.component';

describe('SmaGraphComponent', () => {
  let component: SmaGraphComponent;
  let fixture: ComponentFixture<SmaGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmaGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
