import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObvGraphComponent } from './obv-graph.component';

describe('ObvGraphComponent', () => {
  let component: ObvGraphComponent;
  let fixture: ComponentFixture<ObvGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObvGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObvGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
