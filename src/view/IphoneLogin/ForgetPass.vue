<template>
  <div class="RegisterBox">
    <div class="RegisterBoxHeader">
      忘记密码
      <img src="../../assets/img/join.png" alt="" class="closeNax" @click="Back">
    </div>

    <div class="RegisterContent">
      <div class="contentMenu">
        <span style="margin-top: 26px;">手机号码</span>
        <div class="InputBox">
          <input type="number" v-model="useriphone" style="text-indent: .2rem">
        </div>
        <p>{{MobileErr}}</p>
        <span>
        验证码
        <a
          style="float: right;"
          href="javascript:void(0)"
          :class="YZMGET?Num === ''?'':'active':''"
          @click="getYZM"
        >{{YZMGET?'重新获取':'获取验证码'}}{{Num === ''?'':`(${Num}s)`}}</a>
      </span>
        <div class="InputBox">
          <input type="text" v-model="YZM">

        </div>
        <p>{{YZMerr}}</p>
        <span>登录密码</span>
        <div class="InputBox">
          <input type="password" v-model="password">
        </div>
        <span style="margin-top: 26px;">8-16位，数字、字母或数字字母组合</span>
        <p>{{PassErr}}</p>
        <span>确认密码</span>
        <div class="InputBox">
          <input type="password" v-model="OKPass">
        </div>
        <p v-if="showError">{{OkPassErr}}</p>
        <p>{{ErrorRe}}</p>
        <div class="Register" v-on:click="Register">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForgetPass",
    data(){
      return{
        useriphone:'',       //手机号码
        YZM:'',             //验证码
        password:'',          //密码
        OKPass:'',            //确认密码
        YZMGET:false,           //是否获取验证码
        Num:'',                 //倒计时
        showError:false,            //未知



        MobileErr:'',             //手机号错误提示
        YZMerr:'',                  //验证码错误提示
        PassErr:'',                 //密码错误提示
        OkPassErr:'',                 //确认密码错误提示
        ErrorRe:'',                     //注册错误提示
      }
    },
    methods:{

      //获取验证码
      getYZM(){
        if(this.Num !== '')return;
        if(!this.GetCodeForPass(this.useriphone)){
          this.MobileErr = '请输入正确的手机号'
          return false
        }
        let params = {
          mobile:this.useriphone
        }
        this.$http.post(this.$conf.env.GetMoblieCode,params).then(res=>{
          this.YZMGET = true;
          this.Num = 59;
          this.timer = setInterval(()=>{
            this.Num--
            if(this.Num <= 0){
              this.Num = ''
              clearInterval(this.timer)
            }
          },1000)
        }).catch(err=>{
          console.log(err)
          this.YZMerr = err.response.data.err
        })

      },

      //注册
      /**
       * @return {boolean}
       */
      Register(){
        this.showError = false
        if(!(/^1[3456789]\d{9}$/.test(this.useriphone))){
          this.MobileErr = '请输入正确的手机号'
          return false;
        }else if(this.showError){
          return false;
        }else if(this.YZM == ''){
          this.YZMerr = '验证码不能为空'
          return false;
        }else if(this.password == ''){
          this.PassErr = '密码不能为空'
          return false;
        }else if(this.OKPass !== this.password){
          this.OkPassErr = '两次密码输入不一致'
          return false;
        }else if(this.password.length<5 || this.password.length>17){
          this.OkPassErr = '请输入有效的密码'
          return false;
        }
        this.MobileErr = this.YZMerr = this.PassErr = this.OkPassErr = ''
        let params = {
          "sms_code":this.YZM,
          "mobile": this.useriphone,
          "new_password": this.password,
          "new_password2": this.OKPass,
        }
        this.$http.put(this.$conf.env.ChangePass,params).then(res=>{
          this.$router.push({
            name:'IphoneLogin'
          })
        }).catch(err=>{
          this.ErrorRe = err.response.data.err
        })
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
      //确认密码验证，封装  1、密码  2、确认密码
      GetOKpass(pass,Opass){
        if(pass !== Opass){
          return false
        }else{
          return true
        }
      },




      //返回上一页
      Back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">


  .RegisterBox{
    width: 100%;
    height: 100%;
    .RegisterBoxHeader{
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #F8F8F8;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      text-align: center;
      font-size:18px;
      font-family:MicrosoftYaHei;
      font-weight:bold;
      color:rgba(51,51,51,1);
      line-height:44px;
      .closeNax{
        width:10px;
        height:17px;
        position: absolute;
        left: 20px;
        transform: rotateZ(180deg);
      }
    }


    .RegisterContent{
      width: 345px;
      margin: 0 auto;
      .contentMenu{
        width: 100%;
        p{
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          color: red;
        }
        span{
          line-height: 13px;
          height:13px;
          font-size:13px;
          font-family:Adobe Heiti Std R;
          color:rgba(170,170,170,1);
          display: block;
          margin-top: 0;
          a{
            padding: 4px;
            border:1px solid #E60012;
            color: #E60012;
            border-radius:3px;
            &.active{
              border:1px solid transparent;
              color: #AAAAAA;
            }
          }

        }
        .InputBox{
          width: 100%;
          border-bottom: 1px solid #EDEDED;
          display: flex;
          justify-content: space-between;
          height: 27px;
          align-items: center;
          color:rgba(170,170,170,1);
          .quhao{
            width: 4px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size:15px;
            font-family:SimHei;
            color:#E60012;
            img{
              width:.100px;
              height:5px;
              display: block;
            }
            .vux-cell-box{
              margin: 0 auto;
            }
          }
          input{
            flex: 1;
            display: block;
            border: 0;
            outline: none;
            background: transparent;
            font-size: 15px;
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
          .RemoveInput{
            margin-right: 4px;
            width:17px;
            height:17px;
            img{
              width:17px;
              height:17px;
              display: block;
            }
          }
        }
        .xieyi{
          display: flex;
          margin-top: 22px;
          align-items: center;
          span{
            width:13px;
            height:13px;
            border:1px solid #E60012;
            border-radius:50%;
            display: block;
            margin-top: 0;
            margin-right: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width: 70%;
              height: 70%;
              display: block;
              margin: auto;
            }
          }
          p{
            color: #999999;
            font-size:15px;
            font-family:Adobe Heiti Std R;
            a{
              color: #E60012;
            }
          }
        }
        .Register{
          width:100%;
          height:44px;
          background:#E60012;
          border-radius:5px;
          text-align: center;
          line-height: 44px;
          margin-top: 19px;
          font-size:16px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
</style>
