<template>
    <div class="wrap">
        <header>
            <span @click="back"><i class="fa fa-angle-left"></i></span>
            <h3>收货地址</h3>
        </header>
        <section>
                <addressItem v-for="(item,index) in $store.state.addressList" :key="index" :item="item" :index="index"></addressItem>
        </section>
        <footer>
            <button class="btn" type="button" @click="addAddress">+新增地址</button>
        </footer>
    </div>
</template>

<script>
import addressItem from '../../components/addressItem/addressItem';
export default {
    name: 'address', 
    methods:{
        addAddress(){
            this.$router.push({
                name:'addform'
            })
        },
        back(){
            this.$router.go(-1);
        }
    },
    components:{
        addressItem
    },
    created(){
        this.$http.post('/mobile/Category/addressList').then(res=>{
            this.$store.commit('updated_addressList',res.data);
        })
    }
}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header{
    height: 1rem;
    line-height: 1rem;
    position: relative;
    border-bottom: 1px solid #ccc;
}
header span{
    position: absolute;
    top: 0;
    left: .3rem;
}
header span i{
    font-size: .4rem;
    vertical-align: sub;
}
header h3{
    text-align: center;
    font-size: .4rem;
    height: 1rem;
    line-height: 1rem;
}
section{
    flex: 1;
    position: relative;
    background-color: #efefef;
    overflow-y: scroll;
}
footer{
    height: 1.5rem;
}
button{
    width: 70%;
    margin-left: 15%;
    position: absolute;
    bottom: .5rem;
    background: red;
    color: #fff;
}
</style>
