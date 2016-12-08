import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import CarDetail from '../views/CarDetail'
import Order from '../views/Order'
import Search from '../views/Search'
import My from '../views/My'
import Nofound from '../views/NoFound'


Vue.use(VueRouter);

const routes = [
    {path:'/',redirect:'/index'},
    {path:'/index',component:Home},
    {path:'/activities/kkzc/index.html',redirect:'/index'},
    {path:'/car/:carId',component:CarDetail},
    {path:'/search',component:Search},
    {path:'/my',component:My},
    {path:'/order',component:Order},
    {path:'*',component:Nofound}
];

export default new VueRouter({
    mode:'history',
    routes
});
