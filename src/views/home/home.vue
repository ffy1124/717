<template>
  <div class="box">
        <header>
            <span class="left">
                <i class="fa fa-home"></i>
                服务站
            </span>
            <h3>
                <i class="fa fa-search"></i>
                <input type="text" @focus="getSearch" class="form-control" placeholder="请输入您要购买的商品">
            </h3>
            <span class="right">
                <i class="fa fa-home"></i>
                我的店铺
            </span>
        </header>
        <section ref="main" @scroll="updateGoodlist">
            <div class="main-wrap" ref="scroller">
                <div class="banner">
                <Banner></Banner>
                </div>
                <div class="navList pt5 pb5">
                    <dl v-for="(v, k) in navList" :key="k" class="pt5">
                        <dt>
                            <img :src="v.src" alt="img">
                        </dt>
                        <dd>{{v.tit}}</dd>
                    </dl>
                </div>
                <div class="dynamic">
                    <span>商城动态</span>
                    <dynamicBan></dynamicBan>
                </div>
                <div class="preferential">
                    <p><label class="pr10">天天特惠</label>每天都有惊喜<span>更多<i class="fa fa-angle-right pl10 f20"></i></span></p>
                    <div class="preferential-list">
                        <div class="pleft">
                            <img src="src/assets/img/preferential1.png" alt="img">
                        </div>
                        <div class="pright">
                            <img src="src/assets/img/preferential2.png" alt="img">
                            <img src="src/assets/img/preferential3.png" alt="img">
                        </div>
                    </div>
                </div>
                <div class="goodlist">
                    <p>—— 家乡味道 ——<span>更多<i class="fa fa-angle-right pl10 f20"></i></span></p>
                    <div class="goods">
                        <goodItem v-for="(v, k) in goodslist" :key="k" :val="v"></goodItem>
                    </div>
                    <p>{{tip}}</p>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import Banner from "../../components/banner/banner";
import dynamicBan from "../../components/banner/dynamicBan";
import goodItem from '../../components/goodlist/goodItem';
export default {
  name: "home",
  data() {
    return {
      navList: [
        {
          src: "src/assets/img/nav1.png",
          tit: "牛奶乳品"
        },
        {
          src: "src/assets/img/nav2.png",
          tit: "家乡味道"
        },
        {
          src: "src/assets/img/nav3.png",
          tit: "休闲零食"
        },
        {
          src: "src/assets/img/nav4.png",
          tit: "米面粮油"
        },
        {
          src: "src/assets/img/nav5.png",
          tit: "调味酒料"
        },
        {
          src: "src/assets/img/nav6.png",
          tit: "酒水饮料"
        },
        {
          src: "src/assets/img/nav7.png",
          tit: "生鲜果蔬"
        },
        {
          src: "src/assets/img/nav8.png",
          tit: "进口食品"
        }
      ],
      goodslist: [],
      channel_id: 2,
      canIQuery: true,
      tip: ''
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    getGoods() {
      this.$http
        .post("/mall/index/getGoodsChannel", {
          channel_id: this.channel_id
        })
        .then(res => {
          this.goodslist = this.goodslist.concat(res.data.data.data);
          if(res.data.data.data.length === 0){
              this.tip = '我也是有底线的噢(*^▽^*)';
          }
          this.canIQuery = true
        });
    },
    updateGoodlist() {
      var scroller = this.$refs.scroller.offsetHeight;
      var main = this.$refs.main;
      var mainHeight = main.offsetHeight;
      var scrollTop = main.scrollTop;
      if(this.canIQuery){
        if (scroller - mainHeight - scrollTop < 30) {
          this.tip = '正在加载中';
          this.channel_id++;
          this.getGoods();
          this.canIQuery = false;
        }
      }
      
    },
    getSearch() {
      this.$router.push({
        name: 'search'
      })
    }
  },
  components: {
    Banner,
    dynamicBan,
    goodItem
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 0.05rem;
}
.goodlist {
  margin-top: 0.1rem;
}
.goodlist > p {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  position: relative;
  font-size: 0.36rem;
  color: orange;
  background-color: #fff;
}
.goodlist p span {
  position: absolute;
  top: 0;
  right: 0.2rem;
  font-size: 0.12rem !important;
  color: #333;
}
.box {
  padding-bottom: 1rem;
  background-color: #eee;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow-y: scroll;
}
.preferential-list {
  height: 4.23rem;
  width: 100%;
  display: flex;
}
.pleft,
.pright {
  flex: 1;
}
.pleft img {
  width: 100%;
  height: 100%;
}
.pright img {
  width: 100%;
  height: 50%;
}
header {
  height: 1.05rem;
  background-color: #fff;
  padding-top: 0.1rem;
  width: 100%;
}
header span {
  position: absolute;
  top: 0;
  font-size: 0.12rem;
  text-align: center;
  color: red;
}
header span i {
  display: block;
  font-size: 0.4rem;
}
header h3 {
  margin: 0;
  padding-top: 0.1rem;
  padding-right: 1.5rem;
  padding-left: 1.3rem;
  position: relative;
}
header h3 i {
  font-size: 0.3rem;
  top: 0.3rem;
  left: 1.5rem;
  color: #ccc;
  position: absolute;
}
header h3 .form-control {
  background-color: #efefef;
  border: 0;
  height: 0.7rem;
  padding-left: 0.8rem;
}
.left {
  left: 0.15rem;
  top: 0.15rem;
}
.right {
  right: 0.15rem;
  top: 0.15rem;
}
.banner {
  height: 3.55rem;
  width: 100%;
}
.navList {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
.navList dl {
  width: 25%;
  text-align: center;
}
.navList dd {
  line-height: 0.6rem;
  font-size: 0.12rem;
}
.navList img {
  width: 1.1rem;
  height: 1.1rem;
}
.dynamic {
  height: 1.3rem;
  position: relative;
  padding-left: 0.9rem;
  font-size: 0.14rem;
  background-color: #fff;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
}
.dynamic span {
  position: absolute;
  top: 0.15rem;
  left: 0.1rem;
  width: 0.8rem;
  font-size: 0.18rem !important;
  color: orange;
  line-height: 0.5rem;
}
.preferential {
  margin-top: 0.1rem;
  background-color: #fff;
}
.preferential p {
  height: 1rem;
  line-height: 1rem;
  position: relative;
  padding-left: 0.2rem;
  color: orange;
}
.preferential p span {
  position: absolute;
  top: 0;
  right: 0.15rem;
  font-size: 0.12rem;
  color: #333 !important;
}
</style>
