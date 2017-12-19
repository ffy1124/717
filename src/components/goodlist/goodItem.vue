<template>
  <dl @click="getDetails">
    <dt>
      <img :src="'http://www.lb717.com/'+val.obj_data" alt="img">
    </dt>
    <dd>
      <h4>{{val.goods_name}}</h4>
      <p><label>￥{{val.discount_price}}</label><img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" @click.stop="getShopcart"></img></p>
    </dd>
  </dl>
</template>

<script>
import {getCookie} from '../../utils/utils';
export default {
  name: "goodItem",
  props:['val'],
  methods:{
    getDetails(){
      this.$router.push({
        name: 'details',
        params: this.val
      })
    },
    getShopcart(){
      var token = getCookie('token');
      if(token){
          var obj = {
            id: this.val.goods_id,
            src: this.val.obj_data,
            price: this.val.discount_price,
            name: this.val.goods_name,
            checked: false,
            count: 1
          }
          this.$store.commit('updated_shopCarlist',{
            obj: obj
          });
          this.$message('添加成功');
      }else{
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
};
</script>

<style scoped>
dl {
  width: 50%;
  padding: 0.05rem;
}
dl dt {
  height: 3.9rem;
}
dl dt img {
  width: 100%;
  height: 100%;
}
dl dd h4 {
  height: 1rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 0 0.1rem;
  background-color: #fff;
}
dl dd p {
  padding-left: 0.2rem;
  position: relative;
  line-height: 0.6rem;
  background-color: #fff;
}
dl dd p label {
  color: red;
}
dl dd p img {
  position: absolute;
  top: 0rem;
  right: 0.2rem;
  font-size: 0.4rem;
  width: 0.65rem;
  height: 0.55rem;
}
</style>
