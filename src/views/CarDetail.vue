<style lang="scss" src="../scss/car-detail.scss" scoped></style>
<style lang="scss" src="../scss/page-animate.scss"></style>
<style lang="scss" src="../scss/swiper.scss" scoped></style>
<style lang="scss" src="vue-swipe/dist/vue-swipe.css"></style>
<template>
    <transition name="page-show" keep-alive>
        <div id="carDetail">
            <kk-loading :showLoading="true" type="full" oneLine="no"/>
            <back :showBackNav="true" :backNavTitle="backNavTitle" :backNavFix="true"/>
            <!-- <kk-alert :show="show" @closeAlert="closeAlert" :shadeClose="true">
                <p slot="content">
                    content
                </p>
                <div slot="footer">
                    <button type="button" name="button" class="btn" @click="closeAlert">close</button>
                </div>
            </kk-alert>
            <button type="button" name="button" @click="showAlert">button</button> -->
            <swipe class="my-swipe">
                <swipe-item class="slide-item" v-for="item in carImgList"><img :src="item.imgPath"></swipe-item>
            </swipe>
        </div>
    </transition>
</template>
<script>

    import Bus from '../bus.js';
    import kkAlert from '../components/kkAlert/index';
    import Back from '../components/back';
    import kkLoading from '../components/kkLoading/index';
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        name:'carDetail',
        components:{
            kkAlert,
            Swipe,
            SwipeItem,
            Back,
            kkLoading
        },
        data(){
            return{
                show:false,
                carImgList:[],
                backNavTitle:''
            };
        },
        methods:{
            showAlert(){
                this.show = true;
            },
            closeAlert(){
                this.show = false;
            },
            getCarImg(){
                this.$http.post('/Kkzc/carwapapi/carDetail.do',{
                    carId:this.$route.params.carId
                })
                .then(response=>{
                    let res = response.body;
                    if(res.code == 200){
                        this.carImgList = res.data.car.mapimages;
                        this.backNavTitle = res.data.car.carName;
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        created(){
            this.getCarImg();
            Bus.$emit('hideNav',1);
        }
    }
</script>
