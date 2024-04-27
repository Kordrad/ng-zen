import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenBadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: ZenBadgeComponent;
  let fixture: ComponentFixture<ZenBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZenBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
