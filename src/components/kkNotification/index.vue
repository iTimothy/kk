<style lang="scss" src="./index.scss"></style>
<template>
    <transition name="notification-ani">
        <div class="popup-wrap" v-if="show">
            <transition name="fade" @enter="enter" appear>
                <div class="popup-shade" @click="shadeCloseNotification"></div>
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
    </transition>
</template>
<script>
    export default{
        name:'kkNotification',
        props:{
            notifyType:{
                type: String,
                default: 'alert'
            },
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
            shadeCloseNotification(){
                if(this.shadeClose){
                    this.$emit('closeNotification');
                    // this.$store.commit('CLOSE_KKALERT');
                }
            },
            enter(){
                // 定时关闭弹层
                if(this.timeout != 0){
                    setTimeout(()=>{
                        this.closeNotification();
                        // this.$store.commit('CLOSE_KKALERT');
                    }, this.timeout);
                }
            }
        }
    }
</script>
