import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {GoodListsPage} from "./good-lists-page";

@NgModule({
  declarations: [
    GoodListsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodListsPage),
    TranslateModule.forChild()
  ],
  exports: [
    GoodListsPage
  ]
})
export class GoodListsPageModule { }
