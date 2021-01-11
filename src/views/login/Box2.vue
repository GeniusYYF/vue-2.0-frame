<template>
  <div class="box">
    <div class="title">
      <span class="h2" @click="$store.commit('login/updateSelectBox', 1)"
        >账号登录</span
      >
      <span class="divide">︱</span>
      <span class="h1" @click="$store.commit('login/updateSelectBox', 2)"
        >验证码登录</span
      >
    </div>
    <!-- <Row class="title">
          <Col span="9">
            <span class="h1">账号登录</span>
          </Col>
          <Col span="1">
            <div class="divide"></div>
          </Col>
          <Col span="12">
            <span class="h2">验证码登录</span>
          </Col>
        </Row> -->

   <div class="QR" @click="$store.commit('login/updateSelectBox', 3)"></div>
    <div class="form">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="tel" class="form-item">
          <Input
            class="tel"
            type="text"
            v-model="form.tel"
            placeholder=" 请输入手机号"
          />
        </FormItem>
        <FormItem prop="yzm" class="form-item">
          <Input class="yzm" v-model="form.yzm" placeholder=" 请输入验证码" />
          <Button class="update-botton" type="info">点击获取验证码</Button>
        </FormItem>
        <FormItem class="form-item">
          <Button class="form-button" @click="handleSubmit('form')"
            >登录</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tel: "",
        password: "",
        yzm: "",
      },
      rules: {
        tel: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        yzm: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("登录成功");
          this.$router.push("/index");
        } else {
          this.$Message.error("请输入正确的验证码");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #ffffff;
  height: 100%;
  padding: 4.5vh 2.8vw 5vh;
  width: 26vw;
  height: 35vh;

  .title {
    height: 4.2vh;
    text-align: left;

    .h1 {
      font-size: 3.4vh;
      color: #333333;
      line-height: 1;
      cursor: pointer;
    }

    .divide {
      font-size: 3vh;
      color: #e5e5e7;
      // width: 0.1vw;
      // height: 3.2vh;
      // border: 0.1vh solid #e5e5e7;
      margin: 0.65vh 1vw;
    }

    .h2 {
      font-size: 2.4vh;
      color: #9f9f9f;
      cursor: pointer;
    }
  }

  .QR {
    width: 4.2vw;
    height: 8.1vh;
    background: url(../../assets/QR.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 1.8vh;
    right: 0.5vw;
    cursor: pointer;
  }

  .form {
    margin-top: 2.3vh;

    .form-item {
      margin-bottom: 2.6vh;

      /deep/ .ivu-input {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #e5e5e7;
        caret-color: #08d8c3; // 输入时光标颜色
        height: 3.5vh;
        font-size: 1.4vh;
      }
      /deep/ .ivu-form-item-error-tip {
        font-size: 1.4vh;
      }
      .yzm {
        width: 50%;
        text-align: left;
      }
      .yzm /deep/ .ivu-input {
        border: none;
        background: #f6f6f6;
        border-radius: 4px;
        //  display: inline-block;
        // vertical-align: middle;
      }
      .update-botton {
        width: 40%;
        margin-left: 10%;
        font-size: 1.4vh;
        line-height: 3.5vh;
        color: #f6f6f6;
        //   float: right;
      }
      .form-button {
        margin-top: 1vh;
        background: #0054da;
        border-radius: 3vh;
        width: 20.4vw;
        height: 5.2vh;
        color: #ffffff;
        font-size: 1.4vh;
      }
    }
  }
}
</style>