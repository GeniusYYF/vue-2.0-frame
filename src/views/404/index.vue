<template>
  <div class="page-404">
    <img src="../../assets/404-1.jpg" class="img" />
    <div class="desc">
      <Button class="btn" type="warning" ghost @click="$router.go(-1)"
        >返回上一页</Button
      >
      <Button type="warning" ghost @click="$router.push('/')">返回首页</Button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page-404 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;

  .img {
    // background: url(../../assets/404-1.jpg) no-repeat;
    // background-size: 60% 80%;
    margin-top: 20vh;
  }

  .desc {
    position: absolute;
    top: 50vh;
    left: 0;
    right: 0;
    .btn {
      margin-right: 8vw;
    }
  }
}
</style>