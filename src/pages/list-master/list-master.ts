import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, Slides} from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  @ViewChild(Slides) slides: Slides;

  index:number = 0;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
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
