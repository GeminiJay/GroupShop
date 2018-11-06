var itemList = require('../../common/itemList/itemList.js');

//index.js
var app = getApp();
Page({
  data: {
    headerBgOpacity: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    classifyList: [
      {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=1211478&size=128',
        name: '饮料/水'
      }, {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=564014&size=128',
        name: '方便速食'
      }, {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=1181469&size=128',
        name: '饼干糕点'
      }, {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=1211471&size=128',
        name: '酒类'
      }, {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=1208610&size=128',
        name: '糖果休食'
      }, {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=1213132&size=128',
        name: '调料干货'
      }, {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=1181478&size=128',
        name: '坚果炒货'
      }, {
        url: 'https://www.easyicon.net/api/resizeApi.php?id=1193688&size=128',
        name: '纸制品'
      }
    ],

    bannerList: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    footer: [
      {
        url: 'http://m.yougong.elianshang.com/static/home/widget/common/css-base/src/icon-img/tab_home_selected_9775ebd.png',
        name: '首页'
      }, {
        url: 'http://m.yougong.elianshang.com/static/home/widget/common/css-base/src/icon-img/tab_category_normal_9771b7d.png',
        name: '分类'
      }, {
        url: 'http://m.yougong.elianshang.com/static/home/widget/common/css-base/src/icon-img/tab_shoppingcart_normal_eca40de.png',
        name: '购物车'
      }, {
        url: 'http://m.yougong.elianshang.com/static/home/widget/common/css-base/src/icon-img/tab_my_normal_dccd497.png',
        name: '我的'
      }
    ],    
    showCheckBox: false, // 显示选择框
    // 商品列表
    itemList: [
      {
        sku_id: 10001,
        name: "可口可乐碳酸饮料330ml/听*24",
        boamTags: [
          {name: '畅销商品', color: '#19BEAE'}
        ],
        tags: [
          {name: '满减', color: '#19BEAE'},
          {name: '特价', color: '#A1D569'}
        ],
        errorCode: -10000, 
        errorInfo: '赠品不足', 
        checked: true
      }, {
        name: "可口可乐碳酸饮料330ml/听*24可口可乐碳酸饮料330ml/听*24可口可乐碳酸饮料330ml/听*24", 
        errorCode: -10000, 
        errorInfo: '赠品不足', 
        checked: true 
      },
      {sku_id: 10002, name: "xxx", errorCode: 0,      errorInfo: '赠品不足', checked: false },
      {sku_id: 10003, name: "xxx", errorCode: -10000, errorInfo: '赠品不足', checked: true },
      {sku_id: 10004, name: "xxx", errorCode: 0,      errorInfo: '赠品不足', checked: false },
      {sku_id: 10005, name: "xxx", errorCode: -10000, errorInfo: '赠品不足', checked: true },
      {sku_id: 10006, name: "xxx", errorCode: -10000, errorInfo: '赠品不足', checked: true, disabled: true }
    ]
  },
  //跳转到饮品分类
   jumpToDrinkclassify: function (e) {
     wx.switchTab({
      url: '../classify/classify'
    })
  },
  // header跳转到搜索页面
  jumpToSearch: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  // 滚动时颜色改变
  scrollChangeBgColor: function ( e ) {
    console.log( e );
  },
  scrollBottom: function ( e ) {
    console.log( e );
  },
  jumpToDetail: function (e) {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  // 增加操作
  actionAdd: function ( e ) {
    itemList.add( e );
  }
})
