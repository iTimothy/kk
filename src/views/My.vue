<style lang="scss" src="../scss/my.scss" scoped></style>
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
        name:'My',
        components:{Back},
        data(){
            return {
                title:'我的'
            };
        }
    }
</script>
