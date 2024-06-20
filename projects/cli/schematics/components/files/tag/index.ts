import { NgModule } from '@angular/core';

import { ZenTagComponent } from './tag.component';

@NgModule({
  imports: [ZenTagComponent],
  exports: [ZenTagComponent],
})
export class ZenTagModule {}
export * from './tag.component';
