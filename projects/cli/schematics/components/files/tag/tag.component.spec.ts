import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenTagComponent } from './tag.component';

describe('ZenTagComponent', () => {
  let component: ZenTagComponent;
  let fixture: ComponentFixture<ZenTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenTagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZenTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
