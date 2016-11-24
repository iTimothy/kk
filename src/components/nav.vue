<template>
    <div class="footer-nav">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/search" class="nav-item">搜索</router-link>
        <router-link to="/order" class="nav-item">行程</router-link>
        <router-link to="/my" class="nav-item">我的</router-link>
    </div>
</template>
<script>
    export default{
        name:'NavTab'
    }
</script>
<style lang="scss" scope src="../scss/C-nav.scss" scoped></style>