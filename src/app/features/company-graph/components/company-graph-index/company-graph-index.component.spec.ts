import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGraphIndexComponent } from './company-graph-index.component';

describe('CompanyGraphIndexComponent', () => {
  let component: CompanyGraphIndexComponent;
  let fixture: ComponentFixture<CompanyGraphIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyGraphIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyGraphIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
