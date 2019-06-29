<template>
  <div class="container">
    <van-button type="primary">测试sss</van-button>
    <!-- <van-icon name="success" /> -->

    <div @click="getUserInfo">授权登录</div>
  </div>
</template>
<script>
import util from "../../utils/util";
import store from "../../vuex/store";

export default {
  name: "chat",
  data() {
    return {};
  },
  components: {
    // swiperItem: swiperSlide   //只在H5使用
  },
  methods: {
    getUserInfo() {
    //   wx.getUserInfo({
    //     success: function(res) {
    //       //从数据库获取用户信息
    //       console.log(res);
    //     }
    //   });
    console.log(this.service.getUserInfo())
    }
  },
  mounted() {
    console.log("123");
    // this.service
    //   .httpRequest({
    //     url: "/superhero/index/movie/hot?qq=565580328&type=superhero",
    //     data: null,
    //     methods: "POST"
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
  },
  created() {}
};
</script>
<style>
.swiperbox {
  width: 100%;
}
</style>
