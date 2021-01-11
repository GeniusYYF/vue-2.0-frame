<template>
  <div class="box">
    <div class="title">
      <span
        class="h1"
        @click="$store.commit('login/updateSelectBox', 'login', 1)"
        >账号登录</span
      >
      <span class="divide">︱</span>
      <span class="h2" @click="$store.commit('login/updateSelectBox', 2)"
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

    <div
      class="QR"
      @click="$store.login.commit('login/updateSelectBox', 3)"
    ></div>

    <div class="form">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="user" class="form-item">
          <Input
            class="user"
            type="text"
            v-model="form.user"
            placeholder=" 请输入用户名"
          />
        </FormItem>
        <FormItem prop="password" class="form-item">
          <Input
            class="password"
            type="password"
            password
            v-model="form.password"
            placeholder=" 请输入密码"
          />
        </FormItem>
        <FormItem prop="yzm" class="form-item">
          <Input class="yzm" v-model="form.yzm" placeholder=" 请输入验证码" />
          <div class="img" />
          <Button class="update-botton" type="text">换一张</Button>
        </FormItem>
        <!-- <Row>
                <Col span="12">
                  <Input
                    class="yzm"
                    v-model="form.yzm"
                    placeholder=" 请输入验证码"
                /></Col>

                <Col span="6" offset="1"><div class="img" /></Col>
                <Col span="4" offset="1" class="update-botton">
                  <a>换一张</a>
                </Col>
              </Row> -->
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
import { postLogin } from "@/api/login";

export default {
  data() {
    return {
      form: {
        user: "",
        password: "",
        yzm: "",
      },
      rules: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 1,
            message: "密码不小于6位",
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
          postLogin({
            name: this.form.user,
            password: this.form.password,
            yzm: this.form.yzm,
          })
            .then(({ data }) => {
              console.log(data);
              this.$store.dispatch("saveUserAction", data.data);
              this.$Message.success(data.msg);
              setTimeout(() => {
                let redirect = this.$route.query.redirect;
                console.log(this.$route, "redirect:", redirect);
                // 此时要判断/login后面的参数，若无参数，进入主页；
                this.$router.push(redirect || "/index");
              }, 1000);
            })
            .catch((error) => {
              // 错误分为 status-请求错误 和 code-账号密码错误
              console.log(error);
              error ? this.$Message.error(error.msg) : "";
            });
        } else {
          this.$Message.error("请输入用户名和密码");
        }
      });
    },
  },
  mounted() {},
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
  height: 41.5vh;

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
        // left: 1vw;
      }
      .password {
        /deep/ .ivu-input-suffix {
          width: 1.5vw;
          .ivu-icon {
            font-size: 2vh;
            line-height: 3.5vh;
          }
        }
      }
      // .yzm,
      // .img,
      // .update-botton {
      //   // display: inline-block;
      //   // vertical-align: middle;
      // }
      .yzm {
        width: 50%;
        // width: auto;
        // text-align: left;
      }
      .yzm /deep/ .ivu-input {
        border: none;
        background: #f6f6f6;
        border-radius: 4px;
        // width: 10vw;
      }
      .img {
        width: 25%;
        margin: 0 2.5%;
        // width: 5.1vw;
        height: 3.5vh;
        // margin: 0 1vw;
        background: url(../../assets/yzm.png) no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .update-botton {
        width: 20%;
        padding: 0;
        height: auto;
        font-size: 1.4vh;
        // line-height: 3.5vh;
        color: #666666;
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

    // .fit-content {
    //   width: fit-content;
    // }
  }
}
</style>