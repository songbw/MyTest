import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestSlidesPage } from './test-slides';

@NgModule({
  declarations: [
    TestSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(TestSlidesPage),
  ],
  exports: [
    TestSlidesPage
  ]
})
export class TestSlidesPageModule {}
