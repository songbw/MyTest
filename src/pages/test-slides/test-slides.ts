import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the TestSlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-slides',
  templateUrl: 'test-slides.html',
})
export class TestSlidesPage {

  @ViewChild(Slides) slides: Slides;

  index:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestSlidesPage');
  }

//添加active
  goToSlide(index) {

    this.slides.slideTo(index, 500);

    this.addActive(index);

  }

// 滑动切换
  slideChanged() {

    let currentIndex = this.slides.getActiveIndex();

    console.log('Current index is', currentIndex);

    this.addActive(currentIndex);

  }

// 改变tab 颜色
  addActive(index){

    this.index = index;

    console.log(index)

  }

}
