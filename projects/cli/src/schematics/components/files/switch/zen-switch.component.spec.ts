import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenSwitchComponent } from './zen-switch.component';

describe('SwitchComponent', () => {
  let component: ZenSwitchComponent;
  let fixture: ComponentFixture<ZenSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZenSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
