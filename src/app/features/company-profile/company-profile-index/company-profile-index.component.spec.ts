import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileIndexComponent } from './company-profile-index.component';

describe('CompanyProfileIndexComponent', () => {
  let component: CompanyProfileIndexComponent;
  let fixture: ComponentFixture<CompanyProfileIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfileIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
