<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// 데이터가 여러개 올 수도 있는데 여러군데에서 참조하면 안되기 때문에 객체 리터럴이 아닌 function을 사용
// new Vue({
//   data: {
//   }
// })

// components 랑 아래와 같음
// var AppHeader = {
//   template: `<header><h1>Header</h1></header>`
// }
import AppHeader from './components/AppHeader.vue';

export default {
  data: function () {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header':AppHeader
  },
  methods: {
    renewStr: function () {
      this.str = 'hi'
    }
  },
}
</script>

<style>

</style>