<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "halo"
    };
  },

  methods: {
    btn() {
      this.$toast.fail(this.msg);
    }
  }
};
</script>

<style lang="less">
@import "./style/fonticon.css";
</style>