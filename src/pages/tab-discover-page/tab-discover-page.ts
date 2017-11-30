import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
/**
 * Generated class for the TabDiscoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tab-discover-page',
  templateUrl: 'tab-discover-page.html',
})
export class TabDiscoverPage {
  public categoryData = [];
  public categoryDetailData = [];
  public select=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.categoryData = this.getCategoryData();
    this.getCategoryDetailData(102);
  }

  private getCategoryDetailData(typeNumber: number) {
    if (typeNumber == 102) {
      this.categoryDetailData = [
        {
          name: "家电保洁",
          src: "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/f1eb4365c94d7ee42911cae41ba03ff9.jpg",
          typeNumber: '10001'
        },
        {
          name: "新居开荒",
          src: "assets/img/nz2.jpg",
          typeNumber: '10002'
        },
        {
          name: "房屋日常",
          src: "assets/img/nz3.jpg",
          typeNumber: '10003'
        },
        {
          name: "保洁类",
          src: "assets/img/nz4.jpg",
          typeNumber: '10004'
        },
        {
          name: "上门美院",
          src: "assets/img/nz5.jpg",
          typeNumber: '10005'
        },
        {
          name: "汽车服务",
          src: "assets/img/nz6.jpg",
          typeNumber: '10006'
        },
        {
          name: "保健按摩",
          src: "assets/img/nz7.jpg",
          typeNumber: '10007'
        },
        {
          name: "女性护理",
          src: "assets/img/nz8.jpg",
          typeNumber: '10008'
        },
        {
          name: "产妇护理",
          src: "assets/img/nz9.jpg",
          typeNumber: '10009'
        },
        {
          name: "汽车保养",
          src: "assets/img/nz10.jpg",
          typeNumber: '10010'
        },
        {
          name: "道路救援",
          src: "assets/img/nz11.jpg",
          typeNumber: '10011'
        },
        {
          name: "水电暖维修",
          src: "assets/img/nz12.jpg",
          typeNumber: '10012'
        },
        {
          name: "生活配送",
          src: "assets/img/nz12.jpg",
          typeNumber: '10012'
        }
      ];
    } else {
      this.categoryDetailData = [
        {
          name: "夹克",
          src: "assets/img/nanz1.jpg",
          typeNumber: '10013'
        },
        {
          name: "衬衫",
          src: "assets/img/nanz2.jpg",
          typeNumber: '10014'
        },
        {
          name: "牛仔裤",
          src: "assets/img/nanz3.jpg",
          typeNumber: '10015'
        },
        {
          name: "羽绒服",
          src: "assets/img/nanz4.jpg",
          typeNumber: '10016'
        },

        {
          name: "T恤",
          src: "assets/img/nanz5.jpg",
          typeNumber: '10017'
        },
        {
          name: "休闲裤",
          src: "assets/img/nanz6.jpg",
          typeNumber: '10018'
        },
        {
          name: "卫衣",
          src: "assets/img/nanz7.jpg",
          typeNumber: '10019'
        },
        {
          name: "针织衫",
          src: "assets/img/nanz8.jpg",
          typeNumber: '10020'
        },
        {
          name: "棉服",
          src: "assets/img/nanz9.jpg",
          typeNumber: '10021'
        }
      ];
    }
  }

  private getCategoryData() {
    return [
      {
        name: "上门保洁",
        typeNumber: '102',
        isSelect:true
      },
      {
        name: "特价专栏",
        typeNumber: '103',
        isSelect:false
      },
      {
        name: "监控治理",
        typeNumber: '101'
        ,isSelect:false
      },
      {
        name: "上门美院",
        typeNumber: '104'
        ,isSelect:false
      },
      {
        name: "母婴护理",
        typeNumber: '105'
        ,isSelect:false
      },
      {
        name: "汽车服务",
        typeNumber: '106'
        ,isSelect:false
      },
      {
        name: "上门维修",
        typeNumber: '107'
        ,isSelect:false
      },
      {
        name: "上门配送",
        typeNumber: '108'
        ,isSelect:false
      },
      {
        name: "图书",
        typeNumber: '109'
        ,isSelect:false
      },
      {
        name: "家居家纺",
        typeNumber: '110'
        ,isSelect:false
      },
      {
        name: "居家生活",
        typeNumber: '111'
        ,isSelect:false
      },
      {
        name: "家具建材",
        typeNumber: '112'
        ,isSelect:false
      },
      {
        name: "热门推荐",
        typeNumber: '101' ,isSelect:false
      },
      {
        name: "居家生活",
        typeNumber: '101', isSelect: false
      }
    ];

  }

  categoryLeftClick=function(index: number){
    console.log("index"+index);

     this.categoryData[this.select].isSelect=false;
    let data= this.categoryData[index];
    data.isSelect=true;
    this.select=index;
  };

  startPage(index: number) {
    this.navCtrl.push('GoodListsPage', {
      item: index
    });
  }
  goBack(){
    console.log('goBack');
  }
}
