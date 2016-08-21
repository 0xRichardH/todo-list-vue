<template>
  <tabbar>
    <tabbar-item link="/">
      <span slot="label">Todo</span>
    </tabbar-item>
    <tabbar-item show-dot link="tomato">
      <span slot="label">番茄钟</span>
    </tabbar-item>
    <tabbar-item selected>
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Tabbar from 'vux/src/components/tabbar/tabbar'
  import TabbarItem from 'vux/src/components/tabbar/tabbar-item'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>


