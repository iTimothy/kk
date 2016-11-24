import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import CarDetail from '../views/CarDetail'
import Order from '../views/Order'
import Search from '../views/Search'
import My from '../views/My'


Vue.use(VueRouter);

const routes = [
    {path:'/car/:carId',component:CarDetail},  
    {path:'/search',component:Search},  
    {path:'/my',component:My},  
    {path:'/order',component:Order},  
    {path:'/',component:Home}
];

export default new VueRouter({
    mode:'history',
    routes
});