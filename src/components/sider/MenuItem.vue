<template>
  <Submenu
    v-if="item.children && maxCh > name.split('-').length"
    :name="name"
    :style="{ color: activeColor }"
  >
    <template slot="title">
      <Icon
        :class="{
          'menu-item-icon': isFirst,
          'menu-item-icon-middle': !isFirst,
        }"
        :type="item.icon"
      />
      <span
        :class="{
          'menu-item-text': isFirst,
          'menu-item-text-ch': !isFirst,
          'no-icon': !item.icon,
        }"
        >{{ item.title }}</span
      >
    </template>
    <MenuItemSelf
      v-for="(item2, j) in item.children"
      :key="j"
      :item="item2"
      :i="i"
      :activeName="activeName"
      :name="name + '-' + (j + 1)"
      :maxCh="maxCh"
    ></MenuItemSelf>
  </Submenu>

  <MenuItem v-else :name="name" :to="item.path">
    <Icon
      v-if="item.icon"
      :class="{ 'menu-item-icon': isFirst, 'menu-item-icon-middle': !isFirst }"
      :type="item.icon"
    />
    <span
      :class="{
        'menu-item-text': isFirst,
        'menu-item-text-ch': !isFirst,
        'no-icon': !item.icon,
      }"
      >{{ item.title }}</span
    >
  </MenuItem>
</template>

<script>
export default {
  name: "MenuItemSelf",
  computed: {
    isFirst() {
      return this.name.indexOf("-") == -1;
    },
    activeColor() {
      return this.name.split("-").length < this.activeName.split("-").length &&
        this.name.split("-")[0] == this.activeName.split("-")[0]
        ? "#2d8cf0"
        : "unset";
    },
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    i: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "1",
    },
    maxCh: {
      type: String,
      default: "3",
    },
    activeName: {
      type: String,
      default: "1",
    },
  },
  mounted() {
    console.log(this.item, this.i, this.name);
  },
};
</script>

<style lang="less" scoped>
</style>