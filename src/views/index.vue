<template>
  <div class="wrap">
    <keep-alive include="home"><router-view></router-view></keep-alive>
    <footer>
      <router-link :to="{name: 'home'}" tag="a">
        <i class="fa fa-home"></i>
        <span>首页</span>
      </router-link>
      <router-link :to="{name: 'classify'}" tag="a">
        <i class="fa fa-home"></i>
        <span>分类</span>
      </router-link>
      <router-link :to="{name: 'shopCar'}" tag="a" class="shopcar">
        <i class="fa fa-home"></i>
        <b class="num">{{$store.state.getshopcarList.length}}</b>
        <span>购物车</span>
      </router-link>
      <router-link :to="{name: 'user'}" tag="a">
        <i class="fa fa-home"></i>
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>
<script>
export default {
    name:'index'
}
</script>

<style lang="sass" scoped>
.wrap
  width: 100%
  height: 100%
  overflow: hidden
  background: #eeeeee
  footer
    width: 100%
    padding-top: .15rem
    height: 1rem
    display: flex
    border-top: 1px solid #ccc
    background: #fff
    position: fixed
    bottom: 0
    left: 0
    a
      flex: 1
      text-align: center
      color: #333
      &:hover
        text-decoration:none
      span
        font-size: .12rem
        line-height: .35rem
        display: block
      i
        display: block
        font-size: .5rem
.shopcar
  position: relative
  .num
    position: absolute
    background: red
    color: #fff
    top: 0
    right: .25rem
    font-size: .12rem
    width: .35rem
    height: .35rem
    text-align: center
    line-height: .35rem
    border-radius: 50%
</style>
