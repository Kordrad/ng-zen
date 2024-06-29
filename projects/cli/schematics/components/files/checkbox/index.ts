import { NgModule } from '@angular/core';

import { ZenCheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [ZenCheckboxComponent],
  exports: [ZenCheckboxComponent],
})
export class ZenCheckboxModule {}
export * from './checkbox.component';
