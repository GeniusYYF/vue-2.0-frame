<template>
  <div class="login-foot">
    <div class="icon">
      <div class="iphone">
        <div class="img"></div>
        <div>IOS</div>
      </div>
      <div class="android">
        <div class="img"></div>
        <div>Android</div>
      </div>
    </div>
    <div class="text">
      <div>
        Ccopyright&nbsp;&nbsp;&nbsp;©2020&nbsp;&nbsp;徐州市水务局版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;航天宏图信息技术股份有限公司技术支持&nbsp;&nbsp;
      </div>
      <div>
        为保证系统正常运行请使用Chrome、360极速模式或IE9以上分辨率&nbsp;1366*768以上浏览器
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login-foot {
  position: absolute;
  bottom: 0;
  width: 100vw;
  // height: 9.8vh;
  height: 10.8vh;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  color: #ffffffde;
  font-size: 1.5vh;

  .icon {
    .iphone,
    .android {
      width: 5.2vw;
      height: 2.7vh;
      line-height: 2.7vh;
      border: 1px solid #ffffff;
      border-radius: 4px;
      display: inline-block;
      margin: 1vh 1vw;
      cursor: pointer;

      .img {
        // width: 0.8vw;
        // height: 1.5vh;
        width: 0.8vw;
        height: 2vh;
      }
      div {
        display: inline-block;
      }
    }
    .iphone {
      .img {
        background: url(../../assets/Iphone.png) 0 0.5vh no-repeat;
        background-size: 80% 75%;
      }
    }
    .android {
      .img {
        background: url(../../assets/Android.png) 0 0.5vh no-repeat;
        background-size: 80% 75%;
      }
    }
  }

  .text {
    // position: absolute;
    // left: 34.6vw;
    // top: 4.8vh;
    font-family: PingFangSC-Regular;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    color: #ffffffbe;
  }
}
</style>