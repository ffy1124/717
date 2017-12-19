<template>
    <dl>
        <dt>
            <p>{{item.name+' '+' '+this.tel}}</p>
            <p>{{item.provide+item.city+item.area+item.address}}</p>
        </dt>
        <dd>
            <div class="set">
                <span class="item-check" @click="change">
                    <b v-if="item.checked"></b>
                </span>
                {{text}}
            </div>
            <p><span class="mr20"><i class="iconfont icon-shouhuodizhiyebianji"></i>编辑</span><span @click="del"><i class="iconfont icon-lajixiang"></i>删除</span></p>
        </dd>    
    </dl>
</template>

<script>
export default {
    name:'addressItem',
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
    data(){
        return{
            text: '设为默认地址',
            tel: ''
        }
    },
    methods:{
        change(){
            this.item.checked = !this.item.checked;
        },
        del(){
            this.$http.post('/mobile/Category/delAddress',{
                index: this.index
            }).then((res)=>{
                if(res.data == 'success'){
                    this.$message('删除成功');
                    this.$http.post('/mobile/Category/addressList').then(res=>{
                        this.$store.commit('updated_addressList',res.data);
                    })
                }
            })
        }
    },
    created(){
        this.tel = this.item.tel.substr(0, 3) + '****' + this.item.tel.substr(7);
        if(this.item.checked){
            this.text = '默认地址';
        }else{
            this.text = '设为默认地址';
        }
    }
}
</script>

<style scoped>
dl{
    background-color: #fff;
    margin-top: .2rem;
}
dt{
    border-bottom: 1px solid #ccc;
}
dt p{
    line-height: 1rem;
    font-weight: normal;
    padding-left: .3rem;
    padding-right: .3rem;
}
dt p:nth-child(2){
    height: 1rem;
    line-height: .5rem;
    font-size: .2rem;
}
dd{
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .5rem;
}
.set{
    position: relative;
    padding-left: .5rem;
}
.item-check {
  width: .4rem;
  height: .4rem;
  border: 1px solid #ccc;
  position: absolute;
  left: 0;
  top: .3rem;
  line-height: .3rem;
  text-align: center;
  border-radius: 50%;
}
.item-check b{
  display: inline-block;
  background-color: red;
  width: .3rem;
  height: .3rem;
  margin-top: .04rem;
  border-radius: 50%;
}
</style>
