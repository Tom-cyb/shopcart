<template>
  <div class="my">
    {{ num }}
    <button @click="getnum()">123123</button>
  </div>
</template>
<script>
export default {
  name: "my",
  data() {
    return {
      num: 0,
    };
  },

  methods: {
    getnum() {
      this.num++;
    },
  },
};
</script>
<style>
.my {
  height: 100vh;
  width: 100%;
}
</style>
