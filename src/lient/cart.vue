<template>
  <div class="cart">
    <div class="shop_car_main">
      <div class="shop_car_main_top">
        <div>
          <van-checkbox v-model="allChecked" checked-color="#ee0a24"
            >全选</van-checkbox
          >
        </div>
        <div>
          <van-button type="danger" @click="CLEARSHOPCAR"
            >清空购物车</van-button
          >
        </div>
      </div>

      <div class="carts">
        <div
          class="shop_car_main_main"
          v-for="(item, index) in goodsList"
          :key="index"
        >
          <van-checkbox
            v-model="checked"
            :value="item.id"
            checked-color="#ee0a24"
          ></van-checkbox>
          <img class="car_img2" :src="item.goodimg" />
          <div class="shop_car_main_main_right">
            <div class="shop_car_main_main_right_text">{{ item.goodname }}</div>
            <div class="zongliang">
              <span>{{ item.info }}</span>
            </div>
            <div class="press_div">
              <span class="span_press">${{ item.price }}</span>
              <span class="jisuan">
                <button>-</button>
                <span class="jisuan_span">{{ item.goodsNum }}</span>
                <button>+</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="submit_money">
        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checked" checked-color="#ee0a24"
            >全选</van-checkbox
          >
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      obj: {
        num: 10,
        age: 1000,
      },
      checked: [],
      allChecked: false,
      selectedData: [],
    };
  },
  computed: {
    ...mapState(["goodsList"]),
  },
  methods: {
    ...mapActions(["CLEARSHOPCAR"]),
    onSubmit() {},
  },
  created() {},
  mounted() {
    console.log(this.goodsList, "===");
  },
};
</script>
<style lang="less">
.cart {
  width: 100%;
  height: 100%;
  .btn {
    margin-left: 80px;
  }
  .van-submit-bar {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .Shop_car {
    background: #ccc;
    margin-bottom: 120px;
  }
  .shop_car_main {
    background-color: white;
    padding: 0.05px 0px;
  }

  .no-goods-car {
    width: 100%;
    height: 1.5rem;
    background: #fff;
    text-align: center;
    line-height: 1.5rem;
  }
  .shop_car_top {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(51, 51, 51, 1);
    font-size: 18px;
    font-family: Microsoft Yahei;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
  }
  .shop_car_top_span {
    position: absolute;
    right: 20px;
    left: 290px;
    color: rgba(153, 153, 153, 1);
    font-size: 15px;
    font-family: PingFangSC-regular;
  }
  .car_img1 {
    width: 0.2rem;
    height: 0.19rem;
    padding-top: 0.06rem;
  }
  .car_img2 {
    width: 0.9rem;
    height: 100%;
  }
  .shop_car_main_main_right {
    height: 100%;
  }
  .shop_car_main_main {
    display: flex;
    height: 1rem;
    justify-content: space-around;
    margin-bottom: 0.1rem;
    align-items: center;
    background: #fafafa;
  }
  .shop_car_main_main:nth-last-child(1) {
    margin-bottom: 0.6rem;
  }
  .shop_car_main_top {
    padding-bottom: 0.06rem;
    margin-bottom: 0.08rem;
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;
  }
  .carts {
    width: 100%;
  }
  .zongliang {
    display: flex;
    justify-content: space-between;
    color: rgba(153, 153, 153, 1);
    font-size: 12px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  .shop_car_main_foot {
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
  .shop_car_main_main_right_text {
    width: 1.8rem;
    font-size: 13px;
  }
  .span_press {
    color: rgba(242, 48, 48, 1);
    font-size: 16px;
    text-align: left;
    font-family: PingFangSC-regular;
  }
  .press_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .press_div button {
    width: 0.26rem;
    border: none;
    background-color: white;
    font-size: 0.2rem;
    height: 0.26rem;
    color: #fff;
    border: none;
    border-radius: 2px;
    background: #ee0a24;
    padding: 0;
  }
  .jisuan {
    line-height: 17px;
    color: rgba(51, 51, 51, 1);
    font-size: 18px;
    text-align: center;
    font-family: SFUIText-regular;
    display: inline-block;
  }
  .submit_money {
    width: 100%;
    height: 0.49rem;
    position: fixed;
    bottom: 0.66rem;
    border-top: 1px solid #ccc;
    box-sizing: content-box;
    left: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-of-type(2) {
      margin-right: 0.2rem;
    }
    .van-submit-bar__bar {
      border-top: 1px solid #ccc;
    }
  }
  .jisuan_span {
    width: 0.5rem;
    display: inline-block;
  }
}

.van-checkbox__icon {
  margin-right: 0.2rem;
}
</style>
