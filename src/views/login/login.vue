<template>
  <div class="wrap">
    <header>
        <i class="fa fa-angle-left" @click="back"></i>
        <h4>登录717</h4>
        <span @click="getRegister">注册</span>
    </header>
    <section>
         <form>
            <p>
                 <i class="fa fa-user-o"></i>
                 <input type="text" class="text" placeholder="请输入您的手机号" v-model="tel">
            </p>
            <p>
                <i class="iconfont icon-suo"></i>
                <input type="password" class="text" placeholder="请输入您的密码" v-model="password">
            </p>
            <button class="btn" @click="Login" type="button">立即登录</button>
            <span>忘记密码？</span>
         </form>
    </section>
  </div>
</template>

<script>
import { getCookie, setCookie} from '../../utils/utils.js';
export default {
  name: "login",
  data(){
      return{
          tel: '',
          password: ''
      };
  },
  methods:{
      getRegister(){
          this.$router.push({
              name:'register'
          })
      },
      back(){
          this.$router.push({
              name:'home'
          })
      },
      Login(){
            if(this.tel == "" || this.password == ""){
                this.$message('请输入完整信息');
            }else{
                if(!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.tel)){
                    this.$message('电话格式不正确');
                }else{
                    this.$http.post('/mall/index/UserList',{
                        telephone: this.tel,
                        password: this.password 
                    }).then((res) =>{
                        var data  = res.data.msg;
                        if(data == "success"){
                            setCookie('token', res.data.token);
                            this.$router.push({
                                name:'user'
                            });
                        }
                    })
                }
            }
      }
  }
};
</script>

<style scoped>
.btn{
    width: 80%;
    margin-left: 10%;
    margin-top: .5rem;
    border-radius: .3rem;
    background-color: #fc4141;
    color: #fff;
    height: 1rem;
}
form{
    margin-top: .2rem;
    position: relative;
    padding-bottom: .7rem;
}
form span{
    position: absolute;
    bottom: 0rem;
    right: .5rem;
}
form p{
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    background-color: #fff;
    height: 1.2rem;
}
form p i{
    position: absolute;
    top: .37rem;
    left: .25rem;
    font-size: .5rem;
}
form .text{
    border: 0;
    background: #fff!important;
    height: 1.2rem;
    width: 100%;
    padding-left: .1rem;
}
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f4f4f4;
}
.wrap header{
    height: 1rem;
    line-height: 1rem;
    position: relative;
    background-color: #fff;
}
.wrap header h4{
    height: 1rem;
    line-height: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: .3rem;
    text-align: center;
}
.wrap header i{
    position: absolute;
    top: .35rem;
    left: .3rem;
    font-size: .3rem;
}
.wrap header span{
    position: absolute;
    top: 0;
    right: .3rem;
    color: red;
}
</style>
