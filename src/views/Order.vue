<style lang="scss" src="../scss/page-animate.scss"></style>
<template>
    <transition name="page-show">
        <div>
            <back :showBackNav="true" :backNavTitle="title"/>
        </div>
    </transition>
</template>
<script>
    import Back from '../components/back';
    export default {
        name:'Order',
        components:{Back},
        data(){
            return {
                title:'order'
            };
        }
    }
</script>
