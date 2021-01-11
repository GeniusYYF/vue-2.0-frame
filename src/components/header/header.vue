<template>
  <Header>
    <Menu
      class="header"
      mode="horizontal"
      theme="light"
      active-name="1"
      @on-select="onSelect"
    >
      <div class="title">
        <MyLogo class="logo" />
        <MyTitle class="text" />
      </div>

      <MenuItem
        name="6"
        class="header-item header-icon"
        style="margin-right: 20px"
        :to="'/login'"
        replace
      >
        <Icon type="ios-log-out" />
        退出
      </MenuItem>

      <MenuItem
        v-if="activeRoute == '/home'"
        name="5"
        class="header-item header-icon"
      >
        <Icon type="md-settings" />
      </MenuItem>

      <MenuItem name="4" class="header-item header-icon">
        <Badge :count="5" type="error" :offset="[18, 0]">
          <Icon type="ios-mail" />
        </Badge>
      </MenuItem>

      <MenuItem name="3" class="header-item header-icon">
        <Badge :count="3" type="error" :offset="[18, 0]">
          <Icon type="ios-notifications" />
        </Badge>
      </MenuItem>

      <MenuItem
        v-if="activeRoute == '/home'"
        name="2"
        class="header-item header-icon"
      >
        <Icon type="md-git-network" /> 工作台
      </MenuItem>

      <Submenu name="1" class="header-item">
        <template slot="title"> {{ $store.getters.getUser.name }} </template>
        <MenuItem name="3-1">个人资料</MenuItem>
        <MenuItem name="3-2">修改信息</MenuItem>
      </Submenu>
    </Menu>
  </Header>
</template>

<script>
import MyLogo from "@/components/little/Logo.vue";
import MyTitle from "@/components/little/Title.vue";

export default {
  components: { MyLogo, MyTitle },
  computed: {
    activeRoute() {
      return this.$store.state.activeRoute;
    },
  },
  methods: {
    onSelect(name) {
      console.log(name);
      if (name == 6) this.$store.dispatch("delUserAction");
    },
  },
  watch: {
    $route(to, from) {
      this.$store.commit("setActiveRoute", to.path);
      console.log(
        to.path,
        from.path,
        this.$store.state.activeRoute,
        this.$store.getters.getActiveRoute
      );
    },
  },
  mounted() {
    console.log("当前时间：", this.$dateFormat());
    console.log(
      "activeRoute:",
      this.activeRoute,
      "所有缓存:",
      this.$storage.getAll()
    );
    this.$store.commit("setActiveRoute", '/'+window.location.hash.split("/")[1]);
    console.log(this.$store.state.activeRoute);
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background: linear-gradient(to right, rgba(33, 98, 158, 1) 40%, transparent),
    url(../../assets/header2.png) no-repeat;
  background-size: 100% 100%;
  // background: -webkit-linear-gradient(
  //   to right,
  //   rgba(33, 98, 158, 1) 40%,
  //   transparent
  // );
  // background: -moz-linear-gradient(
  //   to right,
  //   rgba(33, 98, 158, 1) 40%,
  //   transparent
  // ); /*FireFox*/
  // background: -o-linear-gradient(
  //   to right,
  //   rgba(33, 98, 158, 1) 40%,
  //   transparent
  // ); /* Opear */
  // background: -ms-linear-gradient(
  //   to right,
  //   rgba(33, 98, 158, 1) 40%,
  //   transparent
  // ); /*IE10及IE10+*/

  .title {
    float: left;
    line-height: 1;
    cursor: default;
    position: relative;

    .logo {
      float: left;
      margin: 1vh 0.2vw;
    }
    .text {
    }
  }

  .header-item {
    float: right !important;
    padding: 0 15px;
    font-size: 20px;
    color: #fff;
  }
  .header-icon {
    i {
      color: #fff;
      font-size: 20px;
    }
    &:hover i {
      color: #2d8cf0;
    }
  }
}
</style>