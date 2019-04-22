import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

//load Vuex
Vue.use(Vuex);
//CREATE STORE
export default new Vuex.Store({
  modules: {
    todos
  }
});
