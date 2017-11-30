import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the ZhuyePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhuye',
  templateUrl: 'zhuye.html',
})
export class ZhuyePage {

  @ViewChild(Slides) slides: Slides;

  city: any;
  defaultCity: any = {
    "name": "北京",
    "pinyin": "BEIJING",
    "index": "B"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhuyePage');

  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ZhuyePage');
    this.slides.startAutoplay();
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave ZhuyePage');
    this.slides.stopAutoplay();
  }

  goToSlide() {
    this.slides.startAutoplay();
  }

  openCity() {
    this.navCtrl.push('CitySelectPage');
  }

  openSearch(){
    this.navCtrl.push('SearchPage');
  }

  openTestSlides() {
    this.navCtrl.push('TestSlidesPage');
  }

}
