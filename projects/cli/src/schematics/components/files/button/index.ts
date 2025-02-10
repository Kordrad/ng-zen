import { NgModule } from '@angular/core';

import { ZenButtonComponent } from './button.component';

@NgModule({
  imports: [ZenButtonComponent],
  exports: [ZenButtonComponent],
})
export class ZenButtonModule {}
export * from './button.component';
