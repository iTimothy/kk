<template>
    <div>
        <p>carDetail</p>
        <popup :show.sync="show">
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
            hidePopup(){
                this.show = false;
            },
            showPopup(){
                this.show = true;
            }
        }
    }
</script>
