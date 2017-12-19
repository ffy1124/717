<template>
<div class="wrap">
    <header><span @click="back"><i class="fa fa-angle-left"></i></span><h3>收货人</h3></header>
    <section>
        <form class="pl20 pr20">
            <p><input type="text" class="form-control" v-model="name" placeholder="收货人姓名"></p>
            <p><input type="text" class="form-control" v-model="tel" placeholder="手机号"></p>
            <p>
                <select name="provide" v-model="provide" class="form-control" @change="getCityData(provide)" >
                    <option :value="item.name" v-for="(item,index) in addList">{{item.name}}</option>
                </select>
                <select name="city" v-model="city" class="form-control" @change="getarea(city)">
                    <option :value="val.name" v-for="(val, key) in addCity">{{val.name}}</option>
                </select>
            </p>
            <p>
                <select name="area" v-model="area" class="form-control">
                    <option :value="v" v-for="(v, k) in addArae">{{v}}</option>
                </select>
            </p>
            <p><input type="text" class="form-control" v-model="address" placeholder="详细地址"></p>
        </form>   
        <div class="set">
            <span class="item-check" @click="change">
                <b v-if="checked"></b>
            </span>
            {{text}}
        </div>
        <button class="btn" type="button" @click="submitAdd">保存</button>
    </section>
</div>
  
</template>

<script>
export default {
    name: 'addform',
    data(){
        return{
            checked:false,
            addList: [],
            addCity: [],
            addArae: [],
            provide: '',
            city: '',
            area: '',
            name: '',
            tel: '',
            address: '',
            text: '设为默认地址'
        }
    },
    created(){
        this.$http.post('/mobile/Category/getaddList').then((res)=>{
            this.addList = res.data;
        })
    },
    methods:{
        getCityData(val){
            this.city = '',
            this.area = '',
            this.addList.forEach((item,index) =>{
                if(item.name == val){
                    this.addCity = item.city;
                }
            })
        },
        getarea(val){
            this.addCity.forEach((item,index) =>{
                if(item.name == val){
                    this.addArae = item.area;
                }
            })
        },
        submitAdd(){
            if(this.name == '' || this.tel == '' || this.provide == '' || this.city == '' || this.area =='' || this.address == ''){
                this.$message("请输入完整信息");
            }else{
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.tel)) {
                    this.$message("电话格式不正确");
                }else{
                    this.$http.post('/mobile/Category/addlist',{
                        name: this.name,
                        tel: this.tel,
                        provide: this.provide,
                        city: this.city,
                        area: this.area,
                        address: this.address,
                        checked: false
                    }).then((res) =>{
                        if(res.data='success'){
                            this.$message("添加地址成功");
                            this.$router.go(-1);
                        }
                    })
                }
            }
            this.name = '',
            this.tel = '',
            this.provide = '',
            this.city = '',
            this.area = '',
            this.address = ''
        },
        change(){
            this.checked = !this.checked;
            if(this.checked){
                this.text = '默认地址';
            }else{
                this.text = '设为默认地址';
            }
        },
        back(){
            this.$router.go(-1);
        }
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
}
form p{
    margin-top: .4rem;
    margin-bottom: .4rem;
}
form p:nth-child(3){
    display: flex;
}
form p:nth-child(3) .form-control{
    width: 50%;
}
.set{
    position: relative;
    padding-left: 1rem;
    height: .7rem;
}
.item-check {
  width: .4rem;
  height: .4rem;
  border: 1px solid #ccc;
  position: absolute;
  left: .4rem;
  top: 0;
  line-height: .3rem;
  text-align: center;
  border-radius: 50%;
}
.item-check b{
  display: inline-block;
  background-color: red;
  width: .3rem;
  height: .3rem;
  margin-top: .03rem;
  border-radius: 50%;
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
