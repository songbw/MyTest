import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZhuyePage } from './zhuye';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ZhuyePage,
  ],
  imports: [
    IonicPageModule.forChild(ZhuyePage),
    TranslateModule.forChild()
  ],
  exports: [
    ZhuyePage
  ]
})
export class ZhuyePageModule {}
