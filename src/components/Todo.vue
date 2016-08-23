<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        todos: []
      }
    }
  }
</script>

<style scoped>
  .finished {
    text-decoration: line-through;
    color: grey;
  }
</style>
