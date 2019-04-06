<template>
  <div class="title">
    <h1>{{ msg }}</h1>
    <Person />
  </div>

   
  
</template>

<script>

import Person from './Person'

export default {
  name: 'title',
  data () {
    return {
      msg: 'Get Started.'
    }
  },

  name: 'person',
  components: {
    Person
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope="title">
 .title{
   margin: 50px;
   text-align: center;
 }
</style>
