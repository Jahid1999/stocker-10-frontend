import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsiGraphComponent } from './rsi-graph.component';

describe('RsiGraphComponent', () => {
  let component: RsiGraphComponent;
  let fixture: ComponentFixture<RsiGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsiGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
