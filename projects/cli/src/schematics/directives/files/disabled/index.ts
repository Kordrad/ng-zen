import { NgModule } from '@angular/core';

import { ZenDisabledDirective } from './disabled.directive';

@NgModule({
  imports: [ZenDisabledDirective],
  exports: [ZenDisabledDirective],
})
export class ZenDisabledModule {}
export * from './disabled.directive';

export const ZenDisabledHostDirective = {
  directive: ZenDisabledDirective,
  inputs: ['zenDisabled: disabled'],
};
