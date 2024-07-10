import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenRadioComponent } from './radio.component';

describe('ZenRadioComponent', () => {
  let component: ZenRadioComponent;
  let fixture: ComponentFixture<ZenRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenRadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZenRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
