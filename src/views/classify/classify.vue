<template>
  <div class="box">
        <header>
            <h3 >
                <i class="fa fa-search"></i>
                <input type="text" class="form-control" placeholder="请输入您要购买的商品">
            </h3>
        </header>
        <section>
            <ul class="nav">
                <li 
                v-for="(item,index) in tabTit" 
                :class="{active:index == num}"
                @click="tab(index)">{{item.tit}}</li>
            </ul>
            <div class="tabCon" ref="tabCon">
                <div 
                v-for='(itemCon,index) in tabData' 
                v-show=" index == num">
                <classifyGood v-for="(val, index) in itemCon" :val="val" :key="index"></classifyGood>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import classifyGood from '../../components/classifyGood/classifyGood';
export default {
  name: "classify",
  data(){
    return{
      tabData: {},
      tabTit:[
        {
          'tit': '家乡味道'
        },
        {
          'tit': '进口食品'
        },
        {
          'tit': '牛奶乳品'
        },
        {
          'tit': '休闲零食'
        },
        {
          'tit': '生鲜果蔬'
        },
        {
          'tit': '米面粮油'
        },
        {
          'tit': '调味调料'
        },
        {
          'tit': '酒水饮料'
        }
      ],
      num: 1
    }
  },
  created(){
      this.$http.post('/mobile/Category/categorySon').then(res=>{
          this.tabData = res.data;
      });
  },
  methods: {
      tab(index) {
          this.num = index;
          this.$loading.show(this.$refs.tabCon);
          setTimeout(() => {
            this.$loading.hide();
          }, 1000);
          
      }
  },
  components:{
    classifyGood
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 1.05rem;
  background-color: #fff;
  padding-top: 0.1rem;
  width: 100%;
  line-height: 0.88rem;
  border-bottom: 1px solid #eeeeee;
}
header h3 {
  margin: 0;
  padding-top: 0.1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  line-height: 0.88rem;
}
header h3 .form-control {
  background-color: #efefef;
  border: 0;
  height: 0.7rem;
  padding-left: 0.8rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
}
header h3 i {
  font-size: 0.3rem;
  top: 0.4rem;
  left: 1.3rem;
  color: #ccc;
  position: absolute;
}
section{
    flex: 1;
    background: white;
    display: flex;
}
.nav{
    width: 30%;
    height: 100%;
    background: #F0ECED;
}
.nav li{
  height: .8rem;
  line-height: .8rem;
  text-align: center;
}
.tabCon{
  width: 70%;
  height: 100%;
}
.active{
  background-color: #fff;
  border-left: 1px solid red;
  color: #333;
}
</style>
