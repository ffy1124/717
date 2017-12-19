<template>
  <div class="wrap">
        <header>
            <span class="left" @click="back">
              <i class="fa fa-angle-left"></i>
              返回
            </span>
            <h3 >
                <i class="fa fa-search"></i>
                <input type="text" class="form-control" placeholder="请输入您要购买的商品" v-model="searchInput">
            </h3>
            <span @click="search">
                搜索
            </span>
        </header>
        <section class="pt10 pl10 pr10">
          <p>最近搜索 <i class="iconfont icon-lajixiang" @click="clearHistory"></i></p>
          <div class="history mt10 mb20" ref="history">
            <p v-if="this.searchHistoryList.length==0">暂无搜索记录</p>
            <p><span class="ml5 mr5" v-for="(v, k) in searchHistoryList" :key="k">{{v}}</span></p>
            
          </div>
          <p class="pt20">大家都在搜</p>
          <div class="hot mt10">
            <span class="ml5 mr5" v-for="(v, k) in hotList" :key="k">{{v.cont}}</span>
          </div>
        </section>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: "search",
  data(){
    return{
      hotList:[
        {
          'cont':'蜂蜜'
        },
        {
          'cont':'三黄鸡'
        },
        {
          'cont':'红酒'
        },
        {
          'cont':'红枣'
        },
        {
          'cont':'蜂蜜'
        },
        {
          'cont':'三黄鸡'
        },
        {
          'cont':'红酒'
        }
      ],
      searchInput:'',
      searchHistoryList:[]
    }
  },
  created(){
    this.getHistory();
  },
  methods:{
    clearHistory(){
      let ls = localStorage;
      ls.setItem('searchHistory',JSON.stringify([]));
      this.getHistory();
    },
    back(){
      this.$router.push({
        name: 'home'
      })
    },
    search(){
      if(this.searchInput == "")return;
      let ls = localStorage;
      let shistory = ls.getItem('searchHistory');
      if(!shistory){
        ls.setItem('searchHistory',JSON.stringify([this.searchInput]));
      }else{
        let newHistory = JSON.parse(shistory);
        newHistory.unshift(this.searchInput);
        newHistory = _.uniq(newHistory);
        ls.setItem('searchHistory',JSON.stringify(newHistory));
      }
      this.getHistory();
      this.searchInput ="";
    },
    getHistory(){
      let ls = localStorage;
      this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'));
    }
  }
};
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
}
header {
  height: 1.05rem;
  background-color: #fff;
  padding-top: 0.1rem;
  width: 100%;
  line-height: .88rem;
}
header span {
  position: absolute;
  top: .1rem;
  right: .4rem;
  font-size: 0.12rem;
  z-index: 999;
}
header h3 {
  margin: 0;
  padding-top: 0.1rem;
  padding-right: 1.2rem;
  padding-left: 1.1rem;
  position: relative;
  line-height: .88rem;
}
header h3 i {
  font-size: 0.3rem;
  top: 0.3rem;
  left: 1.3rem;
  color: #ccc;
  position: absolute;
}
header h3 .form-control {
  background-color: #efefef;
  border: 0;
  height: 0.7rem;
  padding-left: 0.8rem;
}
.left{
  left: .1rem;
  z-index: 999;
  width: 1rem;
}
.left i{
  font-size: .4rem;
}
section p{
  position: relative;
}
section p i{
  position: absolute;
  right: .2rem;
  vertical-align: sub;
}
.history span{
  border: 1px solid #ccc;
  padding: .1rem .2rem;
  border-radius: .2rem;
  display: inline-block;
}
.hot span{
  border: 1px solid #ccc;
  padding: .1rem .2rem;
  border-radius: .2rem;
  display: inline-block;
  margin-top: .3rem;
}
</style>
