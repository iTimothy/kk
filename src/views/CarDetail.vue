<style lang="scss" src="../scss/car-detail.scss" scoped></style>
<style lang="scss" src="../scss/page-animate.scss"></style>
<style lang="scss" src="../scss/swiper.scss" scoped></style>
<style lang="scss" src="vue-swipe/dist/vue-swipe.css"></style>
<template>
    <transition name="page-show" keep-alive>
        <div id="carDetail">
            <kk-loading :showLoading="true" type="full" oneLine="no"/>
            <back :showBackNav="true" :backNavTitle="backNavTitle" :backNavFix="true"/>
            <kk-notification :show="show" @closeNotification="closeNotification" :shadeClose="true" notifyType="alert">
                <p slot="content">
                    content
                </p>
                <div slot="footer">
                    <button type="button" name="button" class="btn" @click="closeNotification">close</button>
                </div>
            </kk-notification>
            <button type="button" name="button" @click="showNotification">button</button>
            <swipe class="my-swipe">
                <swipe-item class="slide-item" v-for="item in carImgList"><img :src="item.imgPath"></swipe-item>
            </swipe>
        </div>
    </transition>
</template>
<script>

    // import Bus from '../bus.js';
    import kkNotification from '../components/kkNotification/index';
    import Back from '../components/back';
    import kkLoading from '../components/kkLoading/index';
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        name:'carDetail',
        components:{
            kkNotification,
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
            showNotification(){
                this.show = true;
                // this.$store.commit('OPEN_KKALERT');
                // this.show = this.$store.getters.getKkAlertState;
                // console.log(this.$store.state.kkAlert.kkAlertState);
            },
            closeNotification(){
                this.show = false;
                // this.$store.commit('CLOSE_KKALERT')
                // this.show = this.$store.getters.getKkAlertState
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

        },
        mounted(){
            this.$store.dispatch('hideNav');
            console.log(this.$store.getters.getNavState);
        }
    }
</script>
