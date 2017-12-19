<template>
  <div class="wrap">
    <header>
      <span @click="back"><i class="fa fa-angle-left"></i> 返回</span>
      <h3>商品 详情</h3>
      <cite @click="getHome"><i class="fa fa-home"></i></cite>
    </header>
    <section>
			<div class="commodity">
				<div class="logo swiper-containers swiper-container-horizontal">
            <div class="swiper-wrapper">
              <img class="swiper-slide swiper-slide-active" :src="'http://www.lb717.com/'+goodList.obj_data" style="width: 318px;">
              <img class="swiper-slide swiper-slide-next" :src="'http://www.lb717.com/'+goodList.obj_data" style="width: 318px;">
              <img class="swiper-slide" :src="'http://www.lb717.com/'+goodList.obj_data" style="width: 318px;">
            </div>
				    <div class="swiper-pagination p swiper-pagination-clickable swiper-pagination-bullets" style="left:2rem;bottom:-0.5rem;"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
				</div>	
				<p class="ptit">{{goodList.goods_name}}</p>
				<ul class="ul">
					<li class="li">
						<b>￥{{goodList.discount_price}}</b>￥<span class="count">{{goodList.discount_price}}</span>
						<label id="postage">(运费:￥0)</label>
					</li>
					<li class="li">
            <a style="color:#FFF;">溯源查询</a>
          </li>
					<li class="li store"><span>店铺优惠</span><label>满1件包邮</label></li>
				</ul> 
				<div class="dl">
					<dl>
						<dt><img :src="goodList.store_logo" alt=""></dt>
						<dd>
							<p class="bg">{{goodList.store_name}}</p>
							<p class="shopman">店主:<span>MYN1501021</span></p>
						</dd>
						<span class="spa"><a>进入店铺</a></span>
					</dl>
				</div>
        <div class="swip">
					<h4 class="hot">
						热门推荐
					</h4>
					<div class="deBox swiper-container swiper-container-horizontal swiper-container-free-mode">
						<ul class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
							<li class="swiper-slide swiper-slide-active" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=627&amp;from_uid='" style="margin-right: 10px;"><dl><dt><img src="http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/304139342f7eeab1bd990f1cecbc75607c189597.jpg" alt=""></dt><dd><p>南洋古早 600g原味白咖啡 马来西亚原装进口</p><p><i>￥</i><span>59.00</span></p></dd></dl></li><li class="swiper-slide swiper-slide-next" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=4445&amp;from_uid='" style="margin-right: 10px;"><dl><dt><img src="http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/0/2017-03/huge/6521638644.jpg" alt=""></dt><dd><p>都市余味 天山冰梅  118g</p><p><i>￥</i><span>8.20</span></p></dd></dl></li><li class="swiper-slide" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=4580&amp;from_uid='" style="margin-right: 10px;"><dl><dt><img src="http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/34587/2017-03/huge/3544494911.jpg" alt=""></dt><dd><p>安徽特产 金菜地香干  110g</p><p><i>￥</i><span>1.50</span></p></dd></dl></li><li class="swiper-slide" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=3878&amp;from_uid='" style="margin-right: 10px;"><dl><dt><img src="http://www.lb717.com//Uploads/images/home/storegoodsupload/release/844/2015-12/huge/4710535215.jpg" alt=""></dt><dd><p>大瀛 农场稻谷鸡  1.3kg/袋装</p><p><i>￥</i><span>68.00</span></p></dd></dl></li></ul>
					</div>
				</div>
			</div>
    </section>
    <footer>
      <a class="a employee">
        <span class="notice_num"></span>
        <img src="http://www.lb717.com//static/mobile/images/food/05.png" alt="">
        <b>客服</b>
      </a>
      <a class="a">
        <img src="http://www.lb717.com//static/mobile/images/footer/3.png" alt="">
        <b>购物车</b>
      </a>
      <p class="pa buy">立即购买</p>
      <p class="p cart">加入购物车</p>
    </footer>
  </div>
</template>
<script>
import Swiper from "../../assets/js/swiper.min.js";

export default {
  name: "details",
  data() {
    return {
      goodList: {}
    };
  },
  created() {
    this.goodList = this.$route.params;
    setTimeout(() => {
      new Swiper(".logo",{
          autoplay: "1000"
        },0);
    });
    setTimeout(() => {
      new Swiper('.deBox',{
        slidesPerView: 3,
        spaceBetween: 30
      })
    }, 0);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getHome(){
      this.$router.push({
        name: 'home'
      })
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 1rem;
  line-height: 1rem;
  position: relative;
  border-bottom: 1px solid #ccc;
}
header span {
  position: absolute;
  top: 0;
  left: 0.3rem;
  font-size: 0.12rem;
}
header span i {
  font-size: 0.4rem;
  vertical-align: middle;
}
header cite {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  line-height: 0.5rem;
  text-align: center;
}
header h3 {
  text-align: center;
  font-size: 0.4rem;
  height: 1rem;
  line-height: 1rem;
}
section {
  flex: 1;
  background-color: #efefef;
  overflow-y: scroll;
}
.commodity {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.logo {
  width: 100%;
  height: 7.5rem;
  background: #fff;
  overflow: hidden;
}
section .p {
  height: 0.2rem;
  width: 3rem;
  position: relative;
  top: -1rem;
  left: 3rem;
  z-index: 11;
}
.ptit {
  font-size: 0.26rem;
  border-top: 1px solid #eeeeee;
  padding: 0.15rem 0.4rem;
  font-weight: inherit;
  color: #333;
  background: #fff;
}
.ul {
  width: 100%;
  height: 1.2rem;
  position: relative;
  background: #fff;
}
.ul .li {
  float: left;
}
.ul .li:nth-child(1) {
  width: 4.88rem;
  color: #999999;
  font-size: 0.32rem;
  background: #fff;
  padding-left: 0.4rem;
}
.ul b {
  color: #333;
  font-weight: normal;
  font-size: 0.24rem;
}
.ul .count {
  text-decoration: line-through;
  font-size: 0.24rem;
  color: #999999;
}
.ul .li:nth-child(1) label {
  display: block;
  padding-left: 0.5rem;
  font-size: 0.26rem;
  color: #666;
}
.ul .li:nth-child(2) {
  width: 2rem;
  line-height: 0.82rem;
  text-align: center;
  background: #4f99f2;
  border-radius: 5px;
  color: #fff;
  font-size: 0.28rem;
  margin-left: 0.3rem;
}
.ul .li:nth-child(3) {
  width: 100%;
  line-height: 1rem;
  display: none;
}
.dl dl {
  width: 100%;
  position: relative;
}
.dl dl dt img {
  position: absolute;
  left: 0.3rem;
  top: 0.3rem;
  width: 0.65rem;
  height: 0.65rem;
}
.dl dl dd .bg {
  color: #333333;
  margin-left: 1.2rem;
  font-size: 0.26rem;
  padding-top: 0.2rem;
}
.dl dl .spa {
  width: 1.9rem;
  line-height: 0.7rem;
  text-align: center;
  position: absolute;
  right: 0.3rem;
  top: 0.2rem;
  border: 1px solid #666;
  border-radius: 2px;
  font-size: 0.28rem;
  color: #333;
}
.dl dl .spa a {
  color: #333;
}
.dl dl dd .shopman {
  margin-left: 1.2rem;
  margin-top: 0.01rem;
  font-size: 0.2rem;
  color: #666666;
}
.dl dl dd {
  background: #fff;
  margin-top: 0;
  height: 1.2rem;
}
.swip {
    width: 100%;
    margin-top: .1rem;
    overflow: hidden;
}
.hot{
    line-height: .8rem;
    text-align: center;
    font-size: .35rem;
    margin-bottom: .1rem;
    background: #fff;
}
.deBox {
    width: 100%;
    margin-bottom: .1rem;
    background: #fff;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.deBox ul {
    width: 100%;
    margin-left: .3rem;
}
.deBox ul li {
    float: left;
    width: 2.07rem;
}
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
}
.deBox ul li dl dt {
    width: 2.03rem;
    height: 2.04rem;
}
.deBox ul li dl dt img {
    width: 100%;
    height: 100%;
}
.deBox ul li dl dd p:nth-child(1) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .24rem;
    text-align: center;
}
.deBox ul li dl dd p:nth-child(2) {
    text-align: center;
}
.deBox ul li dl dd p i {
    font-size: .18rem;
    color: #fc4141;
}
.deBox ul li dl dd p span {
    font-size: .28rem;
    font-weight: bold;
    color: #fc4141;
}
footer {
  position: relative;
  height: 1.2rem;
  color: red;
  border-top: 1px solid #e5e5e5;
  background: #fff;
  overflow: hidden;
}
footer .a {
  width: 1.25rem;
  font-size: 0.22rem;
}
footer a {
  width: 25%;
  text-align: center;
  font-size: 0.28rem;
  display: block;
  float: left;
  position: relative;
  padding-top: 0.15rem;
}
footer a b {
  line-height: 0.7rem;
}
footer p {
  width: 2.5rem;
  background: #fb4142;
  color: #fff;
  float: right;
  line-height: 1.2rem;
  text-align: center;
  font-size: 0.34rem;
}
footer .p {
  background: #fe8282;
}
footer a:nth-of-type(1) img {
  width: 0.48rem;
  height: 0.43rem;
}
footer .a img {
  margin-left: 0.34rem;
}
footer a img {
  margin-left: 0.68rem;
  width: 0.5rem;
  display: block;
}
img {
  vertical-align: top;
  border: 0;
}
</style>
