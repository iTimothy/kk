<template>
    <transition name="page-hide" keep-alive>
        <div>
            <swipe class="my-swipe">
                <swipe-item class="slide-item" v-for="item in adverImgList"  @click="adverFn(item.externalUrl)"><img :src="item.url" alt=""></swipe-item>
            </swipe>
            <car-item :list-data="list"/></car-item>
        </div>
    </transition>
</template>
<script>
    import carItem from '../components/item';
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        name:'Home',
        components:{
            carItem,
            Swipe,
            SwipeItem,
        },
        data(){
            return{
                name:'HOME',
                list:[],
                scrollLock:false,
                page:1,
                pageSize:10,
                advertImgList:[]
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
            getAdvert(){
                this.$http.get(`/Kkzc/carwapapi/getAdvertInfo.do?areaCode=bfd0a62b821841ab9877486cbfcaba72`)
                .then(response=>{
                    return response.body;
                })
                .then(res=>{
                    if(res.code == 200){
                        this.advertImgList = res.data.imgUrls;
                    }
                })
                .catch(err=>{
                    console.log(err);
                });
            },
            advertFn(url){
                console.log(url);
            }
        },
        mounted(){
            this.getCarList(()=>{
            });
            this.getAdvert();
        },
        created(){
            window.addEventListener("scroll", this.scroll, false);
            this.$store.dispatch('showNav');
        },
        beforeRouteEnter(to,from,next){
            next((vm)=>{
                if(from.name === 'carDetail'){
                    vm.list = JSON.parse(window.sessionStorage.getItem('list'))
                    vm.page = window.sessionStorage.getItem('page')
                    setTimeout(()=>{
                        document.body.scrollTop = window.sessionStorage.getItem('scrollY')
                        window.scrollTop = window.sessionStorage.getItem('scrollY')
                    },0)
                }
            })
        },
        beforeRouteLeave(to,from,next){
            if(to.name === 'carDetail'){
                window.sessionStorage.setItem('list',JSON.stringify(this.list))
                window.sessionStorage.setItem('page',this.page)
                window.sessionStorage.setItem('scrollY',window.scrollY || window.pageYOffset)
                window.removeEventListener('scroll',this.scroll,false)
            }
            next();
        }
    }
</script>
<style lang="scss" src="../scss/swiper.scss" scoped></style>
<style lang="scss" src="../scss/page-animate.scss"></style>
<style lang="scss" src="vue-swipe/dist/vue-swipe.css"></style>
