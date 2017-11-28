import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {GoodDetailPage} from "./good-detail-page";

@NgModule({
  declarations: [
    GoodDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    GoodDetailPage
  ]
})
export class GoodListsPageModule { }
