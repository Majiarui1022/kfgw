<template>
    <div class="RegisterBoxIphone">
      <div class="RegisterBoxHeader">
        注册账号
        <img src="../../assets/img/join.png" alt="" class="closeNax" @click="Back">
      </div>

      <div class="RegisterContent">
        <div class="contentMenu">
        <span style="margin-top: 26px;">公司名称</span>
        <div class="InputBox">
          <input type="text" v-model="gongsi">
        </div>
        <p>{{gognsiErr}}</p>
        <span>手机号码</span>
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
        <!--      协议-->
        <div class="xieyi">
      <span v-on:click="Jizhu">
        <img v-if="Yudu" src="../../assets/img/grgou.png" alt="">
      </span>
          <p>我已阅读并同意 <a href="javascript:void(0)" @click="eeeeee">《注册服务协议》</a></p>
        </div>
          <p>{{ErrorRe}}</p>
        <div class="Register" v-on:click="Register" :class="Yudu === true?'':'active'">注册</div>
      </div>
      </div>
      <div class="agreement">
        <div class="agreementTit">注册服务协议 <span @click="CloseAgreen">x</span></div>
        <div class="agreementContnetBox">
          <div class="agreementContnet"  v-html="Text"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
      data(){
          return{
            gongsi:'',          //公司名称
            useriphone:'',       //手机号码
            YZM:'',             //验证码
            password:'',          //密码
            OKPass:'',            //确认密码
            YZMGET:false,           //是否获取验证码
            Num:'',                 //倒计时
            Yudu:false,                //阅读协议
            showError:false,            //未知



            gognsiErr:'',             //公司错误提示
            MobileErr:'',             //手机号错误提示
            YZMerr:'',                  //验证码错误提示
            PassErr:'',                 //密码错误提示
            OkPassErr:'',                 //确认密码错误提示
            ErrorRe:'',                     //注册错误提示

            Text:'',                      //注册服务协议
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
          })

        },

        // 注册协议展示
        eeeeee(){
            $(".agreement").css({
              top:0,
              "opacity":1,
              "zIndex":2
            })


        },
        CloseAgreen(){
          $(".agreement").css({
            top:'60%',
            "opacity":0,
            "zIndex":-1
          })

        },
        //注册
        /**
         * @return {boolean}
         */
        Register(){
          if(this.Yudu === false) return
          this.showError = false
          if(this.gongsi == ''){
            this.gognsiErr = '公司名称不能为空'
            return false;
          }else if(!(/^1[3456789]\d{9}$/.test(this.useriphone))){
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
          this.gognsiErr = this.MobileErr = this.YZMerr = this.PassErr = this.OkPassErr = ''

            let params = {
            username:this.useriphone,
            password:this.password,
            password2:this.OKPass,
            sms_code:this.YZM,
            register_company:this.gongsi,
            allow:"true",
            source: 2
          }
          this.$http.post(this.$conf.env.UserRegister,params).then(res=>{
            console.log(res)
            sessionStorage.setItem("T_ok",res.data.token);
            if(res.data.name){
              sessionStorage.setItem("Username",res.data.name);
            }else{
              sessionStorage.setItem("Username",res.data.personnel_id);
            }
            this.$router.push({
              name:'index'
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


        //是否记住密码
        Jizhu(){
          this.Yudu = !this.Yudu
        },


          //返回上一页
        Back(){
          this.$router.go(-1)
        }
      },
      created() {
        this.$http.get(this.$conf.env.Agreement).then(res=>{
          this.Text = res.data.content
        }).catch(err=>{
          console.log(err)
        })
      }
    }
</script>

<style scoped lang="scss">


  .RegisterBoxIphone{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
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
        top: 50%;
        margin-top: -8px;
      }
    }


    .RegisterContent{
      width: 345px;
      margin: 0 auto;
      .contentMenu{
        width: 100%;
        height: 100%;
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
          border-bottom: 1px solid #999;
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
              width:100%;
              height: 100%;
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
          &.active{
            background: #666;
          }
        }
      }
    }
    .agreement{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 100%;
      background: #fff;
      opacity: 0;
      transition: top .4s , opacity .4s;
      z-index: -1;
      .agreementTit{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #999;
        font-size:18px;
        line-height: 44px;
        text-align: center;
        position: relative;
        span{
          font-size: 24px;
          position: absolute;
          right: 20px;
          cursor: pointer;
        }
      }
      .agreementContnetBox{
        padding:10px;
        box-sizing: border-box;
        width: 100%;
        height: calc(100% - 44px);
        .agreementContnet{
          width: 100%;
          height: 100%;
          overflow-y: scroll;
        }
      }
    }
  }
</style>
