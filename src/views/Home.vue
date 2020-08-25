<template>
  <div class="home">
    <van-sticky>
      <van-nav-bar
        :title="title"
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </van-sticky>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="container">
        <router-view></router-view>
      </div>
    </van-pull-refresh>

    <van-tabbar v-model="active">
      <van-tabbar-item v-for="item in routes" :key="item.id" :icon="item.icon">
        <router-link :to="{ path: item.path }">{{ item.alias }}</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  .container {
    font-size: 20px;
    width: 100%;
    flex: 1;
    overflow-y: auto;
  }
}
</style>
<script>
import list from "../lient/list.vue";
import { Toast } from "vant";
export default {
  name: "home",
  components: { list },
  data() {
    return {
      routes: this.$router.options.routes[0].children,
      active: 0,
      count: 0,
      isLoading: false,
      title: "首页",
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },

  watch: {
    // watch中 给一个变量加 '' ，则说明是精确监听
    "$route.path": function(newVal, oldVal) {
      switch (newVal) {
        case "/actiov":
          this.title = "限时秒杀";
          break;
        case "/cart":
          this.title = "购物车";
          break;
        case "/my":
          this.title = "个人中心";
          break;
        default:
          this.title = "首页";
      }
    },

    immediate: true,
  },
};
</script>
