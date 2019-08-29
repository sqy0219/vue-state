<template>
  <div id="count">
    <div>
      <hr />
      <h1>{{count}}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  components: {},
  //computed: {
  //因为store里面的属性随时会变化，所以用计算属性来获取
  // count() {
  //   //随意函数名
  //   return this.$store.state.count; //相当于main.js中挂载的store，在vue实例中写作$store，这是规范
  // }
  //}
  computed: mapState(["count", "todos"])
};
</script>

<style>
</style>
