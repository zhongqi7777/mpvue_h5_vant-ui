<template>
  <div id="app">
    <!-- <Header></Header>
    <h1>APP</h1> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/header'
import Footer from './components/common/footer'
export default {
    name: 'app',
    data: function () {
        return {
        }
    },
    methods: {
        init () {
        }
    },
    created () {
        this.init();
    },
    components: {
      Header,
      Footer
  },
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
</style>
