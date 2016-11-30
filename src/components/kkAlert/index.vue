<style lang="scss" src="./index.scss" scoped></style>
<template>
    <div class="popup-wrap" v-if="show">
        <transition name="fade" @enter="enter" appear>
            <div class="popup-shade" @click="shadeCloseAlert"></div>
        </transition>
        <div class="popup-contain">
            <transition name="scale" appear>
                <div class="popup-dialog">
                    <div class="popup-content">
                        <slot name="header"></slot>
                        <div class="content-default">
                            <slot name="content" class="content"></slot>
                        </div>
                        <div class="footer-default">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    export default{
        name:'kkAlert',
        props:{
            show: {
                type: Boolean,
                default: false
            },
            shadeClose:{
                type:Boolean,
                default: false,
            },
            timeout:{
                type:Number,
                default:0
            }
        },
        methods:{
            shadeCloseAlert(){
                if(this.shadeClose){
                    this.$emit('closeAlert');
                }
            },
            enter(){
                if(this.timeout != 0){
                    setTimeout(function () {
                        this.closeAlert();
                    }.bind(this), this.timeout);
                }
            }
        }
    }
</script>
