<style src="./index.scss" scoped lang="scss"></style>
<template>
    <div v-if="showLoading" class="loading-wrap">
        <div class="loading-full" v-if="type === 'full' ? true : false">
            <div class="content" :class="{'oneline': oneLine == 'yes' ? true : false}">
                <img src="../../assets/img/hourglass.gif" :alt="loadingStr" class="loading-icon">
                <span>{{loadingStr}}</span>
            </div>
        </div>
        <div class="loading-inject" v-if="type == 'inject' ? true : false" :class="{'oneline': oneLine == 'yes' ? true : false}">
            <img src="../../assets/img/hourglass.gif" :alt="loadingStr" class="loading-icon">
            <span>{{loadingStr}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            type: 'full',
            showLoading: false,
            loadingStr: '..正在加载..',
            oneLine: 'no'
        }
    }
}
</script>
