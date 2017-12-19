<template>
  <div class="wrap">
        <header><h3>购物车<span>编辑</span></h3></header>
        <section>
            <div class="empty" v-if="$store.state.isShow">
                <div class="shopp"></div>
                <ul>
                    <li>购物车为空</li>
                    <li @click="goShopping"><a><span>去逛逛</span></a></li>
                </ul>
            </div>    
            <div class="goodlist">
                <shopcarItem v-for="(item, index) in $store.state.getshopcarList" :key="index" :item="item" :index="index"></shopcarItem>
            </div>
            <h3 class="hot">热门推荐</h3>
            <div class="goods">
                <goodItem v-for="(v, k) in goodslist" :key="k" :val="v"></goodItem>
            </div>
        </section>
        <footer>
            <div class="all">
                <span class="item-check" @click="checkedAll">
                    <b v-if="$store.state.checkAll"></b>
                </span>
                全选
            </div>
            <p>合计：<label>￥{{$store.state.sum.toFixed(2)}}</label><button>结算</button></p>
        </footer>
  </div>
</template>
<script>
import shopcarItem from '../../components/shopcarItem/shopCarItem';
import goodItem from '../../components/goodlist/goodItem';
export default {
    name: 'shopCar',
    data(){
        return{
            goodslist: []
        }
    },
    created(){
        this.getGoods();
    },
    components:{
        shopcarItem,
        goodItem
    },
    methods:{
        checkedAll(){
            this.$store.commit('updated_checkAll');
            this.$store.commit('updated_sum');
        },
        getGoods() {
            this.$http.post("/mall/index/getGoodsChannel", {
                channel_id: 2
            }).then(res => {
                this.goodslist = this.goodslist.concat(res.data.data.data);
            });
        },
        goShopping(){
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #efefef;
}
.wrap h3{
    font-size: .35rem;
    line-height: 1rem;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}
.wrap h3 span{
    font-size: .3rem;
    position: absolute;
    top: 0;
    right: .3rem;
}
header{
    height: 1rem;
}
section{
    flex: 1;
    overflow-y: scroll;
}
.empty{
    width: 100%;
    height: 4.8rem;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #ffffff;
}
.shopp {
    width: 1.44rem;
    height: 1.44rem;
    background: url(/src/assets/img/goshop.png) no-repeat;
    background-size: 1.44rem;
    position: absolute;
    left: 40%;
    top: 21%;
}
.empty ul {
    padding-top: 2.6rem;
    text-align: center;
}
.empty ul li {
    line-height: .5rem;
    color: #666666;
}
.empty ul li span {
    color: #fc4141;
    width: 3rem;
    display: block;
    margin-left: 2.2rem;
    margin-top: .16rem;
    padding: .1rem .3rem;
    border: 1px solid #fc4141;
    border-radius: 4px;
    font-size: .34rem;
}
.hot{
    line-height: .5rem;
    text-align: center;
    margin-top: .1rem;
    border: none;
}
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 0.05rem;
}
footer{
    height: 1rem;
    line-height: 1rem;
    position: relative;
    background: #fff;
}
footer p{
    padding-left: 1rem;
    text-align: right;
}
footer p label{
    color: red;
}
footer p button{
    padding: 0 .6rem;
    border:none;
    background: red;
    color: #fff;
    margin-left: .2rem;
}
.all{
    position: absolute;
    top: 0;
    left: .3rem;
    padding-left: .8rem;
}
.item-check {
  width: .3rem;
  height: .3rem;
  border: 1px solid #ccc;
  position: absolute;
  left: .2rem;
  top: .35rem;
  line-height: .3rem;
  text-align: center;
}
.item-check b{
  display: inline-block;
  background-color: skyblue;
  width: .2rem;
  height: .2rem;
  margin-bottom: .04rem;
}
</style>
