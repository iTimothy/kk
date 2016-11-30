<template>
    <div class="footer-nav" v-if="show">
        <router-link to="/index" class="nav-item index" active-class="nav-active"><p><i></i></p>首页</router-link>
        <router-link to="/search" class="nav-item search" active-class="nav-active"><p><i></i></p>搜索</router-link>
        <router-link to="/order" class="nav-item journey" active-class="nav-active"><p><i></i></p>行程</router-link>
        <router-link to="/my" class="nav-item my" active-class="nav-active"><p><i></i></p>我的</router-link>
    </div>
</template>
<script>
    export default{
        name:'NavTab',
        props:['show']
    }
</script>
<style lang="scss" scope src="../scss/C-nav.scss" scoped></style>
