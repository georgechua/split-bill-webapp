import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Person from '@/components/Person'
import Input from '@/components/Input'
import GenReport from '@/components/GenReport'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Person',
      component: Person
    },
    {
      path: '/',
      name: 'Input',
      component: Input
    },
    {
      path: '/',
      name: 'Report',
      component: GenReport
    }
  ]
})
