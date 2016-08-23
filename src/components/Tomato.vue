<template>
  <tab>
    <tab-item :selected="demo1 === '进行中'" @click="demo1 = '进行中'">进行中</tab-item>
    <tab-item :selected="demo1 === '今天'" @click="demo1 = '今天'">今天</tab-item>
    <tab-item :selected="demo1 === '已完成'" @click="demo1 = '已完成'">已完成</tab-item>
  </tab>
  <div class="click">
    <circle :percent='percent' :stroke-width=6 :trail-width=6 :stroke-color='strokeColor2' trail-color="#ececec">
    <span :style="{color: strokeColor2}" style="font-size:50px">{{clickTime}} m</span>
    </circle>
  </div>
</template>

<script>
import Circle from 'vux/src/components/circle'
import Tab from 'vux/src/components/tab/tab'
import TabItem from 'vux/src/components/tab/tab-item'

export default {
  components: {
    Circle,
    Tab,
    TabItem
  },
  ready () {
    this.$_timeId = setInterval(this.update, 1000)
  },
  data () {
    return {
      percent: 100,
      strokeColor2: '#3FC7FA',
      clickTime: 30
    }
  },
  methods: {
    update: function () {
      const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A']
      this.clickTime = this.clickTime - 1
      this.percent = this.clickTime / 30 * 100
      this.strokeColor2 = colorMap[parseInt(Math.random() * 3, 10)]
      if (this.clickTime <= 0) {
        clearInterval(this.$_timeId)
        this.clickTime = 30
        this.percent = 100
      }
    }
  }
}
</script>

<style scoped>
  .click {

  }
</style>
