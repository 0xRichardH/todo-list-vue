import Vue from 'vue'
import App from './App'
import Todo from './components/TodoList'
import Tomato from './components/Tomato'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Todo
  },
  'tomato': {
    component: Tomato
  }
})

router.start(App, '#app')

