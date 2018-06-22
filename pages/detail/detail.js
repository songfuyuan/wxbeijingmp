// util是Object类型; 引入util.js文件
var util = require("../../utils/util.js");
// 详情: pages/detail/detail.js

Page({
  data:{
    detail:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.request({
      url: getApp().config.API_URL_detail + "?output=json&articleId="+options.id,
      data: {},
      // 设置请求的 header
      header:{
        "Content-Type":"json"
      },
      success: function(res){
        util.preProcessDetailPageInput(res.data);
        // success
        that.setData({
          detail:res.data[1]
        })
/*
    this.setData({
      logsArray: wx.getStorageSync("logs").map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
*/
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})