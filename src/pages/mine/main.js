import Vue from 'vue'
import App from './mine'

const app = new Vue(App)
app.$mount()

export default {
    config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '我的页面',
    navigationBarTextStyle: 'black',
    "usingComponents": {
      "van-button": "/static/vant/button/index",
      "van-icon": "/static/vant/icon/index"
    }
    }
  }
