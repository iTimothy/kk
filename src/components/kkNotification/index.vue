<style lang="scss" src="./index.scss"></style>
<template>
    <transition name="notification-ani">
        <div class="popup-wrap" v-if="show">
            <transition name="fade" appear>
                <div class="popup-shade" @click="submitAction('shade')"></div>
            </transition>
            <div class="popup-contain">
                <transition name="scale" appear>
                    <div class="popup-dialog">
                        <div class="popup-content">
                            <div class="header-default" v-if="title" :class="{'header-no-empty': title ? true : false}">
                                <!-- <slot name="header">{title}</slot> -->
                                {{title}}
                            </div>
                            <div class="content-default">
                                {{msg}}
                            </div>
                            <div class="footer-default" :class="{ 'btn-line' : okButtonShow && cancelButtonShow ? true : false}">
                                <!-- <slot name="footer"></slot> -->
                                <button type="button" name="okbtn" class="btn ok-btn" :style="okButtonShow ? 'display:block' : 'display:none'" @click="submitAction('ok')">{{okButtonText}}</button>
                                <button type="button" name="cancelbtn" class="btn cancel-btn"  :style="cancelButtonShow ? 'display:block' : 'display:none'" @click="submitAction('cancel')">{{cancelButtonText}}</button>
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
        name:'Notify',
        data(){
            return {
                title: '',
                msg: '',
                type: '',
                shadeClose: false,
                okButtonText: 'ok',
                cancelButtonText: 'cancel',
                okButtonShow: false,
                cancelButtonShow: false,
                callback: null,
                show: false,
                okFn: null,
                cancelFn: null,
                duration: 0
            }
        },
        methods:{
            submitAction(action){
                if(action === 'ok'){
                    this.okFn ? this.okFn() : ''
                    this.defaultCallBack()
                }
                if(action === 'cancel'){
                    this.cancelFn ? this.cancelFn() : ''
                    this.defaultCallBack()
                }
                if(this.shadeClose === true && action === 'shade'){
                    this.defaultCallBack()
                }
            }
        }
    }
</script>
