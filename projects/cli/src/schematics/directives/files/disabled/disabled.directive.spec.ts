import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenDisabledDirective } from './disabled.directive';
import { ZenDisabledHostDirective } from './index';

@Component({
  template: ``,
  hostDirectives: [ZenDisabledHostDirective],
  standalone: true,
})
class ZenDisabledComponent {}

describe('ZenDisabledDirective', () => {
  let component: ZenDisabledComponent;
  let directive: ZenDisabledDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenDisabledComponent],
    }).compileComponents();

    const fixture: ComponentFixture<ZenDisabledComponent> =
      TestBed.createComponent(ZenDisabledComponent);
    component = fixture.componentInstance;
    directive = fixture.debugElement.injector.get(ZenDisabledDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(directive).toBeTruthy();
  });
});
