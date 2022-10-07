import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComBbGraphComponent } from './com-bb-graph.component';

describe('ComBbGraphComponent', () => {
  let component: ComBbGraphComponent;
  let fixture: ComponentFixture<ComBbGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComBbGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComBbGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
