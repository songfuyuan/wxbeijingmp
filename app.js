App({
  config: {
    API_URL_index:  "http://www.colorfulland.org.cn/index.php",
    API_URL_list:   "http://www.colorfulland.org.cn/newstype.php",
    API_URL_detail: "http://www.colorfulland.org.cn/news.php",
    API_URL_search: "http://www.colorfulland.org.cn/search.php"
  },
  // 全局方法: 获取/返回微信用户信息
  getUserInfo: function (callback) {
    // 调用两个API获取用户信息
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (result) {
            // 调用callback, 并传用户信息
            /**if(typeof callback == "function") {
              callback(result.userInfo)
            }*/ // 等价写法
            typeof callback == "function" && callback(result.userInfo)
          },
          fail: function () {
            console.log("调用getUserInfo接口失败")
          }
        })
      },
      fail: function () {
        console.log("调用login接口失败")
      }
    })

  }
  
})