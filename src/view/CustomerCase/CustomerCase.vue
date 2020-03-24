<template>
  <div class="CustomerCaseBox_KF">
    <div class="CustomerCaseBox">
    <div class="HerdeaS">
      <HeaderV></HeaderV>
      <div class="IndexBanBox">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in CustomerCaseA">
              <img :src="item.img" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="LineOfTop">
      <div class="ProductJ">
        <div class="ProductNei">客户案例</div>
      </div>
    </div>
    <div class="CustomerImg">
      <img :src="CaseImg" alt="">
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
        name: "CustomerCase",
      components: {FooterV, HeaderV},
      data(){
        return{
          CaseImg:'',
          CustomerCaseA:[]
        }
      },

      mounted() {




      },
      methods:{
        getCistormerCaseImg(){
          //记录访问次数
          this.$http.get(this.$conf.env.recordF + '3').then(res=>{
          }).catch(err=>{
            console.log(err)
          });


          this.$http.get(this.$conf.env.CstomerCase).then(res=>{
            this.CaseImg = res.data[0].img
          }).catch(err=>{
            console.log(err)
          });

          this.$http.get(this.$conf.env.AllBanner + '?location=5&category=1').then(res=>{
            this.CustomerCaseA = res.data
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

        }
      },
      created() {
          this.getCistormerCaseImg()
      }
    }
</script>

<style lang="scss">

  .CustomerCaseBox{
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
    .CustomerImg{
      width: 1500px;
      margin: 0 auto 50px;
      img{
        display: block;
        max-width: 100%;
        margin:0 auto;
      }
    }
  }


  @media screen and (max-width:1500px) {
    .CustomerCaseBox{

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
      .CustomerImg{
        width: 1000px;
      }
    }
  }

  @media screen and (max-width: 510px) {
    .CustomerCaseBox_KF{
      -webkit-overflow-scrolling: touch;
      .CustomerCaseBox{
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
        .CustomerImg{
          width: 345px;
        }
      }
    }
  }
</style>
