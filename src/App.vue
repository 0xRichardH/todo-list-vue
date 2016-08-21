<template>
  <div id="app">
    <x-header></x-header>
    <router-view></router-view>
    <x-footer></x-footer>
  </div>
</template>

<script>
  import Header from './components/header'
  import Footer from './components/footer'

  export default {
    components: {
      'x-header': Header,
      'x-footer': Footer
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset';

body {
  background-color: #fbf9fe;
}
</style>

