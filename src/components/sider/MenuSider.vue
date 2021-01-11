<template>
  <Sider
    class="sider"
    ref="side"
    hide-trigger
    collapsible
    v-model="isCollapsed"
    breakpoint="md"
    :collapsed-width="78"
    style="width: auto; max-width: unset; flex: 0 0 auto"
  >
    <Icon
      type="md-menu"
      size="24"
      :style="{ margin: '0 20px', cursor: 'pointer' }"
      :class="rotateIcon"
      @click.native="collapsedSider"
    ></Icon>
    <Menu
      ref="menu"
      theme="light"
      width="auto"
      accordion
      :style="{ width: this.isCollapsed ? 'unset' : menuWidth }"
      :class="menuitemClasses"
      :active-name="selectName"
      :open-names="selectNames"
      @on-open-change="updateNames"
      @on-select="updateSubmenuNames"
    >
      <MenuItemSelf
        v-for="(item, i) in siderDatas"
        :key="i"
        :item="item"
        :i="i"
        :activeName="activeName"
        :name="i + 1 + ''"
        :maxCh="maxCh"
      ></MenuItemSelf>
    </Menu>
  </Sider>
</template>

<script>
import MenuItemSelf from "./MenuItem.vue";

export default {
  components: { MenuItemSelf },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "collapsed-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  props: {
    menuWidth: {
      type: String,
      default: "200px",
    },
    maxCh: {
      type: String,
      default: "3",
    },
  },
  data() {
    return {
      isCollapsed: false,
      siderDatas: [
        {
          title: "首页",
          path: "home",
          icon: "ios-navigate",
          children: null,
        },
        {
          title: "示例页",
          path: null,
          icon: "ios-people",
          children: [
            {
              title: "示例1",
              path: "eg1",
              icon: "ios-people",
              children: [
                {
                  title: "示例1-1",
                  path: "eg1-1",
                  icon: "ios-people",
                  children: null,
                },
                {
                  title: "示例1-2",
                  path: "eg1-2",
                  icon: "ios-people",
                  children: [
                    {
                      title: "示例1-2-1",
                      path: "eg1",
                      icon: "ios-people",
                      children: [
                        {
                          title: "示例1-2-1-1",
                          path: "eg1-1",
                          icon: "ios-people",
                          children: null,
                        },
                        {
                          title: "示例1-2-1-2",
                          path: "eg1-2",
                          icon: "ios-people",
                          children: null,
                        },
                      ],
                    },
                    {
                      title: "示例1-2-2",
                      path: "eg2",
                      icon: null,
                      children: null,
                    },
                  ],
                },
              ],
            },
            {
              title: "示例2",
              path: "eg2",
              icon: null,
              children: null,
            },
          ],
        },
        {
          title: "统计分析",
          path: null,
          icon: null,
          children: [
            {
              title: "新增和启动",
              path: "eg1",
              icon: null,
              children: null,
            },
            {
              title: "活跃分析",
              path: "eg1",
              icon: null,
              children: null,
            },
            {
              title: "时段分析",
              path: "eg1",
              icon: null,
              children: null,
            },
          ],
        },
      ],
      selectName: "1",
      selectNames: ["1"],
      selectNamesCatch: ["1"],
      activeName: "1", // 用于激活改色的下拉菜单列表
    };
  },
  methods: {
    collapsedSider() {
      this.$refs.side.toggleCollapse();

      this.$nextTick(() => {
        this.selectNames = this.isCollapsed ? [] : this.selectNamesCatch;
        setTimeout(() => {
          this.$refs.menu.updateOpened();
        }, 200);
      });
    },
    updateNames(name) {
      this.selectNames = name;
      this.selectNamesCatch = name;
      console.log(name);
    },
    updateSubmenuNames(name) {
      let arr = name.split("-"),
        temp = [];
      arr.pop();

      while (arr.length) {
        temp.push(arr.join("-"));
        arr.pop();
      }
      this.selectNames = temp;
      this.selectNamesCatch = temp;
      // this.$nextTick(() => {
      //   this.$refs.menu.updateOpened();
      // });
      // console.log(temp);
      this.activeName = name;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.sider {
  background-color: #fff;
  .menu-icon {
    transition: all 0.3s;
    cursor: pointer;
  }
  .collapsed-icon {
    transform: rotate(-180deg);
  }
  // 缩放前的官方案例样式
  /deep/ .menu-item {
    text-align: left;
    .menu-item-text {
      display: inline-block;
      overflow: hidden;
      width: 128px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width 0.2s ease 0.2s;
    }
    .menu-item-icon {
      transform: translateX(0px);
      transition: font-size 0.2s ease, transform 0.2s ease;
      vertical-align: middle;
      font-size: 16px;
      margin-right: 8px;
    }
    /deep/ .menu-item-text-ch {
      display: inline-block;
      overflow: hidden;
      width: auto;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: all 0.2s ease 0.2s;
    }
  }
  // 缩放后根据案例修改样式
  /deep/ .collapsed-menu {
    // 一级菜单隐藏文字，只显示图标（一级必须有图标，否则使用no-icon显示文字替代）
    .menu-item-text {
      display: inline-block;
      width: 0px;
      transition: width 0.2s ease;
      &.no-icon {
        overflow: hidden;
        width: 42px;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: -20px;
      }
    }
    // 默认（一级）图标样式
    .menu-item-icon {
      transform: translateX(4px);
      vertical-align: middle;
      font-size: 22px;
    }
    // 中等图标
    .menu-item-icon-middle {
      font-size: 20px;
    }

    // 默认的submenu下拉框icon调整
    .ivu-icon-ios-arrow-down.ivu-menu-submenu-title-icon {
      right: 0;
      transform: rotate(-90deg);
      top: 38%;
    }

    // 将每一个二级、三级等多级菜单相对定位
    .ivu-menu-item,
    .ivu-menu-submenu {
      position: relative;
      height: 50.5px; // 统一高度

      // 子菜单相对父菜单定位
      .ivu-menu {
        display: none;
        position: absolute;
        left: calc(100% + 1px);
        top: 0px;
        z-index: 2021;
        background-color: #fff;
        width: 200px;
        outline: rgb(220, 222, 226) solid thin;

        .ivu-menu-item,
        .ivu-menu-submenu-title {
          padding-left: 43px !important; // 统一内边距
        }
        // 激活子菜单时设置submenu颜色
        .ivu-menu-opened {
          color: #2d8cf0;
        }
      }
    }
    // submenu over 显示子菜单
    .ivu-menu-submenu-title:hover + .ivu-menu {
      display: block !important;
    }
    // 移到子菜单保存显示子菜单
    .ivu-menu-submenu-title + .ivu-menu {
      &:hover {
        display: block !important;
      }
    }
  }
}
</style>