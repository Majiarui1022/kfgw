<template>
  <div class="KFindex">
    <div class="KFindexBox">
      <!--      头部-->
      <div class="HerdeaS">
        <HeaderV></HeaderV>
        <div class="IndexBanBox">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in IndexFirstBanner">
                <router-link  to="/" target="_blank">
                  <img :src="item.img" alt="">
                </router-link>
              </div>

<!--              <div class="swiper-slide">-->
<!--                <img src="../assets/img/ban.png" alt="">-->
<!--              </div>-->
<!--              <div class="swiper-slide">-->
<!--                <img src="../assets/img/ban.png" alt="">-->
<!--              </div>-->
<!--              <div class="swiper-slide">-->
<!--                <img src="../assets/img/ban.png" alt="">-->
<!--              </div>-->
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!--        产品介绍-->
      <div class="ProductIntr">
        <div class="NerProductIntr">
          <div class="ProductTit">
            <div class="ProductJ">
              <div class="ProductNei">产品介绍</div>
            </div>
          </div>
          <div class="Product">
            <div style="height: 100%">
              <ul>
                <li v-for="(item,index) in ProduceJs" :key="index">
<!--                  <img :src="item.index_img" alt="">-->
<!--                  <div class="ProBut"  @click="GoDetal(item.id,item.category)"><span>详情</span><i></i></div>-->


                  <img :src="item.index_img" alt="" class="TitImg">
                  <p>{{item.name}}</p>
                  <span class="ProWords">{{item.description}}</span>
                  <div class="ProBut" @click="GoProductMiddle"><span>了解更多</span><i></i></div>
                </li>

                <li>
                  <img src="../assets/img/TIMS.png" alt="" class="TitImg">
                  <p>更多</p>
                  <span class="ProWords"></span>
                  <div class="ProBut" @click="GoProductMiddle"><span>了解更多</span><i></i></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--      应用案例及解决方案-->
      <div class="ApplyCase">
        <div class="NarApplyCase">
          <div class="ProductTit">
            <div class="ProductJ">
              <div class="ProductNei">应用案例及解决方案</div>
            </div>
          </div>
          <div class="ApplyCaseImg">
            <ul>
              <li
                v-on:mouseover="ChangeActiveClass(index)"
                :class="ActiveClass === index?'active':''"
                v-for="(item,index) in Scheme"
                :style="{background:'url('+item.index_img+')',backgroundSize: '824px 400px',backgroundPosition: '50%'}"
              >
                <p>
                  <span>{{item.title}}</span>
                </p>
                <h3>{{item.introduce}}</h3>
                <div class="ApplyCaseImgBut"  @click="GoDetal(item.id,6)"><span>了解详情</span> <i></i></div>
              </li>
<!--              <li v-on:mouseover="ChangeActiveClass(1)" :class="ActiveClass === 1?'active':''">-->
<!--                <p>-->
<!--                  <span>碳管测试系统</span>-->
<!--                </p>-->
<!--                <h3>转毂测试系统是我司为xx公司老旧设备升级与改造的一个试点工程</h3>-->
<!--                <div class="ApplyCaseImgBut"><span>了解更多</span> <i></i></div>-->
<!--              </li>-->
              <li v-on:mouseover="ChangeActiveClass(2)" :class="ActiveClass === 2?'active':''">
                <p>
                  <span>更多</span>
                </p>
                <h3></h3>
                <div class="ApplyCaseImgBut" @click="GoMoreSolutions"><span>了解更多</span> <i></i></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--关于我们-->
      <div class="AboutWe">
        <div class="ProductTit">
          <div class="ProductJ">
            <div class="ProductNei">关于我们</div>
          </div>
        </div>
        <div class="AboutBanner">
          <div class="swiper-containera">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="Box">
                  <div class="Img">
                    <img src="../assets/img/aboutas.png" alt="">
                  </div>
                  <div class="Word">
                    <p>控福·上海</p>
                    <p class="Content">控福（上海）智能科技有限公司是一家工业互联网测试装备企业，主要从产品测试角度为客户提供整车及零部件的测试与开发，并专注于汽车电子模块的整车测试开发。为客户提供汽车及制造领 域测试设备、实验室信息化管理系统、设备升级改造、产品测试仿真工具、工业互联网硬件搭建、培训咨询等一系列产品与服务。
                    </p>
                  </div>

                </div>
              </div>
              <div class="swiper-slide">
                <div class="Box">
                  <div class="Img">
                    <img src="../assets/img/ch.png" alt="">
                  </div>
                  <div class="Word">
                    <p>控福·长春</p>
                    <p class="Content">2018年成立控福长春分公司，依托于长春汽车产业发展在全国的领先地位，控福持续扩大经营业务范围，不断提高自身技术优势，经过两年的努力，已成功为一汽红旗、一汽大众、长春检测中心提供测试设备及解决方案。</p>
                  </div>

                </div>
              </div>
            </div>
            <!-- Add Arrows -->
<!--            <div class="swiper-button-next"></div>-->
<!--            <div class="swiper-button-prev"></div>-->
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
                 <img src="../assets/img/fw.png" alt="">
                 <p>测试服务</p>
               </div>
                <div class="cal">
                  <p></p>
                  <span>我们拥有多年的测试及系统开发经验，并紧随当下的互联网+趋势，采用成熟的互联网技术，本着全心全意为客户服务的原则，提供整个产品生产全周期相关的一系列测试服务。主要包括产品研发测试服务、产品研发设计认证、产品生产及下线检测服务、质量部过程验证等。 </span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../assets/img/xt.png" alt="">
                  <p>实验室信息化管理系统</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>该项产品为我公司自主研发的TIMS实验室信息化管理系统。考虑到企业面临实验室信息化程度低、大量资源闲置及配备不合理、非标设备定制费用高等诸多问题，我们结合自身经验及优势推出该产品，TIMS实验室信息化管理系统能够整合实验室资源，提高测试效率、降低成本，并具有移动办公、资源共享、数据可视化、可搭载第三方测试模块等特点。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../assets/img/gj.png" alt="">
                  <p>设备升级与改造</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>实验室测试设备老化，设备维护成本高，人工操作单一，数据连接不及时。我公司可以提供测试新设备及相关软件，帮助您完成设备升级改造，接入移动互联网，搭建数字化实验室。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../assets/img/sj.png" alt="">
                  <p>测试设备仿真工具</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>由于开发人员开发进度、地点不同、局域网关限制等因素，很多情况下无法实现软、硬件数据直接对接。而测试设备仿真工具帮助解决了以上问题，开发人员可以预先设定仿真数据名称及值的范围，完成软、硬件测试流程，最后根据实际数据对接，实现多人员同时开发、数据无缝对接及转换。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../assets/img/jm.png" alt="">
                  <p>工业互联网硬件搭建</p>
                </div>
                <div class="cal">
                  <p></p>
                  <span>主要提供搭建数字化实验室所需的相关硬件，比如我公司自主研发的互联网工业计算机、微集群数据服务器、控制器及基于Web功能的测试模块等。</span>
                </div>
              </li>
              <li>
                <div class="row">
                  <img src="../assets/img/zx.png" alt="">
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
      <!--      广告位-->
      <div class="Gaogao">
        <img src="../assets/img/gg.png" alt="">
      </div>
      <!--      专业专利-->
      <div class="Major">
        <div class="NarMajor">
          <div  class="MaBox">
            <img src="../assets/img/zl.png" alt="">
            <img src="../assets/img/zltwo.png" alt="" class="ZLTwo">
<!--            <ul>-->
<!--              <li></li>-->
<!--              <li></li>-->
<!--              <li></li>-->
<!--              <li></li>-->
<!--              <li></li>-->
<!--              <li></li>-->
<!--            </ul>-->
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
        name: "index",
      components: {FooterV, HeaderV},
      data(){
          return{
            ActiveClass:0,
            ProduceJs:[],   //产品介绍，
            Scheme:[],     //首页应用方案展示
            IndexFirstBanner:[],    //首页第一个轮播图
            IndexSecondBanner:[],   //首页第二个轮播图
            LoginScene:'',           //场景值
          }
      },
      methods:{
        ChangeActiveClass(a){
          this.ActiveClass = a
        },

        GoMoreSolutions(){
          this.$router.push({
            name:'MoreSolutions'
          })
        },

        GoProductMiddle(){
          this.$router.push({
            name:'ProductMiddle'
          })
        },

        //跳转到详情
        GoDetal(id,gsd){
          let NewOpen = this.$router.resolve({
            name:'CompanyDetals',
            query:{
              id:id,
              category:gsd
            }
          })
          window.open(NewOpen.href,'blank')
        },

        GetData(){


          //记录访问次数
          this.$http.get(this.$conf.env.recordF + '3').then(res=>{
          }).catch(err=>{
            console.log(err)
          });

          //index first banner
          this.$http.get(this.$conf.env.AllBanner + '?location=1&category=1').then(res=>{
            this.IndexFirstBanner = res.data

            setTimeout(()=>{
              new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                autoplay:true,
              },500)
            })
          }).catch(err=>{
            console.log(err)
          });

          //index second banner
          this.$http.get(this.$conf.env.AllBanner + '?location=1&category=2').then(res=>{
            this.IndexSecondBanner = res.data
            setTimeout(()=>{

              new Swiper('.swiper-containera', {
                autoplay:true,//等同于以下设置
                loop: true,
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
            })
          }).catch(err=>{
            console.log(err)
          });

          //产品介绍
          this.$http.get(this.$conf.env.ProIntroduce).then(res=>{
            this.ProduceJs = res.data
          }).catch(err=>{
            console.log(err)
          });

          //产品介绍(新)
          this.$http.get(this.$conf.env.proIntroduceNews).then(res=>{
          }).catch(err=>{
            console.log(err)
          });


          //首页应用方案展示
          this.$http.get(this.$conf.env.IndexScheme).then(res=>{
            this.Scheme = res.data
          }).catch(err=>{
            console.log(err)
          });






        },
      },
      created() {
          this.GetData()
      },
      mounted() {

        window.scrollTo(0,0);
      }


    }
</script>

<style lang="scss">

  .KFindexBox{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    margin: 0 auto;
    /*banner*/
    .HerdeaS{

      .IndexBanBox{
        width: 100%;
        .swiper-container{
          width: 100%;
          height: 100%;
        }
        .swiper-slide a{
          width: 100%;
          display: block;
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
    /*产品介绍*/
    .ProductIntr{
      width: 100%;
      height:706px;
      background: #fff;
      .NerProductIntr{
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        .ProductTit{
          width: 100%;height: 226px;padding-top: 76px;box-sizing: border-box
        }
        .ProductJ{
          width:800px;
          margin:0 auto;
          background:rgba(51,51,51,1);
          height: 74px;
          background: url("../assets/img/WordBot.png") no-repeat bottom;
          text-align: center;
          line-height:74px;
          font-size: 44px;
          font-weight:bold;
          color:rgba(51,51,51,1);
        }
        .Product{
          height: 454px;
          width: 100%;
          ul{
            width: 1204px;
            margin: 0 auto;
            overflow:hidden;
            padding: 10px;
            height: 100%;
            position: relative;
            li{
              float: left;
              width:222px;
              height:308px;
              background:rgba(255,255,255,1);
              box-shadow:0px 2px 10px 0px rgba(64,9,31,0.6);
              margin-right: 18px;
              margin-top: 27px;
              margin-left: 10px;
              padding:60px 26px 30px;
              transition: width .2s, height .2s,top .2s,margin-left.2s;
              position: absolute;
              top: 10px;
              &:last-child{
                background:rgba(255,255,255,1);
                box-shadow:0px 2px 10px 0px rgba(64,9,31,0.6);
                margin: 0;
                margin-top: 27px;
                left: 924px;
              }
              &:hover{
                width:245px !important;
                height:342px !important;
                /*padding:82px 57.5px 41px;*/
                top: 0 !important;
                z-index: 2 !important;
                margin-left: -3px !important;
              }
              &:nth-child(1){
                left: 10px;
              }
              &:nth-child(2){
                left: 308px;
              }
              &:nth-child(3){
                left: 610px;
              }
              &:nth-child(4){
                &:hover{
                  width:245px !important;
                  height:342px !important;
                  /*padding:82px 57.5px 41px;*/
                  top: 0 !important;
                  z-index: 2 !important;
                  margin-left: -14px !important;
                }
              }


              img{
                width: 100%;
                height:  100%;
                display: block;
              }
              .TitImg{
                display: block;
                width: 83px;
                height: 83px;
                margin: 0 auto;
              }
              p{
                font-size:24px;
                font-family:MicrosoftYaHei;
                font-weight:bold;
                color:rgba(0,0,0,1);
                margin: 15px 0;
                text-align: center;
              }
              .ProWords{
                font-size:14px;
                font-family:MicrosoftYaHei;
                font-weight:bold;
                color:rgba(102,102,102,1);
                line-height:24px;
                text-align: center;
                display: block;
                width: 190px;
                margin: 0 auto;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp:4;
                display:-webkit-box;
                -webkit-box-orient:vertical;
              }
              .ProBut{
                width:142px;
                height:42px;
                border:1px solid rgba(51,51,51,1);
                border-radius:5px;
                text-align: center;
                line-height: 42px;
                font-size:18px;
                position: absolute;
                left: 50%;
                bottom: 30px;
                margin-left: -71px;
                font-family:MicrosoftYaHei;
                color:rgba(51,51,51,1);
                cursor: pointer;
                overflow: hidden;
                transition:border-color .4s;
                span{
                  z-index: 2;
                  border: 0;
                  position: relative;
                  color: #000;
                  transition:color .2s;
                }
                i{
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 0;
                  width: 100%;
                  height: 100%;
                  background:transparent;
                  display: block;
                  transition:background .4s;
                }
                &:hover{
                  border-color:  #E8243B;
                  i{
                    background:  #E8243B;
                  }
                  span{
                    color: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }
    /*应用案例及解决方案*/
    .ApplyCase{
      width:100%;
      height:800px;
      background:rgba(35,40,56,1);
      .NarApplyCase{
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        .ProductTit{
          width: 100%;height: 226px;padding-top: 76px;box-sizing: border-box
        }
        .ProductJ{
          width:800px;
          margin:0 auto;
          background:rgba(51,51,51,1);
          height:74px;
          background: url("../assets/img/WordBJ.png") no-repeat bottom;
          text-align: center;
          line-height:74px;
          font-size: 44px;
          font-weight:bold;
          color:#FFFFFF;
        }
        .ApplyCaseImg{
          width: 1284px;
          margin: 0 auto;
          height: 396px;
          ul{
            width: 100%;
            height: 100%;
            overflow-y: hidden;
            li{
              float: left;
              width:210px;
              height:396px;
              background:rgba(0,0,0,1);
              transition: width .2s , height 1s;
              p{
                font-family:MicrosoftYaHei;
                color:rgba(255,255,255,1);
                margin: 0 auto;
                text-align: center;
                margin-top: 93px;
              }
              span{
                border-bottom: 2px solid #fff;
                line-height: 56px;
                font-size:28px;
                display: inline-block;

              }
              h3{
                font-size:16px;
                font-family:MicrosoftYaHei;
                color:rgba(255,255,255,1);
                font-weight: 400;
                line-height:32px;
                text-align: center;
                margin-top: 46px;
                display: none;
              }
              .ApplyCaseImgBut{
                width:142px;
                height:42px;
                border:1px solid rgba(255,255,255,1);
                border-radius:5px;
                font-family:MicrosoftYaHei;
                color:rgba(255,255,255,1);
                margin:82px auto 0 ;
                cursor: pointer;
                display: none;
                position: relative;
                text-align: center;
                overflow: hidden;
                span{
                  line-height:42px;
                  font-size:18px;
                  z-index: 2;
                  border: 0;
                  position: relative;
                }
                i{
                  position: absolute;
                  left: 0;
                  top: 42px;
                  z-index: 0;
                  width: 100%;
                  height:42px;
                  background: #fff;
                  display: block;
                  transition:top 0.2s;
                }
                &:hover{
                  i{
                    top:0;
                  }
                  span{
                    color: #000;
                  }
                }
              }
              &.active{
                width:824px;
                height:400px;
                background-size: 100% 100% !important;
                h3{
                  display: block;
                }
                .ApplyCaseImgBut{
                  display: block;
                }
              }
              &:nth-child(1){
                /*background: url("../assets/img/aaa.jpg") no-repeat;*/
                /*background-size: 824px 400px;*/
                /*background-position: 50%;*/
              }
              &:nth-child(2){
                /*background: url("../assets/img/bbb.png") no-repeat;*/
                /*background-size: 824px 400px;*/
                /*background-position: 50%;*/
              }
              &:nth-child(3){
                background: url("../assets/img/ccc.jpg") no-repeat;
                background-size: 824px 400px;
                background-position: 50%;
              }
            }
          }
        }
      }
    }
    /*关于我们*/
    .AboutWe{
      width: 100%;
      padding-bottom: 50px;
      .ProductTit{
        width: 100%;height: 226px;padding-top: 76px;box-sizing: border-box
      }
      .ProductJ{
        width:800px;
        margin:0 auto;
        background:rgba(51,51,51,1);
        height: 74px;
        background: url("../assets/img/WordBot.png") no-repeat bottom;
        text-align: center;
        line-height:74px;
        font-size: 44px;
        font-weight:bold;
        color:rgba(51,51,51,1);
      }
      .AboutBanner{
        width: 100%;
        height:920px;
        .swiper-containera {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #F8F8F8;
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
          position: relative;
          .Box{
            position: absolute;
            left: 50%;
            top: 200px;
            height: 500px;
            width: 1250px;
            margin-left: -625px;
            .Word{
              width:513px;
              height:370px;
              background:rgba(255,255,255,1);
              position:absolute;
              left: 0;
              top: 110px;
              padding: 0 30px;
              z-index: 3;
              p{
                font-size:32px;
                color:rgba(51,51,51,1);
                line-height:96px;
              }
              .Content{
                text-align: left;
                text-indent: 32px;
                font-size:16px;
                font-family:Microsoft YaHei;
                color:rgba(51,51,51,1);
                line-height:30px;
              }
            }
            .Img{
              width:747px;
              height:500px;
              position: absolute;
              top: 0;
              left: 502px;
              z-index: 1;
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
          .ProductTit{
            width: 100%;height: 226px;padding-top: 76px;box-sizing: border-box
          }
          .ProductJ{
            width:800px;
            margin:0 auto;
            background:rgba(51,51,51,1);
            height: 74px;
            background: url("../assets/img/WordBJ.png") no-repeat bottom;
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
    /*广告位*/
    .Gaogao{
      width:100%;
      background:rgba(0,0,0,1);
      img{
        width: 100%;
        display: block;
      }
    }
    /*专业专利*/
    .Major{
      width: 100%;
      .NarMajor{
        width: 1500px;
        padding: 69px 0;
        margin: 0 auto;
        box-sizing: border-box;
        .MaBox{
          width: 1248px;
          margin: 0 auto;
          img{
            width: 100%;
            display: block;
          }
          .ZLTwo{
            display: none;
          }
          ul{
            width: 100%;
            height: 100%;
            overflow: hidden;
            li{
              width: 416px;
              height: 50%;
              float: left;
              background: #2C313F;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {




    .KFindexBox{
      //产品介绍
      .ProductIntr{
        .NerProductIntr{
          width: 1200px;
          .ProductTit{
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
      }
      //应用案例及解决方案
      .ApplyCase{
        height: 700px;
        .NarApplyCase{
          width: 1200px;
          .ProductTit{
            height: 200px;
            padding-top: 50px;
            .ProductJ{
              width: 650px;
              .ProductNei{
                font-size: 36px;
              }
            }
          }
          .ApplyCaseImg{
            width: 984px;
            height: 310px;
            ul{
              li{
                width: 150px;
                height: 310px;
                &.active{
                  width: 684px;
                  height: 310px;
                }
                span{
                  font-size: 24px;
                  line-height: 40px;
                }
              }
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
      //关于我们
      .AboutWe{
        .ProductTit{
          .ProductJ{
            font-size: 36px;
          }
        }
        .AboutBanner {
          height: 700px;
          .swiper-slide .Box{
            position: absolute;
            left: 50%;
            top: 100px;
            height: 400px;
            width: 1000px;
            margin-left: -500px;
            .Word{
              width: 413px;
              height: 270px;
              p{
                font-size: 24px;
                line-height: 56px;
              }
              .Content{
                text-indent: 28px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                color: #333333;
                line-height: 28px;
              }
            }
            .Img{
              width: 647px;
              height: 400px;
              position: absolute;
              top: 0;
              left:402px;
              z-index: 1;
            }
          }
        }
      }

      //单图
      .Major{
        .NarMajor{
          width: 1200px;
          padding: 50px 0;
          .MaBox{
            width: 1200px;
          }
        }
      }
    }
  }



  @media screen and (max-width: 1200px) {
    .KFindexBox{
      .AboutWe .AboutBanner {
        height: 600px;
        .swiper-slide .Box{
          position: absolute;
          left: 50%;
          top: 80px;
          height: 400px;
          width: 800px;
          margin-left: -400px;
          .Word{
            width: 313px;
            height: 300px;
            top: 60px;
            p{
              font-size: 24px;
              line-height: 56px;
            }
            .Content{
              text-indent: 28px;
              font-size: 14px;
              font-family: Microsoft YaHei;
              color: #333333;
              line-height: 28px;
            }
          }
          .Img{
            width: 547px;
            height: 400px;
            position: absolute;
            top: 0;
            left:302px;
            z-index: 1;
          }
        }
      }
    }

  }

  @media screen and (max-width: 960px) {

    .KFindexBox .AboutWe .AboutBanner {
      height: 500px;
      .swiper-slide .Box{
        position: absolute;
        left: 50%;
        top: 80px;
        height: 400px;
        width: 600px;
        margin-left: -300px;
        .Word{
          width: 260px;
          height: 220px;
          top: 50px;
          p{
            font-size: 18px;
            line-height: 34px;
          }
          .Content{
            text-indent: 28px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            color: #333333;
            line-height: 20px;
          }
        }
        .Img{
          width: 347px;
          height: 300px;
          position: absolute;
          top: 0;
          left:280px;
          z-index: 1;
        }
      }
    }
  }

  @media screen and (max-width: 510px) {


    .KFindex{
      -webkit-overflow-scrolling: touch;
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
      .KFindexBox{
        .ProductIntr{
          height: 510px;
          .NerProductIntr{
            width: 345px;
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
            .Product{
              height: 460px;
              ul{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                li{
                  width: 136px !important;
                  height: 200px !important;
                  position: absolute;
                  margin-right: 24px;
                  margin-top:16px;
                  margin-left: 0;
                  padding: 20px 20px 0 20px;
                  box-sizing: border-box;
                  img{
                    width: 42px;
                    height: 42px;
                  }
                  p{
                    font-size:14px;
                    line-height:18px;
                  }
                  .ProWords{
                    display: none;
                  }
                  &:nth-child(1){
                    left: 20px;
                    top: 0;
                  }
                  &:nth-child(2){
                    left: 180px;
                    top: 0;
                  }
                  &:nth-child(3){
                    left: 20px;
                    top: 216px;
                    &:hover{
                      top: 216px !important;
                    }
                  }
                  &:nth-child(4){
                    left: 180px;
                    top: 216px;
                  }
                  &:nth-child(2n){
                    margin-right: 0;
                  }
                  &:last-child{
                    padding: 30px 0 0;
                    margin-top:16px;
                    box-sizing: border-box;
                    img{
                      width: 42px;
                      height: 42px;
                    }
                    p{
                      font-size:12px;
                      line-height:26px;
                    }
                    &:hover{
                      /*width: 136px !important;*/
                      /*height: 200px !important;*/
                      /*margin-left: 0px !important;*/
                      top: 216px !important;
                    }
                  }
                  .ProBut{
                    width: 71px;
                    height: 21px;
                    border-radius: 3px;
                    line-height: 21px;
                    font-size: 12px;
                    left: 50%;
                    top: 164px;
                    margin-left: -36px;
                    color: #333333;
                  }
                  &:hover{
                    width: 136px !important;
                    height: 200px !important;
                    margin-left: 0px !important;
                  }
                }
              }
            }
          }
        }

        .ApplyCase{
          height: 237px;
          .NarApplyCase{
            width: 345px;
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
                color: #fff;
                .ProductNei{
                  font-size: 14px;
                }
              }
            }
            .ApplyCaseImg{
              width: 100%;
              height: 174px;
              li{
                display: none;
                &:first-child{
                  display: block;
                  width: 100% !important;
                  height: 174px !important;
                  background-size: 345px 174px !important;
                  p{
                    margin-top: 40px;
                    span{
                      font-size: 12px;
                      line-height: 22px;
                    }
                  }
                  .ApplyCaseImgBut{
                    width: 70px;
                    height:24px;
                    margin: 16px auto 0;
                    span{
                      line-height: 24px;
                      font-size: 12px;
                    }
                  }
                }
              }
            }
          }
        }
        .AboutWe{
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
            }
          }
        }
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
                color: #fff;
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
        .Major{
          .NarMajor{
            width: 360px;
            padding: 0;
            .MaBox{
              width: 360px;
              img{
                width: 100%;
                height: 175px;
                display: none;
              }
              .ZLTwo{
                width: 100%;
                height: 100%;
                display: block;
              }
            }
          }
        }
      }
    }


    .KFindexBox .AboutWe .AboutBanner {
      height: 470px;
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
          }
          .Content{
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
</style>
