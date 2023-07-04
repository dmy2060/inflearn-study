<template>
  <div>
      <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.todoItems" :key="todoItem.item" class="shadow">
       <i class="fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),
    // mapMutatios는 호출하는데서 인자를 넘기면 암묵적으로 인자를 넘김 
    // ex) removeOneItem(todoItem, index)
    // 원래 객체를 하나만 보내기 때문에 보내는 곳에도 객체를 만들어줌
    // removeTodo(todoItem, index) => removeTodo({todoItem, index})
    // removeTodo(todoItem, index) {
    //   // console.log(todoItem, index)
    //   this.$store.commit('removeOneItem', {todoItem,index})
    // }, 
    // toggleComplete(todoItem, index) {
    //   // this.$emit('toggleItem', todoItem, index)
    //   this.$store.commit('toggleOneItem', {todoItem,index});
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems
    // }
    // ...mapGetters(['storedTodoItems']) // 배열 리터럴
    ...mapGetters({todoItems:'storedTodoItems'}) 
    // 객체리터럴 
    // getters에서 선언된 이름과 다른 이름을 사용하고 싶을 땐 객체리터럴로도 사용가능
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>