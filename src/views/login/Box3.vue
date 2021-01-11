<template>
  <div class="box">
    <Button
      class="back"
      type="default"
      ghost
      @click="$store.dispatch('login/backBoxAction')"
      >返 回</Button
    >
    <div class="QR"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 100%;
  //   padding: 8vh;
  width: 26vw;
  height: 35vh;
  position: relative;

  .QR {
    width: 10vw;
    height: 15vh;
    position: absolute;
    left: 0;
    right: 0;
    top: 10vh;
    margin: auto;
    background: url(../../assets/QR2.png) no-repeat;
    background-size: 100% 100%;
  }

  .back {
    position: absolute;
    top: 1vh;
    right: 1vw;
  }
}
</style>