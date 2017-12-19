<template>
    <dl>
        <span class="item-check" @click="change_checked">
            <b v-if="item.checked"></b>
        </span>
        <dt>
            <img :src="'http://www.lb717.com/'+item.src" alt="img">
        </dt>
        <dd>
            <p>{{item.name}}</p>
            <p>x{{item.count}}</p>
            <p>
                <span>￥{{item.price}}</span>
            </p>
            <div class="jisuan">
                <span @click="reduce">-</span>
                <span>{{item.count}}</span>
                <span @click="add">+</span>
            </div>
        </dd>
    </dl>
</template>
<script>
export default {
  name: "shopcarItem",
  props:{
        item:{
            type: Object,
            required: true
        },
        index:{
            type: Number,
            required: true
        }
  },
  methods:{
        reduce(){
            this.$store.commit('updated_num',{
                index:this.index,
                num: --this.item.count
            });
            this.$store.commit('updated_sum');
        },
        add(){
            this.$store.commit('updated_num',{
                index:this.index,
                num: ++this.item.count
            });
            this.$store.commit('updated_sum');
        },
        change_checked(){
            this.item.checked = !this.item.checked;
            this.$store.commit('updated_checkbox',{
                checked: this.item.checked,
                index:this.index
            });
            this.$store.commit('updated_sum');
        }
  }
};
</script>

<style scoped>
dl{
    width: 100%;
    height: 2.6rem;
    background: #fff;
    margin-bottom: .2rem;
    position: relative;
    background-color: #fff;
    margin-bottom: .2rem;
}
dt{
    width: 2rem;
    margin-top: .32rem;
    float: left;
    height: 2rem;
    margin-left: 1rem;
}
dl img{
    width: 100%;
    height: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
}
dd{
    font-size: .26rem;
    margin-top: .32rem;
    float: left;
    margin-left: .2rem;
}
.jisuan span{
  border: 1px solid #ccc;
  padding: .1rem .2rem;
  font-weight: normal;
}
dl dd	p:nth-child(1) {
    width: 4.2rem;
    padding-top: .1rem;
    height: .6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .5rem;
    font-size: .3rem;
    color: #666666;
}
dl dd	p:nth-child(2) {
    position: absolute;
    bottom: 1rem;
}
p span{
    color: red;
}
dl dd	p:nth-child(3) {
    position: absolute;
    bottom: .46rem;
}
dl .jisuan {
    position: absolute;
    display: inline-block;
    width: 2rem;
    height: .6rem;
    top: 1.4rem;
    right: .3rem;
    font-weight: 300;
    line-height: auto;
    border-radius: 2px;
    display: -webkit-flex;
}
.item-check {
  width: .3rem;
  height: .3rem;
  border: 1px solid #ccc;
  position: absolute;
  left: .4rem;
  top: 1.1rem;
  line-height: .3rem;
  text-align: center;
  border-radius: 50%;
}
.item-check b{
  display: inline-block;
  background-color: skyblue;
  width: .2rem;
  height: .2rem;
  margin-bottom: .04rem;
  border-radius: 50%;
}
</style>
