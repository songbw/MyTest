import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab0Root } from '../pages'
import { Tab1Root} from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab0Root: any = Tab0Root;
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;

  tab0Title = " ";
  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB0_TITLE','TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE']).subscribe(values => {
      this.tab0Title = values['TAB0_TITLE'];
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      this.tab4Title = values['TAB4_TITLE'];
    });
  }
}
