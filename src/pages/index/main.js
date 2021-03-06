import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'black',
    "usingComponents": {
      "van-button": "/static/vant/button/index",
      "van-icon": "/static/vant/icon/index"
    }
    }
  }
