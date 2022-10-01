import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbGraphComponent } from './bb-graph.component';

describe('BbGraphComponent', () => {
  let component: BbGraphComponent;
  let fixture: ComponentFixture<BbGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
