<template>
  <div id="app">
    <router-view></router-view>
    <nav-tab :show="this.$store.state.nav.navState"></nav-tab>
  </div>
</template>
<script>
import NavTab from './components/nav'
// import Bus from './bus.js'
export default {
    name: 'app',
    data(){
        return{
            // show:this.$store.state.nav.navState
        };
    },
    components:{
        NavTab
    },
    methods:{
        // hideNav(){
        //     this.show = false;
        // },
        // showNav(){
        //     this.show = true;
        // }
    },
    created(){
        // Bus.$on('hideNav',this.hideNav);
        // Bus.$on('showNav',this.showNav);
        this.$store.dispatch('showNav');
        // console.log(this.$store.state.nav.navState)
    }
}
</script>

<style lang="scss" src="src/scss/app.scss" scope></style>
