<template>
  <input
    class="inp"
    type="text"
    :placeholder="placeholder"
    :value="value"
    :class="{error:!statu,success:statu}"
    @input="handlerinput"
  />
</template>

<script>
export default {
  data() {
    return {
      statu: false
    };
  },
  mounted() {
    this.statu = !!this.value;
  },
  props: ["placeholder", "value", "rules"],
  methods: {
    handlerinput(event) {
      //   实现 子传父
      //   为了在使用封装组件时能够使用双向绑定，这个事件的名称只能叫input
      this.$emit("input", event.target.value);
      if (this.rules) {
        if (this.rules.test(event.target.value)) {
          this.statu = "success";
        } else {
          this.statu = "error";
        }
      }
    }
  }
};
</script>

<style leng="less" >
.inp {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px #999 solid;
  line-height: 40px;
  font-size: 18px;
  outline: none;
  padding-left: 10px;
  box-sizing: border-box;
}
.error {
  border-bottom-color: red;
}
.success {
  border-bottom-color: green;
}
</style>