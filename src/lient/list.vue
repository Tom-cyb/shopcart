<template>
  <div class="list">
    <van-card
      v-for="item in list"
      :key="item.id"
      num="添加购物车"
      :price="item.price"
      :desc="item.info"
      :title="item.goodname"
      :thumb="item.goodimg"
    />
  </div>
</template>
<script>
import { listObj } from "../server";
export default {
  name: "list",
  data() {
    return {
      list: [],
    };
  },

  methods: {
    getGoodsList() {
      listObj.goodsList().then((res) => {
        this.list = res;
      });
    },
  },
  mounted() {
    this.getGoodsList();
  },
};
</script>
<style></style>
