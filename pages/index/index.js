//index.js
//获取应用实例

var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    address:"获取位置",
    src:""
  },
  onLoad: function () {
    var that = this;
    setTimeout(function(){
      that.listenerBtnGetLocation();
    },1000)
  },
  listenerBtnGetLocation:function(){
    var that = this;
    qqmapsdk = new QQMapWX({
      key: 'JUJBZ-3AKK6-XV6SU-EQE7C-RAHOV-FTBO5'
    });
    qqmapsdk.reverseGeocoder({
      success: function (res) {
        var title = res.result.address_reference.landmark_l2.title;
        that.setData({
          address: title
        });
      },
      fail: function (res) {
        console.log(res);
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
        that.setData({
          address: res.name
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  }


})


