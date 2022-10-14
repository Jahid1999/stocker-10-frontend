import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdeictionGraphComponent } from './prdeiction-graph.component';

describe('PrdeictionGraphComponent', () => {
  let component: PrdeictionGraphComponent;
  let fixture: ComponentFixture<PrdeictionGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdeictionGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdeictionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
