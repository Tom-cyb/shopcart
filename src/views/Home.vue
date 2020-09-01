<template>
  <div class="home">
    <van-sticky>
      <van-nav-bar
        :title="title"
        right-text="分享"
        left-arrow
        @click-left="onClickLeft"
        @click-right="showShare = true"
      />

      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
    </van-sticky>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="container">
        <router-view></router-view>
      </div>
    </van-pull-refresh>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item
          v-for="item in totalNum"
          :key="item.id"
          :icon="item.icon"
          :badge="item.count"
        >
          <router-link :to="{ path: item.path }">{{ item.alias }}</router-link>
        </van-tabbar-item>
      </van-tabbar>
    </div>
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
    width: 100%;
    height: 100%;
    font-size: 20px;
    line-height: 30px;
    flex: 1;
    overflow-y: auto;
    padding: 0.1rem;
  }
  a {
    color: #ccc;
  }

  .footer {
    width: 100%;
    height: 0.7rem;
  }
}
</style>
<script>
import list from "../lient/list.vue";
import { Toast } from "vant";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: { list },
  data() {
    return {
      routes: this.$router.options.routes[0].children,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
      active: 0,
      isLoading: false,
      title: "首页",
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    onClickLeft() {
      Toast("返回");
    },

    onRefresh() {
      setTimeout(() => {
        Toast({
          message: "666",
          icon: "like-o",
        });
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
  computed: {
    ...mapGetters(["totalNums"]),
    totalNum() {
      let arr = this.routes.map((item) => {
        if (item.alias == "购物车") {
          this.$set(item, "count", this.totalNums || 0);
        }
        return item;
      });
      return arr;
    },
  },

  watch: {
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
