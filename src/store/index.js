import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  goodsList: [],
};

const mutations = {
  goodsList(state, goodsInfo) {
    let record = state.goodsList.find((n) => n.id == goodsInfo.id);
    if (!record) {
      // Vue.set() 全局把静态数据变成响应式数据的方法
      // 第一个参数是你需要操作的对象
      // 第二个参数是你需要添加的属性
      // 第三个参数是你需要添加的属性值
      // 手动的把goodsNum变成响应式数据，重新赋值
      Vue.set(goodsInfo, "goodsNum", 1);
      state.goodsList.push(goodsInfo);
    } else {
      let list = state.goodsList.map((item) => {
        if (item.id == goodsInfo.id) {
          item.goodsNum++;
        }
        return item;
      });
      // 全局 手动添加购物车  把数据全部变成响应式数据
      Vue.set(state, "goodsList", list);
    }
  },
};

const actions = {
  GOODS_LIST({ commit }, goodsInfo) {
    commit("goodsList", goodsInfo);
  },
};

const getters = {
  totalNums(state) {
    let num = 0;
    state.goodsList.forEach((item) => {
      num += item.goodsNum;
    });
    return num;
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
