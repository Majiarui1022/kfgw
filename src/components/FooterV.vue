<template>
  <div>
    <!--      下载APP-->
    <div class="DownloadApp" @click="DownLoadApp">
      <img src="../assets/img/download.png" alt="a">
    </div>
    <!--      底部-->
    <footer>
      <div class="FooterBox">
        <div class="TitBox">
          <div class="FooterTit">
            <div class="FTitLeft">
              <p>专心、专业、专注</p>
              <p>为客户提供安全、可靠、稳定的服务</p>
            </div>
            <div class="FTitRight">
              <div class="GzhImgBox">
                <img src="../assets/img/gzh.png" alt="">
                <p>官方公众号</p>
              </div>
              <div class="xcxImgBox">
                <img src="../assets/img/xcx.png" alt="">
                <p>官方小程序</p>
              </div>
            </div>
          </div>
        </div>
<!--        联系我们-->
        <div class="CallMeBox">
          <div class="CallMe">
            <div class="CallMeLeft">
              <p>联系方式</p>
              <p>021-68360291</p>
              <p>info@kungfunion.com</p>
              <p>张先生&nbsp;&nbsp;&nbsp;18168094745</p>
              <p>地址：上海市浦东新区盛荣路88弄源创谷盛大天地5号楼-403室</p>
            </div>
            <div class="CallMeRight">
              <div class="ShareBox">
                <img src="../assets/img/fenxiang.png" alt="" style="width: 14px;height: 16px;margin-right: 0px;">
                分享至：
                <a href="javascript:void(0)" class="wxLogo" @click="ShareWeChats">
                  <img src="../assets/img/wxlogo.png" title="微信分享" style="cursor: pointer;">
<!--                  <div  class="VXcode"></div>-->
                </a>
                <img src="../assets/img/wblogo.png" title="微博分享" v-on:click="shareToSinaWB" style="cursor: pointer;">
              </div>
            </div>
          </div>
        </div>
<!--        版权-->
        <div class="banquan">
          <p>©2019 控福（上海）智能科技有限公司 版权所有</p>
          <p><img src="../assets/img/icon.png" alt="" style="vertical-align: middle"><a href="http://www.beian.miit.gov.cn">沪ICP备18031142号-13</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "FooterV",
      methods:{
        shareToSinaWB(){
          // /*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/
          //   title = "标题。";
          //   // pic = $(".p-img img").attr("src");
          //   rLink = "http://www.baidu.com";
          //
          //   let pic = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565598184682&di=79da4d1d517d3d33455ba037df86e114&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F33a6bcbce1b5d970d6b18cde674d29539d8ea94c2430f-DainXR_fw658'
          //   window.open("http://service.weibo.com/share/share.php?pic=" +encodeURIComponent(pic) +"&title=" +
          //     encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " "))+ "&url=" + encodeURIComponent(rLink),
          //     "分享至新浪微博",
          //     '_blank',"height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
          var _width = 600,
             _height = 600,
             _top = (screen.height-_height)/2,
             _left = (screen.width-_width)/2;
          var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?&appkey=895033136';     //真实的appkey，必选参数
              _shareUrl += '&url='+ encodeURIComponent('https://www.kungfunion.com');     //参数url设置分享的内容链接|默认当前页location，可选参数
              _shareUrl += '&title=' + encodeURIComponent('#控福（上海）智能科技有限公司#专注工业互联网测试领域，主要从产品测试角度为客户提供整车及零部件的测试与开发，并专注于汽车电子模块的整车测试开发。欢迎您致电业务咨询热线：021-68360290，我们将为您提供专业的产品和服务。');    //参数title设置分享的标题|默认当前页标题，可选参数
              _shareUrl += '&source=' + encodeURIComponent('');
               _shareUrl += '&sourceUrl=' + encodeURIComponent('');
              _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
               _shareUrl += '&pic=' + encodeURIComponent('https://www.kungfunion.com/qrcode/WechatIMG16.jpeg');  //参数pic设置图片链接|默认为空，可选参数
               window.open(_shareUrl,'width='+_width+',height='+_height+',top='+_top+',left='+_left+',toolbar=no,menubar=no,scrollbars=no, resizable=1,location=no,status=0');
        },
        ShareWeChats(){
          var ShareWeChart = this.$router.resolve({name:"ShareWeChart" });
          window.open(ShareWeChart.href, '_blank');
        },

        DownLoadApp(){
          this.$router.push({
            name:'DownLoadApp'
          })
        }
      }
    }
</script>

<style scoped lang="scss">


  /*下载APP*/
  .DownloadApp{
    width: 100%;
    position: relative;
    cursor: pointer;
    img{
      width: 100%;
      display: block;
    }
  }
  /*底部*/
  footer{
    width: 100%;
    height: 521px;
    background:rgba(41,54,70,1);
    .TitBox{
      width: 100%;
      height: 251px;
      border-bottom: 1px solid #3E4B5C;
      .FooterTit{
        width: 1250px;
        height: 100%;
        margin: 0 auto;
        padding-top: 27px;
        padding-bottom: 13px;
        box-sizing: border-box;
        overflow: hidden;
        .FTitLeft{
          float: left;
          p{
            font-size:42px;
            font-family:MicrosoftYaHei;
            color:rgba(255,255,255,1);
            line-height: 82px;
          }
        }
        .FTitRight{
          float: right;
          overflow: hidden;
          .GzhImgBox,.xcxImgBox{
            float: left;
            margin-left: 42px;
            img{
              width:160px;
              height:160px;
            }
            p{
              font-size:24px;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              line-height:50px;
              text-align: center;
            }
          }
        }
      }
    }
    .CallMeBox{
      width: 100%;
      height: 202px;
      border-bottom: 1px solid #3E4B5C;
      .CallMe{
        width: 1250px;
        height: 100%;
        margin: 0 auto;
        padding:12px 0;
        box-sizing: border-box;
        .CallMeLeft{
          float: left;
          p{
            font-size:16px;
            font-family:MicrosoftYaHei;
            color:rgba(255,255,255,1);
            line-height:34px;
          }
        }
        .CallMeRight{
          float: right;
          .ShareBox{
            margin-top: 145px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            color:rgba(255,255,255,1);
            img{
              width: 20px;
              height: 20px;
              vertical-align: middle;
            }
            .wxLogo{
              position: relative;
              display: inline-block;
              z-index: 3;
              margin-right: 4px;
              &:hover{
                .VXcode{
                  top: -174px;
                  opacity: 1;
                }
              }
            }
          }
          .VXcode{
            width: 170px;
            height: 170px;
            position: absolute;
            top: -15px;
            left: -48px;
            background: red;
            z-index: 2;
            transition: top .4s , opacity .4s;
            opacity: 0;
          }
        }
      }
    }
    .banquan{
      width: 100%;
      height: 56px;
      padding-top: 10px;
      p{
        font-size:14px;
        font-family:MicrosoftYaHei;
        color:rgba(255,255,255,1);
        line-height:25px;
        text-align: center;
        a{
          color:rgba(255,255,255,1);
          padding: 0 5px;
          border-right: 1px solid #fff;
          line-height: 14px;
          font-size: 14px;
          display: inline-block;
          &:last-child{
            border: 0;
          }
        }
        img{
          vertical-align: middle;
          margin-top: -6px;
          margin-right: 6px;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    footer{
      height: 474px;
      .FooterBox{
        .TitBox{
          height: 200px;
          .FooterTit{
            width: 1000px;
            .FTitLeft{
              p{
                font-size: 36px;
                line-height: 68px;
              }
            }
            .FTitRight{
              .GzhImgBox,.xcxImgBox{
                img{
                  width: 120px;
                  height: 120px;
                }
                p{
                  font-size: 18px;
                  line-height: 28px;
                }
              }
            }
          }
        }
        .CallMeBox{
          height: 196px;
          .CallMe{
            width: 1000px;
            .CallMeLeft{
              p{
                font-size: 16px;
                line-height: 28px;
              }
            }
            .CallMeRight{
              .ShareBox{
                margin-top: 110px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 510px) {
    footer{
      width: 100%;
      height: 250px;
      background:rgba(41,54,70,1);
      .TitBox{
        width: 100%;
        height: 58px !important;
        border-bottom: 1px solid #3E4B5C;
        .FooterTit{
          width: 343px !important;
          height: 100%;
          padding-bottom: 0;
          box-sizing: border-box;
          padding-top: 5px;
          .FTitLeft{
            float: left;
            p{
              font-size:12px !important;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              line-height: 20px !important;
              margin-bottom: 4px;
              &:last-child{
                margin-bottom: 0px;
              }
            }
          }
          .FTitRight{
            float: right;
            overflow: hidden;
            .GzhImgBox,.xcxImgBox{
              float: left;
              margin-left: 9px;
              img{
                width:32px !important;
                height:32px !important;
                display: block;
                margin: 0 auto;
              }
              p{
                font-size:12px !important;
                font-family:MicrosoftYaHei;
                color:rgba(255,255,255,1);
                line-height:20px !important;
                text-align: center;
              }
            }
          }
        }
      }
      .CallMeBox{
        width: 100%;
        height: 121px !important;
        border-bottom: 1px solid #3E4B5C;
        .CallMe{
          width: 343px !important;
          height: 100%;
          margin: 0 auto;
          padding:0;
          box-sizing: border-box;
          .CallMeLeft{
            float: left;
            p{
              font-size:12px !important;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              line-height:18px !important;
            }
          }
          .CallMeRight{
            float: right;
            display: none;
            .ShareBox{
              margin-top: 145px;
              font-size:14px;
              font-family:MicrosoftYaHei;
              color:rgba(255,255,255,1);
              img{
                width: 20px;
                height: 20px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .banquan{
        width: 100%;
        height: 32px;
        padding-top: 10px;
        p{
          font-size:12px;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
          line-height:26px;
          text-align: center;
          a{
            display: none;
          }
        }
      }
    }
  }
</style>
