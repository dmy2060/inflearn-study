import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'


Vue.use(Vuex);
// use vue 플러그인
// vue를 사용할 때 전역으로 사용할때
// use(Vuex)면 this.$store

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel') {
                    // this.todoItems.push(localStorage.key(i));
                    // console.log(localStorage.key(i))
                    // string으로 가져온 value 값을 다시 객체로 변경시켜줌
                    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                } 
            }
        }
        return arr;
    }
    // fetch: function () {
        
    // }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters: getters,
    mutations: mutations
})

