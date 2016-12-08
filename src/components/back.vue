<template>
    <div>
        <div class="back" v-if="showBackNav" :class="{'back-fix':backNavFix}">
            <i @click="back"></i>
            <b v-if="backNavTitle">{{backNavTitle}}</b>
        </div>
        <div class="back-placeholder" v-if="backNavFix"></div>
    </div>
</template>
<script>
export default {
    name:'backNav',
    props:['backNavTitle','showBackNav','backNavFix'],
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" src="../scss/C-back.scss" scoped></style>
