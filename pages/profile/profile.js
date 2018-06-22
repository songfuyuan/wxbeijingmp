// pages/profile/profile.js

var app = getApp()

Page({
  data: {
    userInfo: {
      // 头像URL初始值
      avatarUrl: "",
      // 昵称初始值
      nickName: ""
    },
    // 个人签名初始值
    motto1: ""
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    app.getUserInfo(function (result) {
      // 修改/更新组件内容或者属性
      that.setData({
        userInfo: result
      })
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