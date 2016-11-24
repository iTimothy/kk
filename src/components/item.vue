<template>
    <ul>
        <li v-for="item in listData" :data-id="item.carId" @click="goDetail">
           <p class="pic-wrap">
               <img :src="item.imagePic" :alt="item.carName">
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
    export default {
        name:'carItem',
        props:['listData'],
        methods:{
            goDetail(e){
                
               let carId = e.currentTarget.dataset.id;
               this.$router.push({path:`/car/`+carId});
            }
        }
    };
</script>
<style lang="scss" scope src="../scss/C-item.scss" scoped></style>
