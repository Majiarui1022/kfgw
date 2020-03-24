<template>
  <div class="MiddleBox">
    <div class="ProductMiddle">
      <div class="HerdeaS">
        <HeaderV></HeaderV>
        <div class="IndexBanBox">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in BannerListOne" :key="index">
                <img :src="item.img" alt="">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!--    工业互联网产品-->
      <div class="IndusInterPro">
        <div class="NarIndusInterPro">
          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">工业互联网产品</div>
            </div>
          </div>
          <div class="ProList">
            <ul>
              <li v-for="(item,index) in NarIndusInterPro" :key="index" @click="GoDetal(item.id,3)">
                <img :src="item.web_img" alt="">
                <div class="pro-detail">
                  <div class="name">{{item.name}}</div>
                  <div class="code">产品编号：{{item.code}}</div>
                  <div class="pro-con">产品介绍：{{item.description}}</div>
                </div>
              </li>
            </ul>
          </div>
          <router-link to="/IndustrialPro" style="display: block;" target="_blank" class="GdProduct">更多产品</router-link>
        </div>
      </div>
      <!--    广告位-->
      <div class="GgSas">
        <img src="../../assets/img/kubgfu.png" alt="">
      </div>
      <!--    互联网产品-->
      <div class="InterPro">
        <div class="NarInterPro">

          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">互联网产品</div>
            </div>
          </div>
          <div class="ProList">
            <ul>
              <li v-for="(item,index) in NarInterPro" :key="index" @click="GoDetal(item.id,4)">
                <img :src="item.web_img" alt="">
                <div class="pro-detail">
                  <div class="name">{{item.name}}</div>
                  <div class="code">产品编号：{{item.code}}</div>
                  <div class="pro-con">产品介绍：{{item.description}}</div>
                </div>
              </li>
            </ul>
          </div>
          <router-link to="/InternetPro" style="display: block" target="_blank" class="GdProduct">更多产品</router-link>
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
        name: "ProductMiddle",
      components: {FooterV, HeaderV},
      data(){
        return{
          NarIndusInterPro:[],     //工业互联网产品
          NarInterPro:[],          //互联网产品
          BannerListOne:[]
        }
      },
      mounted() {




        this.$http.get(this.$conf.env.AllBanner + '?location=3&category=1').then(res=>{
          this.BannerListOne = res.data
          setTimeout(()=>{
            new Swiper ('.swiper-container', {
              loop: true,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
              autoplay:true,
            })
          })
        }).catch(err=>{
          console.log(err)
        });
      },
      methods:{

        GetProdectList(){
            //工业互联网产品
            this.$http.get(this.$conf.env.ProductCentenr + `1`).then(res=>{
              this.NarIndusInterPro = res.data
            }).catch(err=>{
              console.log(err)
            });

          //互联网产品
          this.$http.get(this.$conf.env.ProductCentenr + `2`).then(res=>{
            this.NarInterPro = res.data
          }).catch(err=>{
            console.log(err)
          });
        },

        //跳转到详情
        GoDetal(id,cur){
          let NewOpen = this.$router.resolve({
            name:'CompanyDetals',
            query:{
              id:id,
              category:cur
            }
          })
          window.open(NewOpen.href,'blank')
        }
      },
      created() {
          this.GetProdectList()
      }
    }
</script>

<style lang="scss">

  .ProductMiddle{
    width: 100%;
    height: 100%;
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
    /*工业互联网产品*/
    .IndusInterPro{
      width: 100%;
      padding-bottom:67px ;
      .NarIndusInterPro{
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        .LineOfTop{
          width: 100%;
          height: 177px;
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
        .ProList{
          width: 1247px;
          margin: 0 auto;
          ul{
            overflow: hidden;
            li{
              float: left;
              width:552px;
              height:242px;
              border:1px solid rgba(102,102,102,1);
              margin-bottom: 12px;
              cursor: pointer;
              padding: 38px 90px 44px 25px;
              box-sizing: border-box;
              img{
                width:160px;
                height:160px;
                float: left;
                margin-right: 20px;
              }
              .pro-detail{
                .name{
                  font-size:20px;
                  color:rgba(51,51,51,1);
                  line-height:32px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .code{
                  font-size:16px;
                  color:rgba(102,102,102,1);
                  line-height:32px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .pro-con{
                  height:60px;
                  font-size:16px;
                  color:rgba(51,51,51,1);
                  line-height:32px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -webkit-line-clamp: 2;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                }
              }
              &:nth-child(2n){
                float: right;
              }
            }
          }
          margin-bottom: 38px;
        }
        .GdProduct{
          width:270px;
          height:80px;
          border:1px solid rgba(51,51,51,1);
          border-radius:40px;
          margin: 0 auto;
          font-size:32px;
          font-family:MicrosoftYaHei;
          color:rgba(51,51,51,1);
          line-height:80px;
          text-align: center;
          transition: background .2s,color.2s;
          cursor: pointer;
          &:hover{
            background: black;
            color: #fff;
          }
        }
      }
    }
    /*广告位*/
    .GgSas{
      width:100%;
      background:rgba(51,51,51,1);
      img{
        width: 100%;
        display: block;
      }
    }
    /*互联网产品*/
    .InterPro{
      width: 100%;
      padding-bottom:67px ;
      .NarInterPro{
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        .LineOfTop{
          width: 100%;
          height: 177px;
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
        .ProList{
          width: 1247px;
          margin: 0 auto;
          ul{
            overflow: hidden;
            li{
              float: left;
              width:552px;
              height:242px;
              border:1px solid rgba(102,102,102,1);
              margin-bottom: 12px;
              cursor: pointer;
              padding: 38px 90px 44px 25px;
              box-sizing: border-box;
              img{
                width:160px;
                height:160px;
                float: left;
                margin-right: 20px;
              }
              .pro-detail{
                .name{
                  font-size:20px;
                  color:rgba(51,51,51,1);
                  line-height:32px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .code{
                  font-size:16px;
                  color:rgba(102,102,102,1);
                  line-height:32px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .pro-con{
                  height:60px;
                  font-size:16px;
                  color:rgba(51,51,51,1);
                  line-height:32px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -webkit-line-clamp: 2;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                }
              }
              &:nth-child(2n){
                float: right;
              }
            }
          }
          margin-bottom: 38px;
        }
        .GdProduct{
          width:270px;
          height:80px;
          border:1px solid rgba(51,51,51,1);
          border-radius:40px;
          margin: 0 auto;
          font-size:32px;
          font-family:MicrosoftYaHei;
          color:rgba(51,51,51,1);
          line-height:80px;
          text-align: center;
          transition: background .2s,color.2s;
          cursor: pointer;
          &:hover{
            background: black;
            color: #fff;
          }
        }
      }
    }
  }


  @media screen and (max-width: 1500px) {
    .ProductMiddle{
      .IndusInterPro{
        .NarIndusInterPro{
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
          .ProList{
            width: 1000px;
            ul{
              li{
                width: 441px;
                height: 193.6px;
                padding: 30.4px 72px 35.2px 20px;
                img{
                  width:128px;
                  height:128px;
                  margin-right: 16px;
                }
                .pro-detail{
                  .name{
                    font-size:16px;
                    line-height:25px;
                  }
                  .code{
                    font-size:12px;
                    line-height:25px;
                  }
                  .pro-con{
                    height:48px;
                    font-size:12px;
                    line-height:25px;
                  }
                }
              }
            }
          }
          .GdProduct{
            width: 210px;
            height: 65px;
            border-radius:30px;
            font-size: 24px;
            line-height: 65px;
          }
        }
      }
      .InterPro{
        .NarInterPro{
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
          .ProList{
            width: 1000px;
            ul{
              li{
                width: 441px;
                height: 193.6px;
                padding: 30.4px 72px 35.2px 20px;
                img{
                  width:128px;
                  height:128px;
                  margin-right: 16px;
                }
                .pro-detail{
                  .name{
                    font-size:16px;
                    line-height:25px;
                  }
                  .code{
                    font-size:12px;
                    line-height:25px;
                  }
                  .pro-con{
                    height:48px;
                    font-size:12px;
                    line-height:25px;
                  }
                }
              }
            }
          }
          .GdProduct{
            width: 210px;
            height: 65px;
            border-radius:30px;
            font-size: 24px;
            line-height: 65px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 510px) {
    .MiddleBox{
      -webkit-overflow-scrolling: touch;
      .ProductMiddle{
        .IndusInterPro,.InterPro{
          padding-bottom: 13px;
          .NarIndusInterPro,.NarInterPro{
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
                color: #333333;
                .ProductNei{
                  font-size: 14px;
                }
              }
            }
            .ProList{
              width: 304px;
              margin-bottom: 0;
              ul{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                li{
                  width:300px;
                  height:110px;
                  border:1px solid rgba(102,102,102,1);
                  padding: 13px 19px 17px 13px;
                  img{
                    width:80px;
                    height:80px;
                  }
                  .pro-detail{
                    .name{
                      font-size:14px;
                      line-height:16px;
                    }
                    .code{
                      font-size:12px;
                      line-height:16px;
                      margin: 6px 0;
                    }
                    .pro-con{
                      height:30px;
                      font-size:12px;
                      line-height:16px;
                    }
                  }
                  &:nth-child(n+6){
                    display: none;
                  }
                }
              }
            }
            .GdProduct{
              width:135px;
              height:40px;
              border:1px solid rgba(51,51,51,1);
              border-radius:20px;
              font-size:16px;
              font-family:MicrosoftYaHei;
              color:rgba(51,51,51,1);
              line-height:40px;
            }
          }
        }
      }
    }
  }
</style>
