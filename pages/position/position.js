// position.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    latitude: 0,
    longitude: 0,
    name: ""
  },
  onLoad: function () {
    qqmapsdk = new QQMapWX({
      key: 'JUJBZ-3AKK6-XV6SU-EQE7C-RAHOV-FTBO5'
    })

    this.moveToLocation();
  },
  //移动选点
  moveToLocation: function () {
    var that = this;
    // 打开地图选择位置
    wx.chooseLocation({
      success: function (res) {
        // res.name为地址名称  
        console.log(res.name);
        //选择地点之后返回到原来页面
        wx.navigateTo({
          url: "/pages/index/index?address=" + res.name
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  }
});
