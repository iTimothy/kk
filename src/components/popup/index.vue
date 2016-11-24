<style lang="scss" src="./index.scss" scoped></style>
<template>
    <div class="popups" :class="{'show-popups':show}">
        <div class="popup" :class="{'show':show}">
            <span class="close-popup" @click="closePopup">+</span>
            <slot name="header"></slot>
            <slot name="content"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:'popup',
        props:{
            show: {
                type: Boolean,
                default : false
            }
        },
        methods:{
            closePopup(){
                this.$emit('closePopup',333);
            }
        }
    }
</script>
