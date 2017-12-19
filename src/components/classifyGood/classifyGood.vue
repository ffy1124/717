<template>
    <dl>
        <dt>
            <img :src="'http://www.lb717.com/'+val.cate_icon" alt="">
        </dt>
        <dd>{{val.cate_name}}</dd>
    </dl>
</template>

<script>
export default {
name: 'classifyGood',
props:['val']
}
</script>

<style scoped>
dl{
    width: 30%;
    height: 2.5rem;
    float: left;
    margin-left: .1rem;
    margin-top: .13rem;
    background: #f7f7f7;
}
dt{
    width: 1.4rem;
    height: 1.4rem;
    margin-top: .06rem;
    margin-left: .06rem;
}
dt img{
    width: 100%;
    vertical-align: top;
    border: 0;
}
dd{
    text-align: center;
    color: #909090;
    font-size: 0.3rem;
    margin-top: .2rem;
    overflow: hidden;
}
</style>
