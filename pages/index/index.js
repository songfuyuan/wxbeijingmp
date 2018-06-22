// util是Object类型; 引入util.js文件
var util = require("../../utils/util.js");

// 第二阶段(下面三个属性): 下拉刷新和上拉加载
// 开始条数和每次几条
var startItem = 0;
var count = 25;
// 所有电影数据
var detailArray = [];

Page({
  data:{
    // 给template模板传值
    details:[
    ],
    // test: 0
    title: "文章列表"
  },
  onLoad:function(options) {
    var that = this;
    requestData(that);
  },
  // 上拉加载新数据
  onReachBottom: function() {
    console.log("上拉加载....")
    // 重新发送请求
    var that = this;
    requestData(that);
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    console.log("下拉刷新....")
    // 直接调用onLoad方法
    this.onLoad()
  }
})
/** 私有方法*/
function requestData(that, startNum) {
  // console.log("test值为: " + that.data.test);
  // 页面初始化 options为页面跳转所带来的参数
  wx.showToast({
    title: "加载中...",
    icon: "loading"
  });

  wx.request({
    url: getApp().config.API_URL_list + "?output=json&typeId=15",
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      wx.hideToast();
      util.preProcessListPageInput(res.data);
      var data = res.data[1][1];
      // 第二阶段: 添加数据到新数组中
      detailArray = detailArray.concat(data);
      // 更新title标题和movies数组
      that.setData({
        title: data.title,
        // 第一阶段: 
        // movies: data.subjects
        // 第二阶段:
        // movies: detailArray
        // 调用util.js函数; 格式化数组数据; 更新data属性值
        details: detailArray
        //movies: movieArray.map(function (itemObj) {
          //return util.formatTime(itemObj)
        //})
      });
      // 第二阶段: 更新startItem起始值
      startItem = startItem + count;
    },
    fail: function () {
      console.log("网络请求失败");
    }
  })
}