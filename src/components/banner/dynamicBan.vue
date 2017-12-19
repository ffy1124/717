<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(v, k) in dynamicData" :key="k">
                {{v.cont}}
            </div>  
        </div> 
    </div>
</template>

<script>
import Swiper from '../../assets/js/swiper.min.js';
setTimeout(() => { 
    new Swiper('.swiper-container',{
        autoplay: 1000,
        direction: 'vertical'
    });
});
export default {
    name: 'dynamicBan',
    data(){
        return{
            dynamicData:[
                {
                    'cont': '绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜'
                },
                {
                    'cont': '绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜'
                },
                {
                    'cont': '绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜'
                },
                {
                    'cont': '绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜'
                }
            ]
        };
    }
}
</script>

<style scoped>
.swiper-container,.swiper-wrapper,.swiper-slide{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    line-height: .5rem;
}
</style>
