<style lang="scss" scoped>
    .btn{
        display: block;
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        border:0;
    }
</style>
<template>
    <div>
        <p>carDetail</p>
        <popup :show="show" @closePopup="hidePopup" :shadeClose="false">
            <p slot="content">
                content
            </p>
            <div slot="footer">
                <button type="button" name="button" class="btn" @click="closePopup">close</button>
            </div>
        </popup>
        <button type="button" name="button" @click="showPopup">button</button>
    </div>
</template>
<script>

    import popup from '../components/popup/index';

    export default {
        name:'carDetail',
        components:{
            popup
        },
        data(){
            return{
                show:false
            };
        },
        methods:{
            showPopup(){
                this.show = true;
            },
            hidePopup(){
                this.show = false;
            },
            closePopup(){
                this.show = false;
            }
        }
    }
</script>
