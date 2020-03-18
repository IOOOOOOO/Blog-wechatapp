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

var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    title: '页面内容',
    pageData: {},
    pagesList: {},
    hidden: false,
    wxParseData: []
  },
  onLoad: function(options) {
    this.fetchData(options.id),
      this.fetchPagesData()
  },
  fetchData: function(id) {
    var self = this;
    self.setData({
      hidden: false
    });
    wx.request({
      url: Api.getPageByID(id, {
        mdrender: false
      }),
      success: function(response) {
        console.log(response);
        self.setData({
          pageData: response.data,
          // wxParseData: WxParse('md',response.data.content.rendered)
          wxParseData: WxParse.wxParse('article', 'html', response.data.content.rendered, self, 5)
        });
        setTimeout(function() {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  },
  fetchPagesData: function() {
    var self = this;
    wx.request({
      url: Api.getPages(),
      success: function(response) {
        self.setData({
          pagesList: response.data
        });
        setTimeout(function() {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  }
})