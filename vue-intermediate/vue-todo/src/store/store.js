import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'


Vue.use(Vuex);
// use vue 플러그인
// vue를 사용할 때 전역으로 사용할때
// use(Vuex)면 this.$store

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
})

