<style src="./index.scss" scoped lang="scss"></style>
<template>
    <div v-if="showLoading">
        <div class="loading-full" v-if="type === 'full' ? true : false">
            <div class="content" :class="{'oneline': oneLine == 'yes' ? true : false}">
                <img src="../../assets/img/hourglass.svg" :alt="loadingStr" class="loading-icon">
                <span>{{loadingStr}}</span>
            </div>
        </div>
        <div class="loading-inject" v-if="type == 'inject' ? true : false" :class="{'oneline': oneLine == 'yes' ? true : false}">
            <img src="../../assets/img/hourglass.svg" :alt="loadingStr" class="loading-icon">
            <span>{{loadingStr}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'kkLoading',
    props:{
        type:{
            default:'full',
            type:String
        },
        showLoading:{
            default:false,
            type:Boolean
        },
        loadingStr:{
            default:'..正在加载..',
            type:String
        },
        oneLine:{
            default:'no',
            type:String
        }
    }
}
</script>
