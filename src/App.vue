<template>
  <div id="app">
    <!-- mutations -->
    <!-- <button @click="decrement({amout:2})">-</button> -->
    <button @click="decrementCount({amout:2})">-</button>
    <span>{{count}}</span>
    <!-- <button @click="increment">+</button> -->
    <button @click="incrementCount">+</button>
  </div>
</template>

<script>
import Count from "./components/Count";
//import { mapState } from "vuex"; //一定要用花括号，花括号的意思是解钩,是es6提供的新写法。
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods:mapMutations(["incrementCount","decrementCount"])
  // methods: {
  //   increment() {
  //     //调用mutations里的incrementCount;
  //     this.$store.commit("incrementCount"); //调用mutations里的东西不用.mutations，直接用commit函数即可，括号里是调用的函数名npm
  //   },
  //   decrement(n) {
  //     //第一个是调用的东西，第二个是参数
  //     this.$store.commit("decrementCount", n);
  //   }
  //}
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  //}

  //但是如果本页面有需要计算属性的地方，怎么区分呢？用范围解析符...
  //写法四:
  // computed: {
  //   ...mapState(["count", "todos"]),
  //   others() {}
  // }
  //写法三：
  //computed:mapState(["count","todos"])  //store文件里，state里的属性

  //写法二：
  //computed: mapState({
  // count: state => state.count, //这里的state.count就是第一种方法里的this.$store.state.count
  // todos: state => state.todos
  /*其实就是count:function(state){
      return state.count;
    }**/
  //})

  //写法一:
  // computed: {
  //   //因为store里面的属性随时会变化，所以用计算属性来获取
  //   count() {
  //     //随意函数名
  //     return this.$store.state.count; //相当于main.js中挂载的store，在vue实例中写作$store，这是规范
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style>
</style>
