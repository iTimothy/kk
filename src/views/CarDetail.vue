<template>
    <div>
        <p>carDetail</p>
        <popup :show="show" @closePopup="hidePopup">
            <p slot="header">
                header
            </p>
        </popup>
    </div>
</template>
<script>

    import popup from '../components/popup/index';

    export default {
        name:'carDetail',
        components:{
            popup
        },
        data(){
            return{
                show:true
            };
        },
        methods:{
            showPopup(){
                this.show = true;
            },
            hidePopup(id){
                this.show = false;
                console.log(id);
            }
        }
    }
</script>
