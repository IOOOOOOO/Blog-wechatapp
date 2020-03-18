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



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.iacblog.com"
var DOMAIN = "www.day1.ren";
var MINAPPTYPE = "1"; //小程序的类型，如果是企业小程序请填：0 ，如果是个人小程序请填：1
var WEBSITENAME = "Day1"; //网站名称
var ABOUTID = 28; //wordpress网站"页面"的id,注意这个"页面"是wordpress的"页面"，不是"文章"
var PAGECOUNT = '10'; //每页文章数目
var CATEGORIESID = 'all'; //专题页显示全部的分类
//var CATEGORIESID = '1,1059,98,416,189,374,6,463';//指定专题页显示的分类的id
var INDEXLISTTYPE = "all"; //首页显示所有分类
//var INDEXLISTTYPE ="1" //指定首页显示分类的id
var PAYTEMPPLATEID = 'hzKpxuPF2rw7O-qTElkeoE0lMwr0O4t9PJkLyt6v8rk'; //鼓励消息模版id
var REPLAYTEMPPLATEID = 'gxXlK0soqCHdoFvDqBtb9u2VPum0tXLnCMuVyNDAalI'; //回复评论消息模版id
var ZANIMAGEURL = 'https://www.day1.ren/wp-content/uploads/2020/01/wechatzanshan.jpg'; //微信鼓励的图片链接，用于个人小程序的赞赏
var LOGO = "../../images/logo-icon.png"; // 网站的logo图片
var POSTERIMGURL = "../../images/logo700.png"; //生成海报如果没有首图，使用此处设置的图片作为海报图片。
//设置downloadFile合法域名,不带https ,在中括号([])里增加域名，格式：{id=**,domain:'www.**.com'}，用英文逗号分隔。
//此处设置的域名和小程序与小程序后台设置的downloadFile合法域名要一致。
var DOWNLOADFILEDOMAIN = [{
    id: 1,
    domain: 'www.day1.ren'
  },
  {
    id: 2,
    domain: 'www.day1.ren'
  },
  {
    id: 3,
    domain: 'www.day1.ren'
  }
];
//首页图标导航
//参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
//redirecttype 是 miniapp 就是跳转其他小程序  url 为其他小程序的页面
//redirecttype 为 apppage 就是跳转本小程序的页面，url为本小程序的页面路径
//redirecttype 为 webpage 是跳转网址，是通过web-view打开网址，url就是你要打开的网址，不过这个网址的域名要是业务域名
//'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
//'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
var INDEXNAV = [{
    id: '1',
    name: '微慕',
    image: '../../images/nav-icon1.png',
    url: 'pages/index/index',
    redirecttype: 'miniapp',
    appid: 'wx074a216a7aabc30c',
    extraData: ''
  },
  {
    id: '2',
    name: '企业版',
    image: '../../images/nav-icon2.png',
    url: 'pages/index/index',
    redirecttype: 'miniapp',
    appid: 'wxc1771b619b83316b',
    extraData: ''
  },
  {
    id: '3',
    name: '旅游版',
    image: '../../images/nav-icon3.png',
    url: 'pages/index/index',
    redirecttype: 'miniapp',
    appid: 'wxa43aaa8416cdbd61',
    extraData: ''
  }

];

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,
  getAboutId: ABOUTID,
  getPayTemplateId: PAYTEMPPLATEID,
  getPageCount: PAGECOUNT,
  getCategoriesID: CATEGORIESID,
  getIndexNav: INDEXNAV,
  getReplayTemplateId: REPLAYTEMPPLATEID,
  getMinAppType: MINAPPTYPE,
  getZanImageUrl: ZANIMAGEURL,
  getIndexListType: INDEXLISTTYPE,
  getLogo: LOGO,
  getPostImageUrl: POSTERIMGURL,
  getDownloadFileDomain: DOWNLOADFILEDOMAIN
}