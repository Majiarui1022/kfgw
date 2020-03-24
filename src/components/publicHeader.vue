<template>
  <div class="PubLicHdeader">
    <header>
      <div class="MenuBut" @click="GoMenu">
        <img src="../assets/img/menu.png" alt="">
      </div>
      <div class="LogoBox">
        <img src="../assets/img/logo.png" alt="" @click="GoIndex">
      </div>
      <div class="LogoBoxTwo">
        <img src="../assets/img/logoTwo.png" alt="">
      </div>
      <div class="LoginBtuG" @click="GoLogin">{{LoginState == true ? '退出':'登录'}}</div>
      <div class="NavBox">
        <ul>
          <li>
            <router-link to="/" class="MenuList">首页</router-link>
          </li>
          <li>
            <router-link to="/aboutwe" class="MenuList">关于控福</router-link>
            <div class="AboutMenuC">
              <router-link to="/CompanyNews">公司动态</router-link>
              <router-link to="/industryInform">行业资讯</router-link>
            </div>
          </li>
          <li>
            <router-link to="/ProductMiddle" class="MenuList">产品中心</router-link>
            <div class="AboutMenuC" style="left: 0;">
              <router-link to="/IndustrialPro">工业互联网产品</router-link>
              <router-link to="/InternetPro">互联网产品</router-link>
            </div>
          </li>
          <li><router-link to="/MoreSolutions" class="MenuList">应用方案</router-link></li>
          <li><router-link to="/CustomerCase" class="MenuList">客户案例</router-link></li>
          <li>
            <router-link to="/TechniSupp" class="MenuList">技术支持</router-link>
            <div class="AboutMenuC">
              <router-link to="/DownLoadMiddle">下载</router-link>
              <router-link to="/help">帮助</router-link>
            </div>
          </li>
          <li>
            <router-link to="/ContactUs" class="MenuList">联系我们</router-link>
            <div class="AboutMenuC">
              <router-link to="/recruitment">招贤纳才</router-link>
              <router-link to="/onlineMessage">在线留言</router-link>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)" class="MenuList" @click.stop="ShowLoginBox">{{LoginState == true ? '退出':'登录'}}</a>
            <div class="BigLaBox">
              <!--                  登录-->
              <div class="LoginBox" @click.stop="aaaaaa">
                <div class="loginCode">
                  <p class="LoginTit">使用控福智能客户端扫码安全登录</p>
                  <!--                      <img class="Kfcode" src="../assets/img/gzh.png" alt="">-->
                  <div id="qrcode" ref="qrcode"></div>
                </div>
                <div class="UserBox">
                  <p class="LoginTit">控福智能请直接登录</p>
                  <div class="UserInfo">
                    <input type="text" placeholder="请输入账号/手机号" v-model="UserMobile" @keyup.enter="LoginUser" style="margin-bottom: 10px">
                    <input type="password" placeholder="请输入密码" v-model="Pass" @keyup.enter="LoginUser">
                    <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;">{{ErrUser}}</p>
                    <div class="FotPass">
                      <div class="PassLeft">
                        <div class="jizhu" @click="ChangeRememBer" :class="rememberPass === true ?'active':''"></div>
                        自动登录
                      </div>
                      <div class="PassRight" @click.stop="ForGetPassFun">忘记密码</div>
                    </div>
                    <div class="Login" @click.stop="LoginUser">登录</div>
                    <div class="VXLoginBox">
                      <div class="Register" @click.stop="ShowLogin">立即注册</div>
                    </div>
                  </div>
                </div>
              </div>
              <!--                  注册-->
              <div class="RegisterBox" @click.stop="aaaaaa">
                <p class="RegisterTit">注册号码</p>
                <input type="text" placeholder="请输入公司名称" v-model="companyName" @keyup.enter="RegisterUser">
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;"></p>
                <input type="text" placeholder="请输入手机号码" v-model="RegisterMobile" @keyup.enter="RegisterUser">
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;">{{userMobileErr}}</p>
                <div class="GetCoed">
                  <input type="text" placeholder="请输入验证码" v-model="RegisterCode"  @keyup.enter="RegisterUser">
                  <div class="getCodeBut" :class="RegisterBole == true ? 'active':''"  @click.stop="GetRigisterCode">{{RegisterBole == true?'重新获取' + RegisterNum:'获取验证码'}}</div>
                </div>
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;"></p>
                <input type="password" placeholder="8-16位数字、字母或组合的密码" v-model="RegisterPass"  @keyup.enter="RegisterUser">
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;">{{UserOldPassErr}}</p>
                <input type="password" placeholder="确认密码" v-model="RegisterNerPass"   @keyup.enter="RegisterUser">
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;">{{UserPassErr}}</p>
                <div class="RegisterBut" @click.stop="RegisterUser" >注册</div>
                <!--                    <p class="GoLogin"><span>已有账号，去登录></span></p>-->
              </div>
              <!--                  忘记密码-->
              <div class="ForgetPass" @click.stop="aaaaaa">
                <p class="RegisterTit">忘记密码</p>
                <input type="text" placeholder="请输入手机号码" v-model="ForgetMobile">
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;">{{ForgetMobileErr}}</p>
                <div class="GetCoed">
                  <input type="text" placeholder="请输入验证码" v-model="ForgetCode">
                  <div class="getCodeBut" :class="ForgetBole == true ?'active':''" @click.stop="GetCode">{{ForgetBole == true?'重新获取' + ForgetNum:'获取验证码'}}</div>
                </div>
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;"></p>
                <input type="password" placeholder="8-16位数字、字母或组合的密码" v-model="ForgetPass">
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;"></p>
                <input type="password" placeholder="确认密码" v-model="ForgetOKPass">
                <p style="font-size: 12px;color: red;line-height: 22px;text-indent: 10px;height: 22px;">{{ForgetPassErr}}</p>
                <div class="RegisterBut" @click.stop="GoForget">提交</div>
                <!--                    <p class="GoLogin"><span v-on:click.stop="Back">返回></span></p>-->
              </div>
              <!--                  退出登录-->
              <div class="AboutMenuC" id="abc" style="display: none;opacity: 1;left: 185px;top: 0;">
                <a href="javascript:void(0)">{{Username}}</a>
                <a href="javascript:void(0)" @click="Claselogin">退出登录</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
  import QRCode from 'qrcodejs2'
  export default {
    name: "PubLicHdeader",
    data(){
      return{
        //登录
        UserMobile:'',              //账号
        Pass:'',                    //密码
        ErrUser:'',               //账号或者密码有误。

        //忘记密码
        ForgetMobile:'',            //账号
        ForgetCode:'',              //验证码
        ForgetPass:'',              //密码
        ForgetOKPass:'',            //确认密码
        ForgetNum:59,               //倒计时
        ForgetBole:false,           //是否获取验证码

        ForgetMobileErr:'',         //手机号码报错提示
        ForgetPassErr:'',           //密码错误提示



        //注册

        companyName:'',            //公司名称
        RegisterMobile:'',         //手机号
        RegisterCode:'',           //注册验证码
        RegisterPass:'',           //密码
        RegisterNerPass:'',        //确认密码

        userMobileErr:'',         //手机号错误提示
        UserPassErr:'',           //确认密码错误提示
        UserOldPassErr:'',        //密码错误提示

        RegisterNum:59,               //倒计时
        RegisterBole:false,           //是否获取验证码


        //登录参数
        LoginUrl:'',                //登录链接
        LoginScene:'',              //登录场景值

        LoginState:false,           //登录状态
        Username:'',                  //登录之后的用户名

        rememberPass:false,            //是否记住密码
      }
    },
    methods:{
      aaaaaa(){

      },
      GoIndex(){
        this.$router.push({
          name:'index'
        })
      },
      GoLogin(){
        if(this.LoginState){
          this.$router.push({
            name:'ClearLogin'
          })
        }else{
          this.$router.push({
            name:'IphoneLogin'
          })
        }
      },
      ShowLogin(){
        $(".LoginBox").css("display","none")
        $(".RegisterBox").css("display","block")
      },
      //忘记密码
      ForGetPassFun(){
        $(".LoginBox").css("display","none")
        $(".ForgetPass").css("display","block")
      },
      //忘记密码返回
      Back(){
        $(".LoginBox").css("display","block")
        $(".ForgetPass").css("display","none")
      },
      // bbbbbbbbb(){
      //
      //   if($(".BigLaBox").css("opacity") < 1){
      //     $(".LoginBox").css("display","block")
      //     $(".RegisterBox").css("display","none")
      //     $(".ForgetPass").css("display","none")
      //   }
      //
      // },
      ShowLoginBox(){
        //为false代表未登录
        if(!this.LoginState){
          $(".LoginBox").css("display","block")
          $(".RegisterBox").css("display","none")
          $(".ForgetPass").css("display","none")
        }else{
          $("#abc").css("display","block")

        }

      },
      LoginUser(){

        if(this.LoginState) return;
        //1、手机号
        if(!this.GetCodeForPass(this.UserMobile)){
          this.ErrUser = '请输入正确的手机号'
          return
        } else{
          this.ErrUser = ''
        }
        //1、密码
        if(!this.getPass(this.Pass)){
          this.ErrUser = '请输入正确的密码'
          return;
        }else{
          this.ErrUser = ''
        }


        let Obj = {
          "username": this.UserMobile,
          "password": this.Pass
        }
        this.$http.post(this.$conf.env.LoginUserS,Obj).then(res=>{
          $(".LoginBox").css("display","none")
          $(".ForgetPass").css("display","none")
          this.Username = res.data.name
          this.LoginState = true

          if(this.rememberPass){
            localStorage.setItem("T_ok",res.data.token);
            localStorage.setItem("Username",res.data.personnel_id);
          }else{
            sessionStorage.setItem("T_ok",res.data.token);
            sessionStorage.setItem("Username",res.data.personnel_id);
          }
          this.$router.go(0)
        }).catch(err=>{
          console.log(err)
          this.ErrUser = '账号或者密码错误'
        });

      },
      //获取验证码
      GetCode(){
        if(this.ForgetBole) return;
        if(!this.GetCodeForPass(this.ForgetMobile)){
          this.ForgetMobileErr = '请输入正确的手机号'
          return
        }else{
          this.ForgetMobileErr = ''
        }

        let Obj = {
          "mobile": this.ForgetMobile
        }
        this.$http.post(this.$conf.env.GetMoblieCode,Obj).then(res=>{
          this.ForgetBole = true
          this.ForgetMobileErr = ''
          let Timer = setInterval(()=>{
            if(this.ForgetNum < 1){
              clearInterval(Timer)
              this.ForgetBole = false
              this.ForgetNum = 59
            }
            this.ForgetNum = this.ForgetNum--
          },1000)
        }).catch(err=>{
          this.ForgetBole = false
          this.ForgetMobileErr = err.response.data.err
          console.log(err.response.data.err)
        });
      },
      //忘记密码提交
      GoForget(){
        if(this.ForgetCode === '' || this.ForgetMobile === '' || this.ForgetPass === '' || this.ForgetOKPass === '')return
        //1、手机号
        if(!this.GetCodeForPass(this.ForgetMobile,)){
          this.ForgetMobileErr = '请输入正确的手机号'
          return
        }else{
          this.ForgetMobileErr = ''
        }
        //1、密码
        if(!this.getPass(this.ForgetPass)){
          this.ForgetPassErr = '请输入正确的密码'
          return
        }else{
          this.ForgetPassErr = ''
        }
        //密码  确认密码
        if(!this.GetOKpass(this.ForgetPass,this.ForgetOKPass)){
          this.ForgetPassErr = '两次密码输入不一致'
          return
        }else{
          this.ForgetPassErr = ''
        }


        let params = {
          "sms_code":this.ForgetCode,
          "mobile": this.ForgetMobile,
          "new_password": this.ForgetPass,
          "new_password2": this.ForgetOKPass,
        }
        this.$http.put(this.$conf.env.ChangePass,params).then(res=>{
          this.$router.go(0)

          console.log(res.data)
        }).catch(err=>{
          console.log(err)
          this.$message.error(err.response.data.err);
        })


      },
      //注册
      //获取验证码
      GetRigisterCode(){
        if(this.RegisterBole == true) return
        if(!this.GetCodeForPass(this.RegisterMobile)){
          this.userMobileErr = '请输入正确的手机号'
          return
        }else{
          this.userMobileErr = ''
        }


        // RegisterNum:59,               //倒计时
        //   RegisterBole:false,
        let Obj = {
          "mobile": this.RegisterMobile
        }
        this.$http.post(this.$conf.env.GetMoblieCode,Obj).then(res=>{
          this.RegisterBole = true
          this.userMobileErr = ''
          let Timer = setInterval(()=>{
            if(this.RegisterNum < 1){
              clearInterval(Timer)
              this.RegisterNum = 59
              this.RegisterBole = false
            }
            this.RegisterNum = this.RegisterNum--
          },1000)
        }).catch(err=>{
          this.RegisterBole = false
          this.userMobileErr = err.response.data.err
          this.$message.error(err.response.data.err);
        });

      },
      //注册账号
      RegisterUser(){
        if(this.RegisterMobile === '' || this.RegisterPass === '' || this.RegisterNerPass === '' || this.RegisterCode === '' || this.companyName === '')return

        if(this.userMobileErr !== ''){
          return
        }

        if(!this.getPass(this.RegisterPass)){
          this.UserOldPassErr = '请输入正确的密码'
          return
        }else{
          this.UserOldPassErr = ''
        }

        if(!this.GetOKpass(this.RegisterPass,this.RegisterNerPass)){
          this.UserPassErr = '两次输入密码不一致'
          return
        }else{
          this.UserPassErr = ''
        }



        let Register = {
          "username": this.RegisterMobile,
          "password": this.RegisterPass,
          "password2": this.RegisterNerPass,
          "sms_code": this.RegisterCode,
          "register_company": this.companyName,
          "allow": "true",
          "source": 2
        }
        this.$http.post(this.$conf.env.UserRegister,Register).then(res=>{

          let Obj = {
            "username": this.RegisterMobile,
            "password": this.RegisterPass
          }

          this.$http.post(this.$conf.env.LoginUserS,Obj).then(resa=>{
            $(".LoginBox").css("display","none")
            $(".ForgetPass").css("display","none")
            $(".RegisterBox").css("display","none")
            sessionStorage.setItem("T_ok",resa.data.token);
            sessionStorage.setItem("Username",resa.data.name);
            this.Username = res.data.name
            this.LoginState = true
            this.$router.go(0)
          }).catch(err=>{
            console.log(err)
          });



        }).catch(err=>{
          console.log(err.data)
          this.$message.error(err.response.data.err);
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
      ChangeRememBer(){
        this.rememberPass = !this.rememberPass
      },
      qrcode() {
        //获取场景值
        this.$http.get(this.$conf.env.GetSceneVal).then(res=>{
          this.$store.commit('Login',res.data)
          this.LoginUrl = res.data.url;
          this.LoginScene = res.data.scene_id;
          this.initWebSocket(res.data.scene_id)
          let qrcode = new QRCode('qrcode', {
            width: 132,
            height: 132,
            text: this.LoginUrl, // 二维码地址
            colorDark: "#000",
          })

        }).catch(err=>{
          console.log(err.data)
        })
      },


      initWebSocket(LoginScene) {
        const wsuri = `wss://www.kungfunion.com/ws/project/${LoginScene}/`;
        this.websock = new WebSocket(wsuri);//这里面的this都指向vue
        this.websock.onopen = this.websocketopen;
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onclose = this.websocketclose;
        this.websock.onerror = this.websocketerror;
      },
      websocketopen() {//打开
      },
      websocketonmessage(e) { //数据接收
        let ObjData = JSON.parse(e.data);
        ObjData.text.LoginState = true
        this.$store.commit("LoginStatus",ObjData)
        sessionStorage.setItem("T_ok",ObjData.text.token);
        sessionStorage.setItem("Username",ObjData.text.name);
      },
      websocketclose() {  //关闭

      },
      websocketerror() {  //失败
      },

      //退出登录
      Claselogin(){
        sessionStorage.clear()
        localStorage.clear()
        if(this.LoginState){
          sessionStorage.clear()
          let ObjData = {
            text:{
              name:'',
              token:'',
              LoginState:false
            }
          }
          this.$router.go(0)

          this.$store.commit("LoginStatus",ObjData)
        }
        $("#abc").css("display","none")
      },


      GoMenu(){
        this.$router.push({
          name:'MenuNav'
        })
      }
    },
    mounted() {
      document.onclick=function(){
        $(".LoginBox").css("display","none")
        $(".RegisterBox").css("display","none")
        $(".ForgetPass").css("display","none")
        $("#abc").css("display","none")
      }
    },
    created(){
      this.qrcode();
      if(sessionStorage.getItem("T_ok")){
        this.LoginState = true
        this.Username = sessionStorage.getItem("Username")
        $(".LoginBox").css("display","none")
        $(".RegisterBox").css("display","none")
        $(".ForgetPass").css("display","none")
      }else if(localStorage.getItem("T_ok")){
        this.LoginState = true
        this.Username = localStorage.getItem("Username")
        $(".LoginBox").css("display","none")
        $(".RegisterBox").css("display","none")
        $(".ForgetPass").css("display","none")
      }else{
        this.LoginState = false
      }
    },
    watch:{
      stateZTA(news){
        if(news.text.LoginState){
          $(".LoginBox").css("display","none")
          $(".RegisterBox").css("display","none")
          $(".ForgetPass").css("display","none")
          this.LoginState = true
          this.Username = sessionStorage.getItem("Username") ?sessionStorage.getItem("Username")  : localStorage.getItem("Username")
        }
      }
    },
    computed: {
      stateZTA() {
        return this.$store.state.LoginStateFT
      },
    },
    destroyed() {
      this.websock.close() //离开路由之后断开websocket连接
    },
  }
</script>

<style lang="scss">

  /*banner*/
  .PubLicHdeader{
    width: 100%;
    height: 100px;
    background: #333333;
    header{
      width: 1500px;
      height:100px;
      padding:25px 0;
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      margin-left: -750px;
      background: transparent;
      z-index: 2;
      top: 0;
      .LoginBtuG,.MenuBut{
        display: none;
        cursor: pointer;
      }
      .LogoBoxTwo{
        display: none;
      }
      .LogoBox{
        float: left;
        cursor: pointer;
        margin-top: 10px;
        img{
          display: block;
        }
      }
      .NavBox{
        float: right;
        ul{
        }
        li{
          float: left;
          position: relative;
          overflow: hidden;
          padding: 10px 0;
          /*盒子*/
          .BigLaBox{
            position: absolute;
            right: 0;
            top: 55px;
            opacity:1;
            background: #fff;
            transition: opacity .8s;
            z-index: 9999;
            padding-right: 0;
            min-width: 271px;
            /*登录*/
            .LoginBox{
              width: 542px;
              display: none;
              .loginCode{
                width: 239px !important;
                padding-left: 32px;
                #qrcode{
                  width: 160px;
                  height: 160px;
                  margin: 0 auto;
                }
              }
              .loginCode,.UserBox{
                width: 271px;
                float: left;
                height: 250px;
                padding-top: 30px ;
                .LoginTit{
                  font-size:14px;
                  font-family:MicrosoftYaHei;
                  color:rgba(51,51,51,1);
                  line-height:14px;
                  text-align: center;
                  margin-bottom: 20px;
                  white-space: nowrap;
                }
                .Kfcode{
                  margin: 0 auto;
                  display: block;
                }
                .UserInfo{
                  width: calc(100% - 68px);
                  border-left: 1px solid #E6E6E6;
                  height: 202px;
                  padding-left: 35px;
                  padding-top: 6px;
                  padding-right: 32px;
                  input{
                    width:200px;
                    height:30px;
                    background:rgba(230,230,230,1);
                    border: 0;
                    outline: none;
                    text-indent: 9px;
                  }
                  .FotPass{
                    overflow: hidden;
                    width: 100%;
                    margin-top: 3px;
                    .PassLeft,.PassRight{
                      float: left;
                      font-size:12px;
                      font-family:MicrosoftYaHei;
                      color:rgba(0,0,0,1);
                      line-height:14px;
                      .jizhu{
                        width: 14px;
                        height: 14px;
                        float: left;
                        margin-right: 4px;
                        border:1px solid rgba(0,0,0,1);
                        cursor: pointer;
                      }
                      .active{
                        background: url("../assets/img/PassA.png") no-repeat;
                        background-size: 100% 100%;
                      }
                    }
                    .PassRight{
                      float: right;
                      cursor: pointer;
                    }
                  }
                  .Login{
                    width:200px;
                    height:33px;
                    background:rgba(213,35,47,1);
                    border-radius:2px;
                    font-size:14px;
                    font-family:MicrosoftYaHei-Bold;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    line-height:33px;
                    text-align: center;
                    margin-top: 10px;
                    letter-spacing: 20px;
                    text-indent: 20px;
                    cursor: pointer;
                  }
                  .VXLoginBox{
                    overflow: hidden;
                    width: 100%;
                    margin-top: 10px;
                    .VXLogin{
                      float: left;
                      font-size:14px;
                      font-family:MicrosoftYaHei;
                      color:rgba(0,0,0,1);
                      line-height:21px;
                      cursor: pointer;
                    }
                    .Register{
                      float: right;
                      font-size:14px;
                      font-family:Adobe Heiti Std R;
                      font-weight:normal;
                      color:rgba(213,35,47,1);
                      line-height:21px;
                      cursor: pointer;
                    }
                  }
                }
              }
            }
            /*注册*/
            .ForgetPass{
              height: 333px !important;
            }
            .RegisterBox,.ForgetPass{
              width:200px;
              height:377px;
              background:rgba(255,255,255,1);
              padding: 2px 35px 5px 36px;
              display: none;
              .RegisterTit{
                text-align: center;
                font-size:14px;
                font-family:MicrosoftYaHei;
                color:rgba(51,51,51,1);
                line-height:68px;
              }
              input{
                width:200px;
                height:30px;
                background:rgba(230,230,230,1);
                display: block;
                line-height: 30px;
                text-indent: 11px;
                font-size:12px;
                font-family:MicrosoftYaHei;
                color:rgba(153,153,153,1);
                border: 0;
                outline: none;
              }
              input::placeholder {
                color:rgba(153,153,153,1);
                font-size: 12px;
              }
              .GetCoed{
                width:200px;
                height:30px;
                overflow: hidden;
                background:rgba(230,230,230,1);
                input{
                  width: 120px;
                  margin: 0;
                  float: left;
                }
                .getCodeBut{
                  width:80px;
                  font-size: 12px;
                  float: left;
                  line-height: 30px;
                  text-align: center;
                  cursor: pointer;
                  color: rgba(213,35,47,1);
                  &.active{
                    color: #666;
                  }
                }
              }
              .RegisterBut{
                width:200px;
                height:33px;
                background:rgba(213,35,47,1);
                border-radius:2px;
                font-size:14px;
                font-family:MicrosoftYaHei-Bold;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:33px;
                text-align: center;
                letter-spacing: 25px;
                text-indent: 25px;
                cursor: pointer;
              }
              .GoLogin{
                overflow: hidden;
                span{
                  line-height: 49px;
                  text-align: right;
                  font-size:14px;
                  font-family:Adobe Heiti Std R;
                  font-weight:normal;
                  color:rgba(213,35,47,1);
                  cursor: pointer;
                  float: right;
                }
              }
            }
          }
          /*首页二级菜单*/
          .AboutMenuC{
            background:rgba(255,255,255,1);
            border-radius:8px;
            padding: 16px 18px;
            position: absolute;
            left: 20px;
            top: 55px;
            opacity:0;
            transition: opacity .5s;
            box-shadow:0 10px 10px 0 rgba(201, 227, 214, 0.35);
            a{
              font-size:17px;
              font-family:Adobe Heiti Std R;
              font-weight:bold;
              color:#222222;
              line-height:17px;
              display: block;
              white-space: nowrap;
              margin-bottom: 18px;
              text-align: center;
              &:hover{
                color:rgba(196,0,0,1);
              }
              &:last-child{
                margin: 0;
              }
            }
          }
        }
        li:hover{
          overflow: initial;
          /*.BigLaBox{*/
          /*  opacity:1;*/
          /*}*/
          .AboutMenuC{
            opacity:1;
          }
        }
      }
      .MenuList{
        float: left;
        line-height: 17px;
        padding: 9px 0;
        margin-left: 24px;
        font-size:17px;
        font-family:MicrosoftYaHei;
        color: #fff;
        &:hover{
          color: red;
          border-bottom: 1px solid red;
        }
      }
    }
  }

  @media screen and (max-width: 1520px) {
    body {
      .PubLicHdeader{
        width: 100%;
        header{
          width: 1200px;
          margin-left: -600px;
        }
      }
    }
  }
  @media screen and (max-width: 510px) {
    body {
      .PubLicHdeader{
        width: 100%;
        height: 100px;
        background: #333333;
        header{
          width: 100%;
          background: #fff;
          height:64px;
          padding: 15px;
          left: 0;
          margin-left: 0;
          position: initial;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .LogoBoxTwo{
            margin: 0 auto;
            display: block;
            img{
              width: 90px;
              height: 19px;
            }
          }
          .LogoBox{
            display: none;
          }
          .LoginBtuG{
            font-size:16px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(230,0,18,1);
            display: block;
          }
          .MenuBut{
            width:22px;
            height:22px;
            display: block;
            cursor: pointer;
            img{
              width:22px;
              height:22px;
              display: block;
            }
          }
          .NavBox{
            display: none;
          }
        }
      }
    }
  }
</style>
