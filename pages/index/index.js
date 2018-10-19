//index.js
//获取应用实例

var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    address:"定位中..."
  },
  onLoad: function () {
    var that = this;
    setTimeout(function(){
      that.listenerBtnGetLocation();
    },1000);
  },
  listenerBtnGetLocation:function(){
    var that = this;
    qqmapsdk = new QQMapWX({
      key: '自己申请的KEY'
    });
    qqmapsdk.reverseGeocoder({
      success: function (res) {
        var title = res.result.address_reference.landmark_l2.title;
        that.setData({
          address: res.result.address
        });
      },
      fail: function (res) {
        that.setData({
          address: '定位失败'
        });
      }

    })
  },
  moveToLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        if (res.name !="" ){
          that.setData({
            address: res.name
          });
        }
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: 'xx小程序',
      path: 'pages/index/index',
      imageUrl:'https://img3.doubanio.com/view/note/sqs/public/p54638813.jpg',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  }

})


