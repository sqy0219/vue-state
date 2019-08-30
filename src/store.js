import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios';

Vue.use(Vuex)

//const store=new Vuex.store({})或者export store=new Vuex.store({})，只是export一个东西
export default new Vuex.Store({   //不用花括号，是因为这里有default
  state: {
    //属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: true },
    ]
  },
  getters: {
    count: state => state.count,//count值还是0，只是短暂显示为1
    //上面一句相当于
    //getCount(state){return ++state.count}
    completedTodos: state => state.todos.filter(todo => todo.completed),  //todo代表三个对象
    //上面相当于
    //completedTodos(state) {   //为真的对象
    //  return state.todos.filter(function (todo) {
    //    return todo.completed;
    //  })
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
    //上面相当于
    //getTodosById(state){
    //  (function(id){
    //    return state.todos.find(function (todo){
    //        return todo.id==id;    
    //    })(id)
    //})
    //}
  },
  mutations: {
    incrementCount: state => state.count++, //让count值++
    decrementCount: (state, n) => state.count -= n.amout,
    setTodos: (state, todos) => state.todos = todos //state.todos代表上面的todos,等号右面的todos是传过来的response.data
  },
  actions: {
    // incrementCountAsync: context => {
    //   setTimeout(() => {
    //     context.commit("incrementCount")
    //     //context等同于this.$store

    //   }, 2000)
    // },//async是异步的意思
    //由于context下有commit,下面语句进行解钩优化
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        commit("incrementCount")
      }, 2000)
    },//async是异步的意思

    /**解钩案例
     * const object={
     * name:"米斯特吴",
     * age:32
     * }
     * 下面这两句话是对上面对象的解钩
     * const name=object.name;
     * const age=object.age;
     * 下面这句话是对上面对象的解钩
     * const {name,age}=object
     */
    decrementCountAsync: (context, n) => {
      setTimeout(() => {
        context.commit("decrementCount", n)
        //context等同于this.$store
      }, 1000)
    },
    //fetchDataAsync:context...
    async fetchDataAsync(context) {  //es9的写法
      //await一定在一个异步的函数中才能使用，有async修饰的，await修饰后面请求的东西，可以解决异步混乱的情况
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos", response.data);//提给mutations一个参数，接下来在mutations里实现方法
    }
  }
})
//export store;  这样返回的是store,要用花括号形式接收
//export default store;  默认返回store

//安装axios  命令：vue add axios 回车