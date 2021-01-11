<template>
  <Layout class="index">
    <MyHeader />
    <Layout style="flex-direction: row">
      <!-- menuWidth 默认200px maxCh 默认 3 -->
      <MySider menuWidth="250px" maxCh="5" />
      <Layout :style="{ padding: '24px' }">
        <Content
          :style="{ padding: '24px', minHeight: '280px', background: '#fff' }"
        >
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import MyHeader from "@/components/header/header.vue";
import MySider from "@/components/sider/MenuSider.vue";

export default {
  name: "Index",
  components: {
    MyHeader,
    MySider,
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  width: 100%;
}
</style>