<template>
  <div class="login">
    <LoginBackground />
    <LoginTips />
    <MyLogo class="login-logo" />
    <MyTitle class="login-title" />

    <div class="login-box">
      <Box1 v-show="$store.state.login.selectBox == 1"></Box1>
      <Box2 v-show="$store.state.login.selectBox == 2"></Box2>
      <Box3 v-show="$store.state.login.selectBox == 3"></Box3>
    </div>

    <LoginFoot />
  </div>
</template>

<script>
// 公共可复用组件以My开头
import MyLogo from "@/components/little/Logo.vue";
import MyTitle from "@/components/little/Title.vue";
// 私有子组件以Views名开头
import LoginBackground from "./Background";
import LoginTips from "./Tips";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import LoginFoot from "./Foot";

export default {
  components: {
    MyLogo,
    MyTitle,
    LoginBackground,
    LoginTips,
    Box1,
    Box2,
    Box3,
    LoginFoot,
  },
  computed:{
    getSelectBox(){
      return this.$store.getters.login.getSelectBox
    }
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  // 公共组件用尽可能少的样式达到低耦合，使用时可加入、更改所需样式
  .login-logo {
    position: absolute;
    left: 5.4vw;
    top: 7.8vh;
    width: 3.2vw;
    height: 4.4vh;
  }
  .login-title {
    position: absolute;
    left: 9.2vw;
    top: 6.7vh;
    // width: 40.8vw;
    height: 6.8vh;
    color: #fffffffa;
    font-size: 6vh;
  }
  .login-box {
    position: absolute;
    left: 61.6vw;
    top: 27.9vh;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    background-image: linear-gradient(
      90deg,
      #d2d2fa 0%,
      #c2f9ff 56%,
      #c0dbf8 100%
    );
    padding-top: 0.6vh;
  }
}
</style>>

