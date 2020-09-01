<template>
  <div class="list">
    <van-card
      v-for="item in list"
      :key="item.id"
      :price="item.price"
      :desc="item.info"
      :title="item.goodname"
      :thumb="item.goodimg"
    >
      <template #bottom>
        <van-button type="danger" size="mini" @click="GOODS_LIST(item)" round
          >添加购物车</van-button
        >
      </template>
    </van-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { listObj } from "../server";
export default {
  name: "list",
  data() {
    return {
      list: [],
    };
  },

  methods: {
    ...mapActions(["GOODS_LIST"]),
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
<style>
.van-card__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.26rem;
}
</style>
