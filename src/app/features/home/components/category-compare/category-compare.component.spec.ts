import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCompareComponent } from './category-compare.component';

describe('CompareComponent', () => {
  let component: CategoryCompareComponent;
  let fixture: ComponentFixture<CategoryCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
