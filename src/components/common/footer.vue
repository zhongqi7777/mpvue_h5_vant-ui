<template>
  <div class="footer" v-cloak>
    <van-tabbar
      v-model="active"
      active-color="#ff5b00"
      inactive-color="#DDDDDD"
    >
      <van-tabbar-item to="/">
        <span>有门小课</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/myClassroom">
        <span>我的课堂</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon1.active : icon1.normal"
        >
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span>个人中心</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon2.active : icon2.normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      icon: {
        normal: require("../../../static/res/img/fotter/child_in.png"),
        active: require("../../../static/res/img/fotter/child_active.png")
      },
      icon1: {
        normal: require("../../../static/res/img/fotter/book_in.png"),
        active: require("../../../static/res/img/fotter/book_active.png")
      },
      icon2: {
        normal: require("../../../static/res/img/fotter/ower_in.png"),
        active: require("../../../static/res/img/fotter/ower_active.png")
      }
    };
  },
  methods: {
  },
  watch: {
    $route(to, from) {
      let tempUrl = this.$route.path;
      if (tempUrl.indexOf("myClassroom") != -1) {
        this.active = 1;
      } else if (tempUrl.indexOf("mine") != -1) {
        this.active = 2;
      } else {
        this.active = 0;
      }
    }
  },
  mounted() {
  }
};
</script>

<style style lang="scss">
[v-cloak] {
  display: none;
}
.van-tabbar {
  height: 70rpx !important;
}
.van-tabbar-item__icon img {
  height: 26rpx !important;
}
</style>

