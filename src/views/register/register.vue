<template>
  <div class="wrap">
    <header>
        <i class="fa fa-angle-left" @click="back"></i>
        <h4>注册717</h4>
        <span @click="getLogin">登录</span>
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
            <button class="btn" type="button" @click="Register">立即注册</button>
         </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      tel: "",
      password: ""
    };
  },
  methods: {
    getLogin() {
      this.$router.push({
        name: "login"
      });
    },
    back() {
      this.$router.push({
        name: "home"
      });
    },
    Register() {
      if (this.tel == "" || this.password == "") {
        this.$message("请输入完整信息");
      } else {
        if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.tel)) {
         this.$message("电话格式不正确");
        } else {
          this.$http
            .post("/mall/index/register", {
              tel: this.tel,
              password: this.password
            })
            .then(res => {
              this.$message(res.data.msg);
              if (res.data.code == "1") {
                this.$router.push({
                  name: "login"
                });
              }
            });
        }
      }
    this.tel ='';
    this.password = '';
    }
  }
};
</script>

<style scoped>
.btn {
  width: 80%;
  margin-left: 10%;
  margin-top: 0.5rem;
  border-radius: 0.3rem;
  background-color: #fc4141;
  color: #fff;
  height: 1rem;
}
form {
  margin-top: 0.2rem;
  position: relative;
  padding-bottom: 0.7rem;
}
form span {
  position: absolute;
  bottom: 0rem;
  right: 0.5rem;
}
form p {
  padding-left: 10%;
  padding-right: 10%;
  position: relative;
  background-color: #fff;
  height: 1.2rem;
}
form p i {
  position: absolute;
  top: 0.37rem;
  left: 0.25rem;
  font-size: 0.5rem;
}
form .text {
  border: 0;
  background: #fff !important;
  height: 1.2rem;
  width: 100%;
  padding-left: 0.1rem;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
}
.wrap header {
  height: 1rem;
  line-height: 1rem;
  position: relative;
  background-color: #fff;
}
.wrap header h4 {
  height: 1rem;
  line-height: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 0.3rem;
  text-align: center;
}
.wrap header i {
  position: absolute;
  top: 0.35rem;
  left: 0.3rem;
  font-size: 0.3rem;
}
.wrap header span {
  position: absolute;
  top: 0;
  right: 0.3rem;
  color: red;
}
</style>
