Page({
  // 数据
  data:{
    // 我的列表数据
    modalHidden: true,
    myList: [
      {
        iconPath: '../../static/images/my/user_icon.png',
        name: '账户',
        info: '18369956016',
        className: 'count',
        events: 'startRecord'
      }, {
        iconPath: '../../static/images/my/orders_icon.png',
        name: '全部订单',
        info: '使用微信、支付宝或拉卡拉刷卡支付立减2元',
        className: 'all-orders',
        events: 'stopRecord',
        orderList: [{
            name: '待发货',
            count: 19
          }, {
            name: '待收货',
            count: 0
          }, {
            name: '待评价',
            count: 2
          }, {
            name: '已完成',
            count: 0
          }
        ]
      }, {
        iconPath: '../../static/images/my/address_icon.png',
        name: '地址管理',
        info: '',
        className: 'address',
        events: 'getLocation'
      }, {
        iconPath: '../../static/images/my/discount_icon.png',
        name: '优惠券',
        info: '',
        className: 'coupon'
      }, {
        iconPath: '../../static/images/my/cash_coupon_icon.png',
        name: '现金券',
        info: '',
        className: 'cash-coupon'
      }, {
        iconPath: '../../static/images/my/collect_icon.png',
        name: '收藏',
        info: '',
        className: 'collection'
      }, {
        iconPath: '../../static/images/my/about_icon.png',
        name: '关于链商',
        info: '',
        className: 'about'
      }
    ]
  },

  // 退出事件
  logOut: function () {
    this.modalChange();
  },
  modalChange: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  startRecord: function () {
    wx.startRecord({
      success: function ( res ) {
        console.log( res );
        var tempFilePath = res.tempFilePath;
        console.log( tempFilePath );
      },
      fail: function ( err ) {
        consoel.log( err );
      }
    });
  },
  stopRecord: function () {
    wx.stopRecord();
  },

/*跳转到orderpage */
  jumpToOrder: function(e){
    var index = parseInt(e.currentTarget.dataset.index); 
    if (index==1)
    {
      wx.navigateTo({
        url: '../order/order'
      })
    }
    if (index == 2) {
      /*用户选择收货地址*/
      function getaddress(){
        var that = this;
        if (wx.chooseAddress) {
          wx.chooseAddress({
            success: function (res) {
              console.log(JSON.stringify(res));
              console.log(res);
              that.setData({
                "add_userName": res.userName,
                "add_telNumber": res.telNumber,
                "add_provinceName": res.provinceName,
                "add_cityName": res.cityName,
                "add_countyName": res.countyName,
                "add_detailInfo": res.detailInfo,
                "add_postalCode": res.postalCode,
                //具体收货地址显示
                flag: false,

              })
            },
            fail: function (res) {
              console.log(JSON.stringify(err));
              console.info("收货地址授权失败");
              wx.showToast({
                title: '授权失败，您将无法进行下单支付;重新授权请删除小程序后再次进入',
                icon: 'success',
                duration: 20000
              })
            },
            complete: function (res) {
              // complete
            }
          })
        } else {
          // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
        }
      }
    }
  },

  getLocation: function () {
    wx.getLocation({
      success: function ( res ) {
        console.log( res );
      },
      fail: function () {
        console.log( res );
      }
    })
  }
})