<template>
  <div class="AboutFKBox">
    <div class="AboutKF">
      <div class="HerdeaS">
        <HeaderV></HeaderV>
        <div class="IndexBanBox">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in BannerListOneL" :key="index">
                <router-link  to="/" target="_blank">
                  <img :src="item.img" alt="">
                </router-link>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!--      关于我们-->
      <div class="AboutWe">
<!--        <img src="../../assets/img/aboutWe.png" alt="" style="display: none">-->
<!--        <img src="../../assets/img/about.png" alt="" class="AboutWe">-->

        <div class="about-wid">
          <div class="image">
            <img :src="AboutGkf.img" alt="">
          </div>
          <div class="About-Content">
            <p class="about-name">
              {{AboutGkf.content}}
            </p>
          </div>
        </div>



      </div>
      <!--      业务范围-->
      <div class="LineOfBusiness">
        <div class="NarLineOfBusiness">
          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">业务范围</div>
            </div>
          </div>
          <div class="LineOfBot">
            <ul>
              <li>
                <div class="row">
                  <img src="../../assets/img/fw.png" alt="">
                  <p>测试服务</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>我们拥有多年的测试及系统开发经验，并紧随当下的互联网+趋势，采用成熟的互联网技术，本着全心全意为客户服务的原则，提供整个产品生产全周期相关的一系列测试服务。主要包括产品研发测试服务、产品研发设计认证、产品生产及下线检测服务、质量部过程验证等。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../../assets/img/xt.png" alt="">
                  <p>实验室信息化管理系统</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>该项产品为我公司自主研发的TIMS实验室信息化管理系统。考虑到企业面临实验室信息化程度低、大量资源闲置及配备不合理、非标设备定制费用高等诸多问题，我们结合自身经验及优势推出该产品，TIMS实验室信息化管理系统能够整合实验室资源，提高测试效率、降低成本，并具有移动办公、资源共享、数据可视化、可搭载第三方测试模块等特点。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../../assets/img/gj.png" alt="">
                  <p>测试设备仿真工具</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>实验室测试设备老化，设备维护成本高，人工操作单一，数据连接不及时。我公司可以提供测试新设备及相关软件，帮助您完成设备升级改造，接入移动互联网，搭建数字化实验室。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../../assets/img/sj.png" alt="">
                  <p>设备升级与改造</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>由于开发人员开发进度、地点不同、局域网关限制等因素，很多情况下无法实现软、硬件数据直接对接。而测试设备仿真工具帮助解决了以上问题，开发人员可以预先设定仿真数据名称及值的范围，完成软、硬件测试流程，最后根据实际数据对接，实现多人员同时开发、数据无缝对接及转换。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../../assets/img/jm.png" alt="">
                  <p>工业互联网硬件搭建</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>主要提供搭建数字化实验室所需的相关硬件，比如我公司自主研发的互联网工业计算机、微集群数据服务器、控制器及基于Web功能的测试模块等。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../../assets/img/zx.png" alt="">
                  <p>培训咨询服务</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>我们结合产品及项目经验，总结了工业互联网测试领域丰富的学习课程，给相关的从业人员一个学习和交流的平台，共同推进工业互联网建设。</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--      公司概况-->
      <div class="CompanyPro">
        <div class="LineOfTop LintTopOne">
          <div class="ProductJ">
            <div class="ProductNei">公司概况</div>
          </div>
        </div>
        <div class="CompanyPro-fire">
          <div class="row" v-for="(item,index) in ConpanyOverList" :key="index">
            <div class="word">
              <p class="word-tit">{{item.title}}</p>
              <p class="W-con">{{item.description}}</p>
            </div>
            <div class="image">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
<!--        <img src="../../assets/img/gsgk.png" alt="" class="ImgGK">-->
        <!--       关于我们-->
        <div class="AboutWeTwo">
          <div class="ProductTit">
            <div class="ProductJ">
              <div class="ProductNei">关于我们</div>
            </div>
          </div>
          <div class="AboutBanner">
            <div class="swiper-containera">
              <div class="swiper-wrapper">
<!--                <div class="swiper-slide">-->
<!--                  <div class="Box">-->
<!--                    <div class="Img">-->
<!--                      <img src="../../assets/img/aboutas.png" alt="">-->
<!--                    </div>-->
<!--                    <div class="Word">-->
<!--                      <p>控福·上海</p>-->
<!--                      <p class="Content">控福（上海）智能科技有限公司是一家工业互联网测试装备企业，主要从产品测试角度为客户提供整车及零部件的测试与开发，并专注于汽车电子模块的整车测试开发。为客户提供汽车及制造领 域测试设备、实验室信息化管理系统、设备升级改造、产品测试仿真工具、工业互联网硬件搭建、培训咨询等一系列产品与服务。-->
<!--                      </p>-->
<!--                    </div>-->

<!--                  </div>-->
<!--                </div>-->
<!--                <div class="swiper-slide">-->
<!--                  <div class="Box">-->
<!--                    <div class="Img">-->
<!--                      <img src="../../assets/img/ch.png" alt="">-->
<!--                    </div>-->
<!--                    <div class="Word">-->
<!--                      <p>控福·长春</p>-->
<!--                      <p class="Content">2018年成立控福长春分公司，依托于长春汽车产业发展在全国的领先地位，控福持续扩大经营业务范围，不断提高自身技术优势，经过两年的努力，已成功为一汽红旗、一汽大众、长春检测中心提供测试设备及解决方案。</p>-->
<!--                    </div>-->

<!--                  </div>-->
<!--                </div>-->

                <div class="swiper-slide" v-for="(item,index) in ConpanyOverList" :key="index">
                  <div class="Box">
                    <div class="Img">
                      <img :src="item.img" alt="">
                    </div>
                    <div class="Word">
                      <p>{{item.title}}</p>
                      <p class="Content">{{item.description}}</p>
                    </div>

                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
      <!--      企业文化-->
      <div class="EnterpriseCult">
        <img src="../../assets/img/qywh.png" alt="">
        <img src="../../assets/img/qywhtwo.png" alt="" class="qywhtwo">
      </div>
      <!--      获得的专利-->
      <div class="GetPatent">
        <div class="LineOfTop">
          <div class="ProductJ">
            <div class="ProductNei">获得的专利</div>
          </div>
        </div>
        <div class="Slider">
          <div class="swiper-containerb">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../assets/img/zl1.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl2.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl3.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl4.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl5.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl1.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl2.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl3.png" alt=""></div>
              <div class="swiper-slide"><img src="../../assets/img/zl4.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <FooterV></FooterV>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    import HeaderV from "@/components/HeaderV";
    import FooterV from "@/components/FooterV";
    export default {
        name: "aboutwe",
      components: {FooterV, HeaderV},
      data(){
        return{
          BannerListOneL:[],
          ConpanyOverList:[],
          AboutGkf:{}
        }
      },
      mounted() {
        this.$http.get(this.$conf.env.AboutKF).then(res=>{
          this.AboutGkf = res.data
        }).catch(err=>{
          console.log(err)
        });

        this.$http.get(this.$conf.env.AllBanner + '?location=2&category=1').then(res=>{
          this.BannerListOneL = res.data
          setTimeout(()=>{
            new Swiper ('.swiper-container', {
              loop: true,
              autoplay:true,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            })
          })
        }).catch(err=>{
          console.log(err)
        });

        new Swiper('.swiper-containerb', {
          slidesPerView: 5,
          spaceBetween:0,
          centeredSlides: true,
          loop: true,
          autoplay:true,
        });


        this.$http.get(this.$conf.env.ConpanyOver).then(res=>{
          this.ConpanyOverList = res.data
        }).catch(err=>{
          console.log(err)
        });

        new Swiper('.swiper-containera', {
        });

      },
      created() {
        //记录访问次数
        this.$http.get(this.$conf.env.recordF + '2').then(res=>{
        }).catch(err=>{
          console.log(err)
        });
      }
    }
</script>

<style lang="scss">

  .AboutKF{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
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
    /*关于我们*/
    .AboutWe{
      width: 100%;
      padding: 50px 0;
      overflow: hidden;
      .LineOfTop{
        width: 100%;
        height: 230px;
        padding-top: 52px;
        box-sizing: border-box;
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
          color:#000;
        }
      }
      .about-wid{
        width: 1200px;
        margin: 0 auto;
        .About-Content{
          width:719px;
          height: 541px;
          margin-left:20px;
          float: left;
          background: url("../../assets/img/aboutbj.png") no-repeat;
          background-size: 100% 100%;
          .about-name{
            width: 100%;
            font-size:18px;
            color:rgba(51,51,51,1);
            line-height:50px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 6;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            margin-top: 88px;
          }
        }
      }
      .image{
        float: left;
        img{
          width:461px;
          height:549px;
          display: block;
        }
      }
      .AboutWe{
        display: none;
      }
    }
    /*业务范围*/
    .LineOfBusiness{
      width:100%;
      height:800px;
      background:#2C313F;
      .NarLineOfBusiness{
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        .LineOfTop{
          width: 100%;
          height: 230px;
          padding-top: 52px;
          box-sizing: border-box;
          .ProductJ{
            width:800px;
            margin:0 auto;
            background:rgba(51,51,51,1);
            height: 74px;
            background: url("../../assets/img/WordBJ.png") no-repeat bottom;
            text-align: center;
            line-height:74px;
            font-size: 44px;
            font-weight:bold;
            color:#FFFFFF;
          }
        }
        .LineOfBot{
          width: 100%;
          height: 491px;
          ul{
            width: 100%;
            overflow: hidden;
            height: 100%;
            li{
              width: 499px;
              height: 245px;
              float: left;
              border-right: 1px solid #2F343F;
              border-top: 1px solid #2F343F;
              background: #242B39;
              position: relative;
              overflow: hidden;
              &:nth-child(3n){
                border-right: 0;
              }
              &:nth-child(1){
                border-top: 0;
              }
              &:nth-child(2){
                border-top: 0;
              }
              &:nth-child(3){
                border-top: 0;
              }
              .row{
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                img{
                  display: block;
                  margin: 0 auto;
                  margin-top: 71px;
                  margin-bottom: 38px;
                }
                p{
                  font-size:24px;
                  font-family:MicrosoftYaHei;
                  color:rgba(255,255,255,1);
                  line-height:24px;
                  text-align: center;
                }
              }
              .cal{
                width: calc(100% - 100px);
                height: calc(100% - 16px);
                position: absolute;
                left: 0;
                top: 100%;
                z-index: 2;
                background: #5d6d9a ;
                transition: top .3s;
                padding: 8px 50px;
                p{
                  font-size: 24px;
                  text-align: center;
                  line-height: 48px;
                  color: #ffffff;
                  height: 48px;
                }
                span{
                  font-size:14px;
                  display: block;
                  line-height: 28px;
                  color: #ffffff;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -webkit-line-clamp: 6;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                }
              }
              &:hover{
                .cal{
                  top: 0;
                }
              }
            }
          }
        }
      }
    }
    /*公司概况*/
    .CompanyPro{
      width: 100%;
      margin-bottom: 20px;
      background: #FAF7FA;
      .CompanyPro-fire{
        width: 1200px;
        height: 1070px;
        margin: 0 auto;
        .row{
          width: 100%;
          position: relative;
          height: 500px;
          margin-bottom: 35px;
          &:first-child .word{
            left: 0;
            top: 109px;
          }
          &:first-child .image{
            right: 0;
            top: 0;
          }
          &:last-child .word{
            right: 0;
            top: 109px;
          }
          &:last-child .image{
            left: 0;
            top: 0;
          }
          .word{
            width:570px;
            height:370px;
            background:rgba(255,255,255,1);
            position: absolute;
            z-index: 2;
            padding: 30px;
            box-sizing: border-box;
            .word-tit{
              font-size:32px;
              color:rgba(51,51,51,1);
              line-height:32px;
              text-align: center;
              margin-bottom: 32px;
            }
            .W-con{
              font-size:16px;
              color:rgba(51,51,51,1);
              line-height:32px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 6;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
          }
          .image{
            width:747px;
            height:500px;
            position: absolute;
            img{
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
      .LineOfTop{
        display: block;
        width: 100%;
        height: 230px;
        padding-top: 52px;
        box-sizing: border-box;
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
          color:#000;
        }
      }
      img{
        width: 100%;
        display: block;
      }


      .AboutWeTwo{
        width: 100%;
        .ProductTit{
          width: 100%;height: 226px;padding-top: 76px;box-sizing: border-box
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
        .AboutBanner {
          display: none;
          height: 390px;
          .swiper-slide .Box{
            position: initial;
            left: 50%;
            top: 80px;
            height: 400px;
            width: 345px;
            margin-left: 0;
            margin: 0 auto;
            .Word{
              width: 325px;
              height: 168px;
              top: 50px;
              position: initial;
              padding:0 10px;
              p{
                font-size: 16px;
                line-height: 40px;
                text-align: center;
              }
              .Content{
                text-align: left;
                text-indent: 20px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                color: #333333;
                line-height: 20px;
                margin-top: -5px;
              }
            }
            .Img{
              width: 345px;
              height: 231px;
              top: 0;
              left:280px;
              z-index: 1;
              position: initial;
            }
          }
        }
      }
    }
    /*企业文化*/
    .EnterpriseCult{
      width: 100%;
      img{
        width: 100%;
        display: block;
      }
      .qywhtwo{
        display: none;
      }
    }
    /*获得的专利*/
    .GetPatent{
      width:100%;
      background:rgba(248,248,248,1);
      .LineOfTop{
        width: 100%;
        height: 230px;
        padding-top: 52px;
        box-sizing: border-box;
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
          color:#000;
        }
      }
      .Slider{
        width: 1500px;
        overflow: hidden;
        margin: 0 auto;
        .swiper-container {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          transition: 300ms;
          transform: scale(0.8);
        }
        .swiper-slide-active,.swiper-slide-duplicate-active{
          transform: scale(1);
        }
      }
    }
  }


  @media screen and (max-width: 1500px) {
    .AboutKF{
      //关于我们
      .AboutWe{
        .LineOfTop{
          height: 200px;
          padding-top: 50px;
          .ProductJ{
            width: 650px;
            .ProductNei{
              font-size: 36px;
            }
          }
        }
      }
      //业务范围
      .LineOfBusiness{
        width: 100%;
        height: 700px;
        .NarLineOfBusiness{
          width: 1200px;
          .LineOfTop{
            height: 200px;
            padding-top: 50px;
            .ProductJ{
              width: 650px;
              .ProductNei{
                font-size: 36px;
              }
            }
          }
          .LineOfBot{
            height: 451px;
            ul{
              li{
                width: 398px;
                height: 225px;
                .row{
                  p{
                    font-size: 18px;
                  }
                }
              }
            }
          }
        }
      }
      //公司概况
      .CompanyPro{
        .LineOfTop{
          height: 200px;
          padding-top: 50px;
          .ProductJ{
            width: 650px;
            .ProductNei{
              font-size: 36px;
            }
          }
        }
        .CompanyPro-fire{
          width: 1000px;
          height: 800px;
          .row{
            height: 374px;
            &:first-child .word{
              left: 26px;
              top: 80px;
            }
            &:first-child .image{
              right: 26px;
            }
            &:last-child .word{
              right: 26px;
              top: 80px;
            }
            &:last-child .image{
              left: 26px;
            }
            .word{
              width: 426px;
              height: 280px;
              .W-con{
                font-size:16px;
                color:rgba(51,51,51,1);
                line-height:32px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 4;
                display: -webkit-box;
                -webkit-box-orient: vertical;
              }
            }
            .image{
              width: 558px;
              height: 374px;
            }
          }
        }
        .AboutWeTwo{
          .ProductTit{
            height: 150px;
            padding-top: 50px;
            .ProductJ{
              width: 650px;
              .ProductNei{
                font-size: 36px;
              }
            }
          }
        }
      }
      //获得的专利
      .GetPatent{
        .LineOfTop{
          height: 200px;
          padding-top: 50px;
          .ProductJ{
            width: 650px;
            .ProductNei{
              font-size: 36px;
            }
          }
        }
        .Slider{
          width: 1200px;
          .swiper-slide{
            width: 240px !important;
            img{
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 510px) {

    .AboutFKBox{
      -webkit-overflow-scrolling: touch;
      .AboutKF{
        .HerdeaS{
          .swiper-pagination-bullet{
            width:6px !important;
            height:6px !important;
            background:rgba(238,238,238,1);
            border-radius:50%;
            opacity: 1;
          }
          .swiper-pagination-bullet-active{
            width:22px !important;
            height:6px !important;
            background:rgba(228,0,18,1);
            border-radius:10px;
          }
        }

        //关于控福
        .AboutWe{
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
              .ProductNei{
                font-size: 14px;
              }
            }
          }




          .about-wid{
            width: 350px;
            margin: 0 auto;
            .About-Content{
              width:210px;
              height: 148px;
              margin-left:14px;
              float: left;
              background: url("../../assets/img/aboutTit.png") no-repeat;
              background-size: 94% 20%;
              .about-name{
                width: 100%;
                color:rgba(51,51,51,1);
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 6;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                height:110px;
                font-size:12px;
                color:rgba(51,51,51,1);
                line-height:18px;
                margin-top: 30px;
              }
            }
          }
          .image{
            float: left;
            img{
              width:126px;
              height:148px;
              display: block;
            }
          }

          .AboutWe{
            display: block;
          }
        }
        //业务范围
        .LineOfBusiness{
          height: 288px;
          .NarLineOfBusiness{
            width: 345px;
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
                color: #FFFFFF;
                .ProductNei{
                  font-size: 14px;
                }
              }
            }
            .LineOfBot{
              ul{
                li{
                  width: 113px;
                  height: 110px;
                  .row{
                    img{
                      margin-top: 29px;
                      width: 25px;
                      height: 25px;
                      margin-bottom: 10px;
                    }
                    p{
                      font-size:12px;
                      line-height:18px;
                      color:rgba(255,255,255,1);
                      max-width: 72px;
                      margin: 0 auto;
                    }
                  }
                  &:hover{
                    .cal{
                      left: 0;
                      top: 100%;
                    }
                  }
                }
              }
            }
          }
        }
        //公司概况
        .CompanyPro{
          .CompanyPro-fire{
            display: none;
          }
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
              .ProductNei{
                font-size: 14px;
              }
            }
          }
          .LintTopOne{
            display: none;
          }
          .ImgGK{
            display: none;
          }
          img{
            display: none;
          }


         .AboutWeTwo{
           .ProductTit{
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
               .ProductNei{
                 font-size: 14px;
               }
             }
           }
           .AboutBanner {
             height: 390px;
             display: block;
             .swiper-slide .Box{
               position: initial;
               left: 50%;
               top: 80px;
               height: 400px;
               width: 345px;
               margin-left: 0;
               margin: 0 auto;
               .Word{
                 width: 325px;
                 height: 168px;
                 top: 50px;
                 position: initial;
                 padding:0 10px;
                 p{
                   font-size: 16px;
                   line-height: 40px;
                   text-align: center;
                 }
                 .Content{
                   text-align: left;
                   text-indent: 20px;
                   font-size: 12px;
                   font-family: Microsoft YaHei;
                   color: #333333;
                   line-height: 20px;
                   margin-top: -5px;
                 }
               }
               .Img{
                 width: 345px;
                 height: 231px;
                 top: 0;
                 left:280px;
                 z-index: 1;
                 position: initial;
                 img{
                   display: block;
                 }
               }
             }
           }
         }

        }
        /*企业文化*/
        .EnterpriseCult{
          width: calc(100% - 20px);
          margin: 10px 0;
          padding: 0 10px;
          img{
            display: none;
          }
          .qywhtwo{
            display: block;
          }
        }

        //获得的专利
        .GetPatent{
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
              .ProductNei{
                font-size: 14px;
              }
            }
          }
          .Slider{
            width: 350px;
            .swiper-slide{
              width: 72px !important;
              height: 101px;
              img{
                width: 100%;
                height: 100%;
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>
