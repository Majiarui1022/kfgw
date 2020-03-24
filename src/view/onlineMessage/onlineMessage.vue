<template>
  <div class="onlineMessage_kf">
    <div class="onlineMessage">
      <div class="HerdeaS">
        <public-header></public-header>
      </div>
      <div class="HelpMenu">
        <div class="HelpCon">
          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">在线留言</div>
            </div>
          </div>
          <div class="MessageBox">
            <div class="User">
              <div class="One">
                <label for="">姓名</label>
                <input type="text" v-model="Username" id="username">
              </div>
              <div class="Two">
                <label for="">公司名称</label>
                <input type="text" v-model="ConmP">
              </div>
              <div class="Three">
                <label for="">联系电话</label>
                <input type="text" v-model="UserIPhone" id="usermabile">
              </div>
              <div class="Four">
                <label for="">邮箱</label>
                <input type="text" v-model="Useremail" id="Emaile">
              </div>
            </div>
            <div class="MessAgeTit">
              <label for="">标题</label>
              <input type="text" v-model="UserTit">
            </div>
            <div class="LiuMessage">
              <label for="">留言</label>
              <textarea name="" id="" cols="30" rows="10" v-model="UserMessage" id="userMassge"></textarea>
            </div>
            <div class="GetBox">
              <div class="GetMessage" @click="PostMessage">提交留言</div>
            </div>
          </div>
          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">留言</div>
            </div>
          </div>
          <div class="HelpList">
            <ul>
              <li v-for="(item,index) in MessageList">
                <span>问：{{item.content}}</span>
                <span v-if="item.reply"><i style="color: red;font-style: normal;">答：</i>{{item.reply}}</span>
              </li>
            </ul>
          </div>
          <div class="GdProduct">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="PageSize"
              @current-change="handleCurrentChange"
              :total="PrListNum">
            </el-pagination>
          </div>
        </div>
      </div>
      <FooterV></FooterV>
    </div>
  </div>
</template>

<script>
   import { Loading } from 'element-ui';
    import Swiper from 'swiper';
    import PublicHeader from "@/components/publicHeader";
    import FooterV from "@/components/FooterV";
    export default {
        name: "onlineMessage",
      components: {FooterV, PublicHeader},
      data(){
        return{
          PrListNum:0,        //有条
          PageSize:10,          //一页显示多少条
          Num:1,      //当前页码
          MessageList:[],
          Username:'',      //用户姓名
          ConmP:'',         //公司名称
          UserIPhone:'',    //用户手机号
          Useremail:'',    //用户邮箱
          UserTit:'',    //用户输入标题
          UserMessage:'',    //留言内容
        }
      },
      methods:{
        handleCurrentChange(val){
          this.Num = val

        },
        GetMessageList(){
          this.$http.get(this.$conf.env.LeaveMessage + `${this.Num}`).then(res=>{
            this.PrListNum = res.data.count
            this.MessageList = res.data.results
          }).catch(err=>{
            console.log(err)
          });
        },
        PostMessage(){
          if(this.Username === ''){
            this.$message.error('该项为必填项');
            $("#username").css("borderColor","red")
            return
          }else if(this.UserIPhone === ''){
            this.$message.error('该项为必填项');
            $("#username").css("borderColor","black")
            $("#usermabile").css("borderColor","red")
            return
          }else if(this.UserMessage  === ''){
            this.$message.error('该项为必填项');
            $("#username").css("borderColor","black")
            $("#usermabile").css("borderColor","black")
            $("#userMassge").css("borderColor","red")
            return
          }


          if(!(/^1[3456789]\d{9}$/.test(this.UserIPhone))){
            this.$message.error('请输入正确的手机号');
            $("#username").css("borderColor","black")
            $("#userMassge").css("borderColor","black")
            $("#usermabile").css("borderColor","red")
            return;
          }else if(this.Useremail !== ''){
            if(!( /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.Useremail))){
              this.$message.error('请输入正确的邮箱');
              $("#username").css("borderColor","black")
              $("#userMassge").css("borderColor","black")
              $("#usermabile").css("borderColor","black")
              $("#Emaile").css("borderColor","red")
              return;
            }

          }

          const LoadingS = Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          let params = {
            "title": this.UserTit,
            "name": this.Username,
            "company_name":this.ConmP ,
            "mobile": this.UserIPhone,
            "email": this.Useremail,
            "content": this.UserMessage,
          }
          this.$http.post(this.$conf.env.CreateMessage,params).then(res=>{

            $("#username").css("borderColor","black")
            $("#usermabile").css("borderColor","black")
            $("#userMassge").css("borderColor","black")
            $("#Emaile").css("borderColor","black")
            this.UserTit = this.Username =this.ConmP =this.UserIPhone =this.Useremail =this.UserMessage = ''
            this.$message({
              message: '留言成功，请等待审核',
              type: 'success'
            });
            LoadingS.close();
          }).catch(err=>{
            this.$message.error('错误');
            LoadingS.close();
            console.log(err)
          });
        }
      },

      mounted() {

        new Swiper ('.swiper-container', {
          // loop: true,
          // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination',
          // },
          // autoplay:true,
        })

      },
      created() {
          this.GetMessageList()
      }
    }
</script>

<style lang="scss">

  .onlineMessage{
    .HerdeaS{

      .IndexBanBox{
        width: 100%;
        .swiper-container{
          width: 100%;
          height: 100%;
        }
        .swiper-slide img{
          width: 100%;
          display: block;
        }
        .swiper-pagination-bullet{
          width:10px;
          height:10px;
          background:rgba(238,238,238,1);
          border-radius:50%;
          opacity: 1;
        }
        .swiper-pagination-bullet-active{
          width:36px;
          height:10px;
          background:rgba(228,0,18,1);
          border-radius:10px;
        }
      }
    }
    .HelpMenu{
      width: 100%;
      padding-bottom: 60px;
      .HelpCon{
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        .MessageBox{
          width: 100%;
          .User{
            margin-top: 22px;
            width: 100%;
            overflow: hidden;
            .One,.Two,.Three,.Four{
              float: left;
              margin-right: 60px;
            }
            .Four{
              margin-right: 0;
            }
            input{
              width:240px;
              height:40px;
              border:1px solid rgba(51,51,51,1);
              border-radius:2px;
              outline: none;
              text-indent: 10px;
            }
            label{
              font-size:18px;
              font-family:MicrosoftYaHei;
              color:rgba(51,51,51,1);
              line-height:40px;
              margin-right: 14px;
            }
          }
          .MessAgeTit{
            margin-top: 22px;
            width: 100%;
            label{
              font-size:18px;
              font-family:MicrosoftYaHei;
              color:rgba(51,51,51,1);
              line-height:40px;
              margin-right: 14px;
              float: left;
            }
            input{
              width:calc(100% - 100px);
              height:40px;
              border:1px solid rgba(51,51,51,1);
              border-radius:2px;
              outline: none;
              text-indent: 10px;
            }
          }
          .LiuMessage{
            margin-top: 22px;
            width: 100%;
            overflow: hidden;
            label{
              font-size:18px;
              font-family:MicrosoftYaHei;
              color:rgba(51,51,51,1);
              line-height:40px;
              margin-right: 14px;
              float: left;
            }
            textarea{
              width:calc(100% - 100px);
              height:200px;
              border:1px solid rgba(51,51,51,1);
              border-radius:2px;
              resize: none;
              text-indent: 32px;
              font-size: 16px;
              line-height: 24px;
            }
          }
          .GetBox{
            overflow: hidden;
            margin-top: 23px;
            .GetMessage{
              float: right;
              width:168px;
              height:50px;
              background:rgba(230,0,18,1);
              border-radius:2px;
              font-size:24px;
              font-family:MicrosoftYaHei;
              text-align: center;
              color:rgba(255,255,255,1);
              line-height:50px;
              cursor: pointer;
            }
          }
        }
        .ProductJ{
          width:800px;
          margin:0 auto;
          background:rgba(51,51,51,1);
          height: 74px;
          background: url("../../assets/img/WordBot.png") no-repeat bottom;
          text-align: center;
          line-height:74px;
          font-size: 44px;
          font-weight:bold;
          color:rgba(51,51,51,1);
        }
        .HelpList{
          width: 100%;
          ul{
            li{
              width: calc(100% - 10px);
              border-bottom: 1px solid #CCCCCC;
              font-family:MicrosoftYaHei;
              color:rgba(51,51,51,1);
              padding: 10px;
              span{
                font-size:20px;
                line-height:40px;
                /*cursor: pointer;*/
                display: block;
                font-weight:400;
              }
            }
          }
        }
        .GdProduct{
          margin-top: 38px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 1500px){
    .onlineMessage .HelpMenu{
      .HelpCon{
        width: 1000px;
        .LineOfTop{
          height: 90px;
          padding-top: 50px;
          .ProductJ{
            width: 650px;
            font-size: 36px;
          }
        }
        .MessageBox{
          .User{
            input{
              width: 152px;
            }
            label{
              margin-right: 10px;
            }
            .One,.Two,.Three,.Four{
              float: left;
              margin-right: 20px;
            }
            .Four{
              margin-right: 0;
            }
          }
          .MessAgeTit{
            label{
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 510px){
    .onlineMessage_kf{
      -webkit-overflow-scrolling: touch;
      .onlineMessage{
        .HelpMenu{
          padding-bottom: 20px;
          .HelpCon{
            width: 355px;
            .LineOfTop{
              height: 52px;
              padding-top: 12px;
              .ProductJ{
                width: 250px;
                margin: 0 auto;
                background: #333333;
                height: 24px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAAICAYAAAABZ5uuAAAAGXRFW…xVgMa2AgAAQIAAAAACBAAAQIAAAAACBAAAQIAAAADjngADAFmlAqskja+IAAAAAElFTkSuQmCC) no-repeat bottom;
                text-align: center;
                line-height: 24px;
                font-size: 14px;
                font-weight: bold;
                color: #333333;
              }
            }
            .MessageBox{
              .User{
                div{
                  overflow: hidden;
                  margin-right: 0 !important;
                  margin-bottom: 8px;
                }
                label{
                  line-height: 30px;
                  float: left;
                  font-size:15px;
                  font-family:MicrosoftYaHei;
                  font-weight:400;
                  width: calc(355px - 287px);
                  margin-right: 0;
                }
                input{
                  width:277px;
                  height:30px;
                  border:1px solid rgba(51,51,51,1);
                  border-radius:1px;
                  margin-right: 5px;
                  float: left;
                }
              }
              .MessAgeTit{
                margin-top: 9px;
                label{
                  line-height: 30px;
                  float: left;
                  font-size:15px;
                  font-family:MicrosoftYaHei;
                  font-weight:400;
                  width: calc(355px - 287px);
                  margin-right: 0;
                }
                input{
                  width:277px;
                  height:30px;
                  border:1px solid rgba(51,51,51,1);
                  border-radius:1px;
                  margin-right: 5px;
                }
              }
            }
            .LiuMessage{
              margin-top: 9px;
              label{
                line-height: 30px;
                float: left;
                font-size:15px;
                font-family:MicrosoftYaHei;
                width: calc(355px - 287px);
                margin-right: 0 !important;
              }
              textarea{
                width:277px !important;
                height:30px;
                border:1px solid rgba(51,51,51,1);
                border-radius:1px;
                margin-right: 5px;
              }
            }
            .GetBox{
              .GetMessage{
                width:84px !important;
                height:25px!important;
                font-size:12px!important;
                line-height:25px!important;
              }
            }
            .HelpList{
              ul{
                li{
                  span{
                    font-size:12px;
                    line-height:22px;
                  }
                }
              }
            }
            .GdProduct{
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
</style>
