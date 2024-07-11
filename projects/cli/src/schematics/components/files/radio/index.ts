import { NgModule } from '@angular/core';

import { ZenRadioComponent } from './radio.component';

@NgModule({
  imports: [ZenRadioComponent],
  exports: [ZenRadioComponent],
})
export class ZenRadioModule {}
export * from './radio.component';
