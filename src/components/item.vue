<template>
    <ul>
        <li v-for="item in listData" @click="goDetail(item.carId)">
           <p class="pic-wrap">
               <img :src="item.imagePic ? item.imagePic : imgNull" :alt="item.carName" @error="imgError($event)">
           </p>
           <div class="detail">
               <p class="car-name"><strong>{{item.carName}}</strong><i>{{item.money}}/天</i></p>
               <p class="car-label"><span class="is_res" v-if="~~item.isResponse">100%响应</span><span class="is_conadd" v-if="~~item.convenientAddress">便捷取车</span><span class="is_car" v-if="~~item.isCarDoor">送车上门</span><span class="is_aut" v-if="~~item.isAutoReceived">自动接单</span><span class="i_isCarPro" v-if="~~item.isCarPromotion">满车日促销</span></p>
               <p class="car-adress">
                   <strong>{{item.address}}</strong>
                   <i>{{item.distanceNum}}</i>
               </p>
           </div>
        </li>
    </ul>
</template>
<script>
    import imgNull from '../assets/img/empty.jpg'
    export default {
        name:'carItem',
        props:['listData'],
        data(){
            return {
                imgNull:imgNull
            };
        },
        methods:{
            goDetail(id){
               this.$router.push({path:`/car/`+id});
           },
           imgError(e){
              e.target.src = this.imgNull;
           }
        }
    };
</script>
<style lang="scss" scope src="../scss/C-item.scss" scoped></style>
