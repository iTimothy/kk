<template>
  <div id="app">
    <router-view></router-view>
    <nav-tab :show="show"></nav-tab>
  </div>
</template>
<script>
import NavTab from './components/nav'
import Bus from './bus.js'
export default {
    name: 'app',
    data(){
        return{
            show:true
        };
    },
    components:{
        NavTab
    },
    methods:{
        hideNav(){
            this.show = false;
        },
        showNav(){
            this.show = true;
        }
    },
    created(){
        Bus.$on('hideNav',this.hideNav);
        Bus.$on('showNav',this.showNav);
    }
}
</script>

<style lang="scss" src="src/scss/app.scss" scope></style>
