<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


// let my_cmp = {
//   template:'<div>my component</div>'
// }
// new Vue({
//   el:'',
//   components: {
//     // '컴포넌트 이름' : '컴포넌트 내용'
//     'my-cmp' : my_cmp
//   }
// })

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // methods: {
    // addOneItem(todoItem) {
    //   // 체크된 값과 체 됬는지 안됬는지!
    //     // JSON.stringify() : 자바스크립트 객체를 스트링으로 변경해주는 api
    //     let obj = {completed: false,item:todoItem};
    //     // 저장하는 로직
    //     localStorage.setItem(todoItem, JSON.stringify(obj)); // => localstorage value가 문자열(객체) 그대로 들어감
    //     this.todoItems.push(obj);
    //     // localStorage.setItem(todoItem, obj); => localstorage value가 [object Object]로 들어감
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1)
    // },
    // toggleOneItem(todoItem, index) {
    //   // console.log(todoItem, index)
    //   this.todoItems[index].completed = !this.todoItems[index].completed
    //   // 로컬 스토리지의 데이터 갱신하는 부분
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    //   // console.log(JSON.stringify(todoItem))        
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  // },
  
  // components: {
  //   // 컴포넌트 태그명 : 컴포넌트 내용
  //   'TodoHeader' : TodoHeader,
  //   'TodoInput' : TodoInput,
  //   'TodoList' : TodoList,
  //   'TodoFooter' : TodoFooter,
  // }

  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
/* * {
  font-family: 'Ubuntu', sans-serif;
} */
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style:groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
}
</style>