// pages/search/search.js
var util = require("../../utils/util.js");

// 开始条数和每次几条
var startItem = 0;
var count = 25;
// 所有电影数据
var detailArray = [];

Page({
  data:{
    details:[],
  },
    search:function(e){
      if (!e.detail.value){
        return;
      }
      wx.showToast({
      title:"加载中...",
      icon:"loading",
      duration:10000
    });
    var that = this;
    wx.request({
      url: getApp().config.API_URL_search+"?output=json&keyword=" + e.detail.value,
      data:{},
      header:{
        "Content-Type":"json"
      },
      success: function(res){
        wx.hideToast();
        util.preProcessSearchPageInput(res.data);
        var data = res.data[1];
        // 第二阶段: 添加数据到新数组中
        detailArray = data;
        that.setData({
          details: detailArray
        })
        }
    });
    }
});
 