// util.js: 模块化文件

// preprocess function expect an array as input, whick contain all params, then do some prepare work.
function preProcessListPageInput(arr) {
  arr[1][1].map(function(item){
    item.imagepath = "http://" + arr[0] + '/' + item.imagepath;
    item['content'] = item['content'].substr(0, 60);
    item.dateandtime = formatTime(new Date(parseInt(item.dateandtime) * 1000));
    });
}

function preProcessDetailPageInput(arr) {
  arr[1].imagepath = "http://" + arr[0] + '/' + arr[1].imagepath;
  arr[1].dateandtime = formatTime(new Date(parseInt(arr[1].dateandtime)*1000));
  arr[1].content = arr[1].content.replace(/<[^>].*?>/g, "");
}

function preProcessSearchPageInput(arr) {
  arr[1].map(function (item) {
    item.imagepath = "http://" + arr[0] + '/' + item.imagepath;
    item['content'] = item['content'].substr(0, 60);
    item.dateandtime = formatTime(new Date(parseInt(item.dateandtime) * 1000));
  });
}



/** 
 * 1. 声明/定义全局函数;给定时间戳, 返回格式化好的日期-时间字符串
 * 例如: 传参数: new Date(1528696836209) --> 返回"2018/06/11 14:00:36"
*/
function formatTime(date) {
  // 1.获取年月日(number)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  // 2.获取点分秒(number)
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  // 3.拼接2018/06/11; 数组map函数是将数组中的每一个元素按照map参数(匿名函数), 更新/修改成一个新的数组; 4.拼接14:00:36
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatNumber(n) {
  // number类型转成String类型
  n = n.toString() // "6"字符串
  return n[1] ? n : '0' + n
}

function truncContent(date) {
  // 1.获取年月日(number)
  var temp = date['content'].substr(0, 60);
  // 3.拼接2018/06/11; 数组map函数是将数组中的每一个元素按照map参数(匿名函数), 更新/修改成一个新的数组; 4.拼接14:00:36
  date['content'] = temp;
}

// 2. 暴露函数
module.exports.preProcessListPageInput = preProcessListPageInput;
module.exports.preProcessDetailPageInput = preProcessDetailPageInput
module.exports.preProcessSearchPageInput = preProcessSearchPageInput
module.exports.formatTime = formatTime
module.exports.truncContent = truncContent
