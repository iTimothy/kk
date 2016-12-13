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
    {name:'redirect',path:'/',redirect:'/index'},
    {name:'home',path:'/index',component:Home},
    {name:'index',path:'/activities/kkzc/index.html',redirect:'/index'},
    {name:'carDetail',path:'/car/:carId',component:CarDetail},
    {name:'search',path:'/search',component:Search},
    {name:'my',path:'/my',component:My},
    {name:'order',path:'/order',component:Order},
    {name:'noFound',path:'*',component:Nofound}
];

export default new VueRouter({
    mode:'history',
    routes
});
