import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GainerLooserComponent } from './gainer-looser.component';

describe('GainerLooserComponent', () => {
  let component: GainerLooserComponent;
  let fixture: ComponentFixture<GainerLooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GainerLooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GainerLooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
