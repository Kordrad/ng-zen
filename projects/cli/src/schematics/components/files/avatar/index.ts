import { NgModule } from '@angular/core';

import { ZenAvatarComponent } from './avatar.component';

@NgModule({
  imports: [ZenAvatarComponent],
  exports: [ZenAvatarComponent],
})
export class ZenButtonModule {}
export * from './avatar.component';
