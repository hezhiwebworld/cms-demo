<template>
  <div id="app">
      <leftNav></leftNav>
     <Pos></Pos>
     
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
import Pos from './components/page/pos'

export default {
  name: 'app',
  components: {
    leftNav,
    Pos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
i{
  color: black;
}
</style>
