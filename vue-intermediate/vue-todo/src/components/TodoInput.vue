<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-sharp fa-solid fa-plus fa-lg addBtn"></i>
    </span>

    <LayerModal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          경고!
          <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
        </h3>
        <div slot="body">
          아무것도 입력하지 않으셨습니다.
        </div>
      </LayerModal>
  </div>
</template>

<script>
import LayerModal from './common/LayerModal.vue'

export default {
  data () {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        // // 체크된 값과 체 됬는지 안됬는지!
        // // JSON.stringify() : 자바스크립트 객체를 스트링으로 변경해주는 api
        // let obj = {completed: false,item:this.newTodoItem};
        // // 저장하는 로직
        // localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); // => localstorage value가 문자열(객체) 그대로 들어감
        // // localStorage.setItem(this.newTodoItem, obj); => localstorage value가 [object Object]로 들어감
        // this.$emit('이벤트 이름', 인자1, 인자2, ....)
        // this.$emit('addTodoItem', this.newTodoItem)
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
        // 같은 인스턴스를 가지기 때문에 this를 통해 함수 호출이 가능함!
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput () {
      // 초기화 로직
      this.newTodoItem = '';
    }
  },
  components: {
    LayerModal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  width:100%;
  border-style:none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: #fff;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
  cursor: pointer;
}
</style>