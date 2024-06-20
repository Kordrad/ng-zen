import { NgModule } from '@angular/core';

import { ZenSwitchComponent } from './zen-switch.component';

export * from './zen-switch.component';

@NgModule({
  imports: [ZenSwitchComponent],
  exports: [ZenSwitchComponent],
})
export class ZenSwitchModule {}
export * from './zen-switch.component';
