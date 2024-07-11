import { NgModule } from '@angular/core';

import { ZenDisabledDirective } from './disabled.directive';

@NgModule({
  imports: [ZenDisabledDirective],
  exports: [ZenDisabledDirective],
})
export class ZenDisabledModule {}
export * from './disabled.directive';

export const ZenHostDirective = {
  directive: ZenDisabledDirective,
  inputs: ['zenDisabled: disabled'],
};
