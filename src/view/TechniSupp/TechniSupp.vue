<template>
  <div class="TechniSupp_kf">
    <div class="TechniSupp">
    <div class="HerdeaS">
      <HeaderV></HeaderV>
      <div class="IndexBanBox">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in BannerListOne">
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
            <div class="ProductNei">工业互联网产品支持</div>
          </div>
        </div>
        <div class="ProList">
          <ul>
            <li v-for="(item,index) in IndusInterPro" :key="index">
              <a href="javascript:void(0)" :title="item.hardware_product" @click="GoProDetal(item.id,1)">
                <img :src="item.img" alt="">
              </a>
            </li>
          </ul>
        </div>
        <router-link to="/IndustrialProzc" style="display: block;" target="_blank" class="GdProduct">更多</router-link>
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
            <div class="ProductNei">互联网产品支持</div>
          </div>
        </div>
        <div class="ProList">
          <ul>
            <li v-for="(item,index) in InterPro" :key="index">
              <a href="javascript:void(0)" :title="item.hardware_product" @click="GoProDetal(item.id,2)">
                <img :src="item.img" alt="">
              </a>
            </li>
          </ul>
        </div>
        <router-link style="display: block" target="_blank" to="/InternetPorzc" class="GdProduct">更多</router-link>
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
    name: "TechniSupp",
    components: {FooterV, HeaderV},
    data(){
      return{
        IndusInterPro:[],        //工业互联网产品
        InterPro:[],        //工业互联网产品
        BannerListOne:[]
      }
    },
    mounted() {



      this.$http.get(this.$conf.env.AllBanner + '?location=4&category=1').then(res=>{
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
      GetTechniSupp(){

        //记录访问次数
        this.$http.get(this.$conf.env.recordF + '4').then(res=>{
        }).catch(err=>{
          console.log(err)
        });

        //工业互联网产品
        this.$http.get(this.$conf.env.AllSupport + '1').then(res=>{
          this.IndusInterPro = res.data
        }).catch(err=>{
          console.log(err)
        });

          //互联网产品
        this.$http.get(this.$conf.env.AllSupport + '2').then(res=>{
          this.InterPro = res.data
        }).catch(err=>{
          console.log(err)
        });

      },


      //产品技术支持详情展示
      GoProDetal(id,val){
          let NewOpen = this.$router.resolve({
            name:'technicalSupTxt',
            query:{
              id:id,
              category:val
            }
          })
        window.open(NewOpen.href,'blank')
      }
    },
    created() {

      this.GetTechniSupp()
    }
  }
</script>


<style lang="scss">

  .TechniSupp{
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
          width: 1272px;
          margin: 0 auto;
          ul{
            overflow: hidden;
            li{
              float: left;
              width:200px;
              height:242px;
              border:1px solid rgba(102,102,102,1);
              margin-bottom: 12px;
              cursor: pointer;
              margin-right: 62px;
              a,img{
                width: 100%;
                height: 100%;
                display: block;
              }
              &:nth-child(5n){
                margin-right:0;
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
          width: 1272px;
          margin: 0 auto;
          ul{
            overflow: hidden;
            li{
              float: left;
              width:200px;
              height:242px;
              border:1px solid rgba(102,102,102,1);
              margin-bottom: 12px;
              cursor: pointer;
              margin-right: 62px;
              a,img{
                width: 100%;
                height: 100%;
                display: block;
              }
              &:nth-child(5n){
                margin-right:0;
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

  @media screen and (max-width: 1500px){
    .TechniSupp{
      .IndusInterPro{
        .NarIndusInterPro{
          width: 1000px;
          .LineOfTop{
            height: 170px;
            padding-top: 50px;
            .ProductJ{
              width: 650px;
              font-size: 36px;
            }
          }
          .ProList{
            width: 1000px;
            ul{
              li{
                width: 160px;
                height: 193.6px;
                margin-right: 40px;
              }
            }
          }
          .GdProduct{
            width: 200px;
            height: 50px;
            border-radius: 30px;
            font-size: 28px;
            line-height: 50px;
          }
        }
      }
      .InterPro{
        .NarInterPro{
          width: 1000px;
          .LineOfTop{
            height: 170px;
            padding-top: 50px;
            .ProductJ{
              width: 650px;
              font-size: 36px;
            }
          }
          .ProList{
            width: 1000px;
            ul{
              li{
                width: 160px;
                height: 193.6px;
                margin-right: 40px;
              }
            }
          }
          .GdProduct{
            width: 200px;
            height: 50px;
            border-radius: 30px;
            font-size: 28px;
            line-height: 50px;
          }
        }
      }
    }

  }
  @media screen and (max-width: 510px){
    .TechniSupp_kf{
      -webkit-overflow-scrolling: touch;
      .TechniSupp{
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
                  margin-right: 0;
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
