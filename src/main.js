import Vue from 'vue'
import App from './App'
import wxService from './api/wxService'
import httpService from './api/httpService'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.mixin({
  data() {
    return {
      service: '',
      router: '',
      imgSrc: ''
    }
  },
  created() {
    if (window) {
      this.service = httpService
      this.router = '/#'
      this.imgSrc = '../..'
    } else {
      this.service = wxService
      this.imgSrc = '/static'
    }
  }
})

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "color": "#d3d3d3",
      "backgroundColor": "#fafafa",
      "selectedColor": "#ff9502",
      "borderStyle": "white",
  
      "list": [{
        "text": "有门小课",
        "pagePath": "pages/index/main",
        "iconPath": "/static/res/img/fotter/child_in.png",
        "selectedIconPath": "/static/res/img/fotter/child_active.png"
      }, {
        "text": "我的课堂",
        "pagePath": "pages/myClass/main",
        "iconPath": "/static/res/img/fotter/book_in.png",
        "selectedIconPath": "/static/res/img/fotter/book_active.png"
      },{
        "text": "个人中心",
        "pagePath": "pages/mine/main",
        "iconPath": "/static/res/img/fotter/ower_in.png",
        "selectedIconPath": "/static/res/img/fotter/ower_active.png"
      }],
      "position": "bottom"
    }
  }
}
