<template>
  <div class="login-tip">
      <span class="text"> 忘记密码？请 </span>
      <a class="link"> 联系管理员 </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .login-tip {
    position: absolute;
    right: 1.3vw;
    top: 6.7vh;
    padding: 0 0.5vw;
    // width: 9vw;
    height: 2.6vh;
    background: rgba(0, 0, 0, 0.3);
    font-size: 1.5vh;
    line-height: 2.6vh;
    .text {
      color: #ffffffbe;
    }
    .link {
      color: #38c793;
      &:hover {
        border-bottom: 1px solid #38c793;
      }
    }
  }
</style>