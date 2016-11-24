<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide-item"><img src="http://m.kuaikuaizuche.com/resources/upload/carCategoryImg/201508/cd1b914a447d4d389474533c84b58ba1.jpg" alt=""></swipe-item>
            <swipe-item class="slide-item"><img src="http://m.kuaikuaizuche.com/resources/upload/carCategoryImg/201508/a436d57be1834c87aa8db162ccd7bbc2.jpg" alt=""></swipe-item>
            <swipe-item class="slide-item"><img src="http://m.kuaikuaizuche.com/resources/upload/carCategoryImg/201508/0db3e273971540318c31ed5ef91640df.jpg" alt=""></swipe-item>
        </swipe>
        <car-item :list-data="list" /></car-item>
    </div>
</template>
<script>
    import carItem from '../components/item';
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
                pageSize:10
            };
        },
        methods:{
            scroll(){
               if (window.pageYOffset+window.innerHeight >= document.body.offsetHeight-250){
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
            }
        },
        created(){
             this.getCarList();
            window.addEventListener("scroll", this.scroll, false);

        },
        ready(){

        }
    }
</script>
<style lang="scss" src="../scss/home.scss" scoped></style>
