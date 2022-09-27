import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePatternComponent } from './share-pattern.component';

describe('SharePatternComponent', () => {
  let component: SharePatternComponent;
  let fixture: ComponentFixture<SharePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharePatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
