import Vue from 'vue'
import Vuex from 'vuex'

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
    count: state => ++state.count,//count值还是0，只是短暂显示为1
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

  },
  actions: {

  }
})
//export store;  这样返回的是store,要用花括号形式接收
//export default store;  默认返回store