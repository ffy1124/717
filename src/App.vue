<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
html,body
  width: 100%
  height: 100%
  font-size: .32rem
  #app
    width: 100%
    height: 100%
    overflow: hidden
.active
  color: red!important

</style>
