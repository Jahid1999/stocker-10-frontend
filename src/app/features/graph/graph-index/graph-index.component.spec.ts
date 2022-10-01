import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphIndexComponent } from './graph-index.component';

describe('GraphIndexComponent', () => {
  let component: GraphIndexComponent;
  let fixture: ComponentFixture<GraphIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
