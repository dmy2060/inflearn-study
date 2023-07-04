<template>
  <header>
    <h1>TODO it!</h1>
  </header>
</template>

<script>
export default {

}
</script>


<style scoped>
/* 원래 vue style은 상위에서 하위까지 다 상속이됨 
   scoped 사용하면 상위 style은 무시되고 하위까지 상속되지 않음 */
h1 {
    color: #2f3b52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>