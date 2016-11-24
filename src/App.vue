<template>
  <div id="app">
    <router-view></router-view>
    <nav-tab></nav-tab>
  </div>
</template>
<script>
import NavTab from './components/nav'
export default {
  name: 'app',
  components:{
    NavTab
  }
}
</script>

<style lang="scss" src="src/scss/app.scss" scope></style>
