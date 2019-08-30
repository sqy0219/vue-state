<template>
  <div id="app">
    <p>{{completedTodos}}</p>
    <p>{{count}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(3)}}</p>
    <br />华丽的分割线
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
//import { mapState } from "vuex"; //一定要用花括号，花括号的意思是解钩,是es6提供的新写法。
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
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
