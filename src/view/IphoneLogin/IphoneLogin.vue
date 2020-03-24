<template>
  <div class="IphoneLoginBox">
    <div class="IphoneLoginHeader">
        <img src="../../assets/img/logoTwo.png" alt="">
        <img src="../../assets/img/join.png" alt="" class="closeNax" @click="Back">
    </div>
    <div class="IphoneLoginContent">
      <p>手机号码</p>
      <input type="number" v-model="UserMobile">
      <p style="font-size: 12px;color: red;margin-top: 0;line-height: 24px;height: 24px">{{UserMobileERR}}</p>
      <p style="margin-top: 0;">登录密码</p>
      <input type="password" v-model="UserPass">
      <p style="font-size: 12px;color: red;margin-top: 0;line-height: 24px;height: 24px">{{UserPassERR}}</p>
      <div class="rememberPassBox">
        <div class="Remember">
          <div class="RememberPass" @click="jizhuPass">
            <img v-if="jizhu" src="../../assets/img/grgou.png" alt="">
          </div>
          <span>记住密码</span>
        </div>
        <div class="ForgetPass" @click="ForgetPassGo">忘记密码</div>
      </div>
      <div class="LoginBut" @click="LoginUser">登录</div>
      <p style="text-align: right;">没有账号？<span @click="RegisterGo">立即注册</span></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IphoneLogin",
      data(){
        return{
          jizhu:false,
          UserPass:'',          //密码
          UserMobile:'',         //手机号
          UserMobileERR:'',       //手机号错误提示
          UserPassERR:'',         //密码错误提示
        }
      },
      methods:{
        ForgetPassGo(){
          this.$router.push({
            name:'ForgetPass'
          })
        },
        LoginUser(){
          if(!this.GetCodeForPass(this.UserMobile)){
              this.UserMobileERR = '请输入正确的手机号'
            return false
          }else{
            this.UserMobileERR = ''
          }


          if(!this.getPass(this.UserPass)){
            this.UserPassERR = '请输入正确密码'
            return false
          }else{
            this.UserPassERR = ''
          }

          let Obj = {
            "username": this.UserMobile,
            "password": this.UserPass
          }

          this.$http.post(this.$conf.env.LoginUserS,Obj).then(resa=>{

            if(this.jizhu){
              localStorage.setItem("T_ok",resa.data.token);
              localStorage.setItem("Username",resa.data.name);
            }else{
              sessionStorage.setItem("T_ok",resa.data.token);
              sessionStorage.setItem("Username",resa.data.name);
            }
            this.$router.push({
              name:'index'
            })
          }).catch(err=>{
            console.log(err)
            this.UserPassERR = '账号或者密码错误'
          });

        },


        //获取验证码  验证手机号封装
        GetCodeForPass(Dom){
          if(!(/^1[3456789]\d{9}$/.test(Dom))){
            return false
          }else{
            return true
          }
        },
        //密码长度验证，封装   1、密码
        getPass(Mobile){
          if(Mobile < 8){
            return false
          }else{
            return true
          }
        },
        RegisterGo(){
          this.$router.push({
            name:'Register'
          })
        },
        jizhuPass(){
          this.jizhu = !this.jizhu
        },

        Back(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped lang="scss">

  .IphoneLoginBox{
    width: 100%;
    height: 100%;
    .IphoneLoginHeader{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #F8F8F8;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img{
          width:90px;
          height:19px;
        }
        .closeNax{
          width:10px;
          height:17px;
          position: absolute;
          left: 20px;
          transform: rotateZ(180deg);
        }
    }
    .IphoneLoginContent{
      width: 345px;
      margin: 0 auto;
      margin-top: 12px;
      p{
        font-size:13px;
        font-family:Adobe Heiti Std R;
        font-weight:normal;
        color:rgba(170,170,170,1);
        line-height: 13px;
        margin-top: 26px;
        span{
          color:rgba(230,0,18,1);
        }
      }
      input{
        font-size: 14px;
        line-height: 27px;
        height: 27px;
        width: 345px;
        border: 0;
        border-bottom: 1px solid #EDEDED;
        outline: none;
      }
      input[type="number"] {
        -moz-appearance: textfield;
        text-align: left;
      }
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .rememberPassBox{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:28px;
        .Remember{
          .RememberPass{
            float: left;
            width:16px;
            height:16px;
            border:1px solid rgba(157,157,157,1);
            border-radius:3px;
            margin-right:13px;
            img{
              width: 100%;
              height: 100%;
              display: block;
              margin: auto;
            }
          }
          span{
            font-size:13px;
            font-family:Adobe Heiti Std R;
            font-weight:normal;
            color:rgba(157,157,157,1);
            line-height:16px;
          }
        }
        .ForgetPass{
          font-size:13px;
          font-family:Adobe Heiti Std R;
          color:rgba(230,0,18,1);
          line-height:16px;
        }
      }
      .LoginBut{
        width:345px;
        height:44px;
        background:rgba(230,0,18,1);
        border-radius:5px;
        font-size:16px;
        font-family:PingFang-SC-Medium;
        color:rgba(255,255,255,1);
        margin: 35px 0;
        line-height: 44px;
        text-align: center;
      }
    }
  }
</style>
