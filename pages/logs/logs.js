/*
 * 
 * WordPres版微信小程序
 * author: 林航辉
 * organization: Day1博客 www.day1.ren
 * github: https://github.com/SCHLLLLLL/Blog-wechatapp.git
 * 技术支持微信号：s425166362
 * 开源协议：MIT
 * Copyright (c) 2020 https://www.day1.ren/ All rights reserved.
 */

var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function(log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})