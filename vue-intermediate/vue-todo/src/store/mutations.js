const addOneItem = (state, todoItem) => {
    // 체크된 값과 체 됬는지 안됬는지!
    // JSON.stringify() : 자바스크립트 객체를 스트링으로 변경해주는 api
    let obj = {completed: false,item:todoItem};
    // 저장하는 로직
    localStorage.setItem(todoItem, JSON.stringify(obj)); // => localstorage value가 문자열(객체) 그대로 들어감
    state.todoItems.push(obj);
    // localStorage.setItem(todoItem, obj); => localstorage value가 [object Object]로 들어감
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item)
    // console.log(state, index)            
    state.todoItems.splice(payload.index, 1)
}
const toggleOneItem = (state, payload) => {
    // // console.log(todoItem, index)
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    // // 로컬 스토리지의 데이터 갱신하는 부분
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    // // console.log(JSON.stringify(todoItem))     
}
const clearAllItems = (state) => {
    console.log(state);
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem,removeOneItem,toggleOneItem,clearAllItems}