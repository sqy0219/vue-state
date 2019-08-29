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
      { id: 2, title: "todo item 2", completed: false },
      { id: 3, title: "todo item 3", completed: false },
    ]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
//export store;  这样返回的是store,要用花括号形式接收
//export default store;  默认返回store