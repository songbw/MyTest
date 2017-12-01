import {Component, ViewChild, ViewChildren} from '@angular/core';
import {Content, IonicPage,  ModalController, NavController} from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  @ViewChild(Content) content: Content;
  @ViewChildren('secondGroup') secondGroup;

  currentItems: Item[];
  public categoryData= [];
  public categoryDetailData = [];
  public select=0;
  index:number = 0;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    // this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.categoryData = this.getCategoryData();
    this.getCategoryDetailData(102);
  }

  categoryLeftClick=function(index: number){
    console.log("index"+index);
    console.log(this.categoryData[this.select]);
    this.categoryData[this.select].isSelect=false;
    let data= this.categoryData[index];
    data.isSelect=true;
    this.select=index;
    var se = this.secondGroup;
    this.content.scrollTo(0, this.secondGroup._results[index].nativeElement.offsetTop, 300);
  };

  private getCategoryDetailData(typeNumber: number) {
    this.categoryDetailData =  [
      {"firstName":"上门维修",
      "second":[{
        "id": 65,
        "name": "水电暖维修",
        "code": "20916085",
        "firstProductCode": "E8F2F859",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/30af0a53541176c14e7a8deadd22d963.png",
        "description": "水、电、暖上门维修、改造",
        "createTime": "2017-06-01 10:36:01",
        "createAuthor": "",
        "updateAuthor": "",
        "updateTime": "2017-06-01 10:36:01",
        "isDel": 0
      }]},
      {"firstName":"特价专栏",
        "second":[{
          "id": 64,
          "name": "汽车服务",
          "code": "12EC9E64",
          "firstProductCode": "3B4502B0",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/42a04fb5aa1326c153a5d8d08489b057.png",
          "description": "汽车服务特价",
          "createTime": "2017-05-20 09:03:38",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-20 09:03:38",
          "isDel": 0
        },{
          "id": 63,
          "name": "上门美院",
          "code": "CA225713",
          "firstProductCode": "3B4502B0",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/42873b716a3126b90d51a0cd0ae8748d.png",
          "description": "上门美院特价。",
          "createTime": "2017-05-20 09:01:29",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-20 09:01:29",
          "isDel": 0
        },{
          "id": 57,
          "name": "保洁类",
          "code": "8DBC537B",
          "firstProductCode": "3B4502B0",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/ba3081e823a9df008b3b4768430668e6.png",
          "description": "清洁类限时特价",
          "createTime": "2017-04-23 17:25:46",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-04-24 17:55:21",
          "isDel": 0
        }]},
      {"firstName":"汽车服务",
        "second":[{
          "id": 62,
          "name": "道路救援",
          "code": "2C001704",
          "firstProductCode": "12EC9E64",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/9a1360846686361f99771f563be4376a.png",
          "description": "点火启动、拖车、轮胎救援。",
          "createTime": "2017-05-18 10:27:56",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-19 11:20:19",
          "isDel": 0
        },{
          "id": 61,
          "name": "汽车保养",
          "code": "8A44840D",
          "firstProductCode": "12EC9E64",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/c2913d6c696a4a88ab25c83d375db62b.png",
          "description": "汽车机油、机滤保养",
          "createTime": "2017-05-15 16:34:23",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-15 16:34:23",
          "isDel": 0
        }]},

      {"firstName":"上门保洁",
        "second":[{
          "id": 53,
          "name": "空气净化治理",
          "code": "C9AE7350",
          "firstProductCode": "EFD702C3",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/064c3bad5fd839798bb7a7f1fdd416b8.png",
          "description": "空气检测 空气治理。",
          "createTime": "2017-04-12 17:11:52",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-08 16:38:04",
          "isDel": 0
        },{
          "id": 56,
          "name": "房屋日常保洁",
          "code": "7D10E2BE",
          "firstProductCode": "EFD702C3",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/a4c041d57fa7cfc0d4a1eb225fa8ac36.png",
          "description": "家庭日常保洁",
          "createTime": "2017-04-23 17:10:32",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-04-24 17:55:34",
          "isDel": 0
        },

          {
            "id": 52,
            "name": "新居开荒",
            "code": "F5237FAF",
            "firstProductCode": "EFD702C3",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/3b039a3d98f6a82cca6e6ee3d283a61e.png",
            "description": "新居除尘 甲醛检测 玻璃清洗等新居开荒套餐。",
            "createTime": "2017-04-12 17:11:13",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-24 17:48:33",
            "isDel": 0
          },
          {
            "id": 51,
            "name": "家电保洁",
            "code": "E344CE61",
            "firstProductCode": "EFD702C3",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/d568ac2eeceb4843ce6a864282193566.png",
            "description": "洗衣机 空调 微波炉等清洗保养。",
            "createTime": "2017-04-12 17:09:53",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-24 17:47:58",
            "isDel": 0
          },
          {
            "id": 55,
            "name": "汽车清洗保养",
            "code": "285461BE",
            "firstProductCode": "EFD702C3",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/3ceb16b20e1535a918b50d4a0d476319.jpg",
            "description": "汽车深度保洁及汽车发动机清洗等。",
            "createTime": "2017-04-12 17:14:01",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-12 17:14:01",
            "isDel": 0
          },
          {
            "id": 54,
            "name": "杀菌除螨消毒",
            "code": "EA65F7FE",
            "firstProductCode": "EFD702C3",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/16842c289517f3a1db7208ca7b75f017.jpg",
            "description": "厨房 卫生间杀菌消毒及地毯除菌消毒等。",
            "createTime": "2017-04-12 17:13:20",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-12 17:13:20",
            "isDel": 0
          },
          {
            "id": 50,
            "name": "家庭深度保洁",
            "code": "2B0EE40D",
            "firstProductCode": "EFD702C3",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/cff8f356a2e4deca61fb1e6f51d2c92e.jpg",
            "description": "家具地板地暖等清洁保养。",
            "createTime": "2017-04-12 17:08:31",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-12 17:08:31",
            "isDel": 0
          },
          {
            "id": 49,
            "name": "家庭日常保洁",
            "code": "D552C357",
            "firstProductCode": "EFD702C3",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/e5fd0292a23c78b33957cea5c8eaa807.jpg",
            "description": "厨房卫生间等日常保洁。",
            "createTime": "2017-04-12 17:07:19",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-12 17:07:19",
            "isDel": 0
          },
          {
            "id": 48,
            "name": "家庭清洁套餐",
            "code": "16DA7795",
            "firstProductCode": "EFD702C3",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/3eb286079f985f34950dbfed162b458a.jpg",
            "description": "家庭清洁+家电清洗",
            "createTime": "2017-04-12 17:04:51",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-12 17:04:51",
            "isDel": 0
          }]},
      {"firstName":"母婴护理",
        "second":[{
          "id": 58,
          "name": "产妇护理",
          "code": "9421F06D",
          "firstProductCode": "B752B12A",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/e596b9ec48557194db70ac3f9a73f579.png",
          "description": "产后催乳，断奶",
          "createTime": "2017-05-05 11:48:05",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-08 16:37:33",
          "isDel": 0
        }]},

      {"firstName":"上门美院",
        "second":[{
          "id": 59,
          "name": "女性护理",
          "code": "F7322EE0",
          "firstProductCode": "CA225713",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/36a76bcf15a725f39ab7258cab900887.png",
          "description": "面部护理",
          "createTime": "2017-05-05 11:49:22",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-08 16:37:22",
          "isDel": 0
        }]},

      {"firstName":"健康理疗",
        "second":[{
          "id": 60,
          "name": "保健按摩",
          "code": "EA4EB4D7",
          "firstProductCode": "4C2F61B3",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/b54f9abb27de8895ff3b0f7b71542c04.png",
          "description": "肩颈护理",
          "createTime": "2017-05-05 11:51:26",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-05-08 16:37:10",
          "isDel": 0
        }]},
      {"firstName":"配送服务",
        "second":[{
          "id": 47,
          "name": "鲜花配送",
          "code": "D463D2BE",
          "firstProductCode": "955CECAF",
          "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/19bcc711bfb86dad846df390f003c5d1.jpg",
          "description": "鲜花配送服务",
          "createTime": "2017-04-11 11:20:48",
          "createAuthor": "",
          "updateAuthor": "",
          "updateTime": "2017-04-11 11:20:48",
          "isDel": 0
        },
          {
            "id": 46,
            "name": "零食配送",
            "code": "DB3AC1AC",
            "firstProductCode": "955CECAF",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/9d20f302d8342922c1f3886010845dce.jpg",
            "description": "零食配送",
            "createTime": "2017-04-11 10:24:13",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-11 10:24:13",
            "isDel": 0
          },
          {
            "id": 45,
            "name": "酒水饮料配送",
            "code": "91029B8C",
            "firstProductCode": "955CECAF",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/08f008c0bbf00a170643223eb5b7d3f5.jpg",
            "description": "红酒、白酒、饮料配送",
            "createTime": "2017-04-11 10:23:51",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-11 10:23:51",
            "isDel": 0
          },
          {
            "id": 44,
            "name": "生鲜水产配送",
            "code": "A17FC9C7",
            "firstProductCode": "955CECAF",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/3f7c25230903129c59ab234b57c3e05f.jpg",
            "description": "鸡蛋、肉类、海鲜水产配送",
            "createTime": "2017-04-11 10:23:21",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-11 10:23:21",
            "isDel": 0
          },
          {
            "id": 43,
            "name": "生活服务",
            "code": "AB077093",
            "firstProductCode": "955CECAF",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/5fdb29387f37cdbb32a01912febf0ce8.jpg",
            "description": "液化汽、纯净水配送",
            "createTime": "2017-04-11 09:58:04",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-11 09:58:04",
            "isDel": 0
          },
          {
            "id": 42,
            "name": "粮油配送",
            "code": "85F74442",
            "firstProductCode": "955CECAF",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/f1eb4365c94d7ee42911cae41ba03ff9.jpg",
            "description": "米、面、油配送服务",
            "createTime": "2017-04-11 09:56:16",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-11 09:56:16",
            "isDel": 0
          },
          {
            "id": 41,
            "name": "蔬果配送",
            "code": "0118E783",
            "firstProductCode": "955CECAF",
            "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/8dac4de925e02bf001d1136e256b44ed.jpg",
            "description": "新鲜果蔬配送服务",
            "createTime": "2017-04-11 09:55:27",
            "createAuthor": "",
            "updateAuthor": "",
            "updateTime": "2017-04-11 09:55:27",
            "isDel": 0
          }]}
      ];
  }

  private getCategoryData() {
    return  [
      {
        "id": 14,
        "name": "配送服务",
        "code": "955CECAF",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/e6a525979489056f9a06e65c2f18d00a.png",
        "description": "新鲜蔬果，米面粮油配送",
        "createTime": "2017-04-11 09:51:42",
        "createAuthor": "sbw",
        "updateAuthor": "",
        "updateTime": "2017-04-11 09:51:42",
        "isDel": 0,isSelect:true
      },
      {
        "id": 15,
        "name": "上门保洁",
        "code": "EFD702C3",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/1a2f5483655b4427abc8af71b86f026b.png",
        "description": "家庭清洁，家电保洁，新居开荒，空气净化治理，杀菌消毒，汽车清洗等上门清洁服务。",
        "createTime": "2017-04-12 17:02:39",
        "createAuthor": "sbw",
        "updateAuthor": "sbw",
        "updateTime": "2017-04-24 17:43:56",
        "isDel": 0,isSelect:false
      },
      {
        "id": 16,
        "name": "特价专栏",
        "code": "3B4502B0",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/ad982b4d23b3f23b181038fa862e8916.jpg",
        "description": "限时特价专栏",
        "createTime": "2017-04-23 17:23:33",
        "createAuthor": "sbw",
        "updateAuthor": "sbw",
        "updateTime": "2017-04-24 17:46:51",
        "isDel": 0,isSelect:false
      },
      {
        "id": 17,
        "name": "母婴护理",
        "code": "B752B12A",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/98a1883095415da6b7c215bf0d257b59.png",
        "description": "产妇护理，产后催乳、",
        "createTime": "2017-05-05 11:42:31",
        "createAuthor": "sbw",
        "updateAuthor": "sbw",
        "updateTime": "2017-05-08 11:05:14",
        "isDel": 0,isSelect:false
      },
      {
        "id": 18,
        "name": "上门美院",
        "code": "CA225713",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/6ae6873c94462d366038571b4eaddff8.png",
        "description": "美妆，美容，美甲",
        "createTime": "2017-05-05 11:43:55",
        "createAuthor": "sbw",
        "updateAuthor": "sbw",
        "updateTime": "2017-05-08 11:05:30",
        "isDel": 0,isSelect:false
      },
      {
        "id": 19,
        "name": "健康理疗",
        "code": "4C2F61B3",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/ca81e5ba1cc3aad1937ca3eb44774d24.png",
        "description": "保健按摩，",
        "createTime": "2017-05-05 11:46:48",
        "createAuthor": "sbw",
        "updateAuthor": "sbw",
        "updateTime": "2017-05-08 11:05:47",
        "isDel": 0,isSelect:false
      },
      {
        "id": 20,
        "name": "汽车服务",
        "code": "12EC9E64",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/a11b7302948c92ad29e166756b82182c.png",
        "description": "汽车服务",
        "createTime": "2017-05-15 16:31:50",
        "createAuthor": "sbw",
        "updateAuthor": "",
        "updateTime": "2017-05-15 16:31:50",
        "isDel": 0,isSelect:false
      },
      {
        "id": 21,
        "name": "上门维修",
        "code": "E8F2F859",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/ee5176550f1831fec5dec3bd7a07f985.png",
        "description": "水电暖，家电等维修服务",
        "createTime": "2017-06-01 10:31:58",
        "createAuthor": "sbw",
        "updateAuthor": "",
        "updateTime": "2017-06-01 10:31:58",
        "isDel": 0,isSelect:false
      },
      {
        "id": 22,
        "name": "上门配送",
        "code": "4985CAD1",
        "pic": "http://xiquedaojia.b0.upaiyun.com/xiquedaojia_web_server/f9a5c5ee82f81e4e33e52227047cbf62.png",
        "description": "生活配送服务，米、面、粮、油、食品配送",
        "createTime": "2017-06-27 09:47:15",
        "createAuthor": "sbw",
        "updateAuthor": "sbw",
        "updateTime": "2017-06-27 09:52:28",
        "isDel": 0,isSelect:false
      }
    ];

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

// 改变tab 颜色
  addActive(index){

    this.index = index;

    console.log(index)

  }
}
