import Vue from 'vue'
import App from './myClassroom'

const app = new Vue(App)
app.$mount()

export default {
    config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '我的课程',
    navigationBarTextStyle: 'black',
    "usingComponents": {
      "van-button": "/static/vant/button/index",
      "van-icon": "/static/vant/icon/index"
    }
    }
  }
