<template>
  <div>
    <div class="login-bg1"></div>
    <div class="login-bg2"></div>
    <div class="login-bg3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login-bg1,
.login-bg2,
.login-bg3 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
}

.login-bg1 {
  background: url(../../assets/bj.png) no-repeat;
  background-size: 100% 100%;
}

.login-bg2 {
  top: 2px;
  opacity: 0.28;
  transform: scaleX(-1);
  background-image: linear-gradient(
    180deg,
    #01a4d8 14%,
    #0973a0 59%,
    #05121f 100%
  );
}
.login-bg3 {
  background: url(../../assets/bj2.png) no-repeat;
  background-size: 100% 100%;
}
</style>