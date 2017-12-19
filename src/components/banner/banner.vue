<template>
    <div id="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(v, k) in banData" :key="k">
                <img :src="v.src" alt="img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    name: 'banner',
    data(){
        return{
            banData:[
                {
                    'src':'src/assets/img/home1.png'
                },
                {
                    'src':'src/assets/img/home2.jpg'
                },
                {
                    'src':'src/assets/img/home3.png'
                },
                {
                    'src':'src/assets/img/home4.png'
                },
                {
                    'src':'src/assets/img/home5.png'
                }
            ]
        };
    },
    components: {
        SwipeItem,
        Swipe
    }
}
</script>

<style scoped>
#banner{
    width: 100%;
    height: 100%;
}
#banner img{
    width: 100%;
    height: 100%;
}
</style>
