<template>
    <transition name="page-hide" keep-alive>
        <div>
            <swipe class="my-swipe">
                <swipe-item class="slide-item" v-for="item in adverImgList"  @click="adverFn(item.externalUrl)"><img :src="item.url" alt=""></swipe-item>
            </swipe>
            <car-item :list-data="list" /></car-item>
        </div>
    </transition>
</template>
<script>
    import carItem from '../components/item';
    import Bus from '../bus';
    import { Swipe, SwipeItem } from 'vue-swipe';
    require('vue-swipe/dist/vue-swipe.css');
    export default {
        name:'Home',
        components:{
            carItem,
            Swipe,
            SwipeItem
        },
        data(){
            return{
                name:'HOME',
                list:[],
                scrollLock:false,
                page:1,
                pageSize:10,
                adverImgList:[]
            };
        },
        methods:{
            scroll(){
               if (window.pageYOffset+window.innerHeight >= document.body.offsetHeight-280){
                   if(this.scrollLock){
                       return false;
                   }
                   this.scrollLock = true;
                   this.getCarList(()=>{
                        this.scrollLock = false;
                   });
               }
            },
            async getCarList(cb){
                   await this.$http.post('/Kkzc/carwapapi/listByCar.do',{
                        city:'广州市',
                        userLongitude:113.319068,
                        userLatitude:23.100992,
                        page:this.page,
                        pageSize:this.pageSize
                    }).then(response=>{
                       if(response.ok){
                           let res = response.body;
                           if(res.code == 200){
                                this.list = this.list.concat(res.data.listcar);
                                res.data.listcar.length > 0 ? ++this.page :  console.log('没有更多了');;
                           }else{

                           }

                       }
                        cb && cb();
                    },err=>{
                        cb && cb();
                    })
            },
            getAdver(){
                this.$http.get(`/Kkzc/carwapapi/getAdvertInfo.do?areaCode=bfd0a62b821841ab9877486cbfcaba72`)
                .then(response=>{
                    let res = response.body;
                    if(res.code == 200){
                        this.adverImgList = res.data.imgUrls;
                    }
                })
                .catch(err=>{

                });
            },
            adverFn(url){
                console.log(url);
            }
        },
        created(){
            this.getCarList();
            window.addEventListener("scroll", this.scroll, false);
            this.getAdver();
            this.adverImgList = [
                '/resources/upload/carCategoryImg/201508/b8b064f1e8b0458196c6eeca260d6d78.jpg',
                '/resources/upload/carImg1/20160726/200e48c2d4c44c88904bf5b386f59db0/1469523825736.jpg',
                '/resources/upload/carImg/adb8034b4e764cc7a1367bb0253a1352/201504/1428051598863.jpg'
            ];
        },
        beforeRouteEnter(to,from,next){
            next(vm=>{
                Bus.$emit('showNav');
            })
        },
        beforeRouteLeave(to,from,next){
            next();
        }
    }
</script>
<style lang="scss" src="../scss/swiper.scss" scoped></style>
<style lang="scss" src="../scss/page-animate.scss"></style>
