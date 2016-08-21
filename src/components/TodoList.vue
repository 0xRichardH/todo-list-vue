<template>
  <tab>
    <tab-item :selected="demo1 === '全部待办'" @click="demo1 = '全部待办'">全部待办</tab-item>
    <tab-item :selected="demo1 === '未完成'" @click="demo1 = '未完成'">未完成</tab-item>
    <tab-item :selected="demo1 === '已完成'" @click="demo1 = '已完成'">已完成</tab-item>
  </tab>
  <group>
    <x-input type="text" placeholder="你想干什么？" :required=false :value.sync="todo" @keyup.enter="createTodo" ></x-input>
    <x-checklist  :options="todoList"  :value.sync="selectedItems"  :required=false @change="change">
    </x-checklist>
    <!--
    <todo></todo>
    -->
  </group>
</template>

<script>
import Todo from './todo'
import CheckList from 'vux/src/components/checklist'
import Tab from 'vux/src/components/tab/tab'
import TabItem from 'vux/src/components/tab/tab-item'
import XInput from 'vux/src/components/x-input'
import Group from 'vux/src/components/group'

export default {
  components: {
    'x-checklist': CheckList,
    Todo,
    Tab,
    TabItem,
    XInput,
    Group
  },
  data () {
    return {
      todo: '',
      todoList: [
        '任务一',
        'hello world'
      ],
      selectItems: []
    }
  },
  methods: {
    change (val) {
      console.log(val)
    },
    createTodo () {
      if (this.todo.trim().length > 0) {
        this.todoList.push(this.todo)
        this.todo = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
