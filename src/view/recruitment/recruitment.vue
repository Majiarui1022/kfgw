<template>
  <div class="recruitment_kf">
    <div class="recruitment">
      <div class="HerdeaS">
        <pub-lic-hdeader></pub-lic-hdeader>
      </div>
      <div class="RecruitementMenu">
        <div class="LineOfTop">
          <div class="ProductJ">
            <div class="ProductNei">招聘岗位</div>
          </div>
        </div>
        <div class="Post">
          <div class="swiper-containera">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in RecruitmentList">
                <a href="javascript:void(0)" :title="item.title" @click="GoDetal(item.id,7)">
                  <img :src="item.img" alt="">
                  <p class="recruit-name">{{item.title}}</p>
                  <div class="border-Bot"></div>
                  <div class="list">
                    <div class="row">
                      <div class="logo">
                        <img src="../../assets/img/addressLogo.png" alt="">
                      </div>
                      <div class="name">{{item.city}}</div>
                    </div>
                    <div class="row">
                      <div class="logo">
                        <img src="../../assets/img/education.png" alt="">
                      </div>
                      <div class="name">{{item.education}}</div>
                    </div>
                    <div class="row">
                      <div class="logo">
                        <img src="../../assets/img/years.png" alt="">
                      </div>
                      <div class="name">{{item.working_year}}</div>
                    </div>
                    <div class="row">
                      <div class="logo">
                        <img src="../../assets/img/salary.png" alt="">
                      </div>
                      <div class="name">{{item.salary}}</div>
                    </div>
                  </div>
                  <div class="getBut">查看详情</div>
                </a>
              </div>
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
    import FooterV from "@/components/FooterV";
    import PubLicHdeader from "@/components/publicHeader";
    export default {
        name: "recruitment",
      components: {PubLicHdeader, FooterV},
      data(){
        return{
            RecruitmentList:[]
        }
      },
      mounted() {
        new Swiper ('.swiper-container', {
          loop: true,
          autoplay:true,
          // loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })


      },
      methods:{
        GetRecuitmentList(){
          this.$http.get(this.$conf.env.Recuitment).then(res=>{
            this.RecruitmentList = res.data
            console.log(res.data)
            setTimeout(()=>{
              this.$nextTick(()=>{
                new Swiper('.swiper-containera', {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
                  loop: true,
                  autoplay:true,
                });
              },100)
              })

          }).catch(err=>{
            console.log(err)
          });

        },

        //招聘详情
        GoDetal(id,val){
          let Newopewn =  this.$router.resolve({
            name:'CompanyDetals',
            query:{
              id:id,
              category:val
            }
          })
          window.open(Newopewn.href, '_blank');
        }
      },
      created() {
          this.GetRecuitmentList();
      }
    }
</script>

<style lang="scss">

  .recruitment{
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
    .RecruitementMenu{
      padding-bottom: 50px;
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
      .Post{
        width: 1500px;
        margin: 50px auto 0;

        height:770px;
        overflow: hidden;
        .swiper-containera {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /*width:415px !important;*/
          /*height:760px !important;*/
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
          a{
            width:415px;
            height:760px;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 8px 0px rgba(44,48,49,0.7);
            border-radius:2px;
            padding: 20px 22px;
            box-sizing: border-box;
            img{
              width:371px;
              height:424px;
              display: block;
            }
            .recruit-name{
              width:100%;
              font-size:22px;
              color:rgba(51,51,51,1);
              line-height:32px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: center;
              margin-top: 36px;
            }
            .border-Bot{
              width:50px;
              height:2px;
              background:rgba(51,51,51,1);
              margin: 18px auto 40px;
            }
            .list{
              width: 100%;
              overflow: hidden;
              .row{
                width: 50%;
                float: left;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 10px;
                img{
                  width:39px;
                  height:39px;
                }
                .name{
                  font-size:18px;
                  color:rgba(51,51,51,1);
                  line-height:32px;
                }
              }
            }
            .getBut{
              width:180px;
              height:50px;
              border:1px solid rgba(51,51,51,1);
              border-radius:5px;
              margin: 0 auto;
              font-size:24px;
              color:rgba(51,51,51,1);
              line-height:50px;
              text-align: center;
              margin-top: 10px;
            }
          }
        }
        .swiper-slide-active,.swiper-slide-duplicate-active{
          transform: scale(1);
        }

      }
    }
  }

  @media screen and (max-width: 1500px){

    .recruitment .RecruitementMenu{
      .LineOfTop{
        height: 90px;
        padding-top: 50px;
        .ProductJ{
          width: 650px;
          font-size: 36px;
        }
      }
      /*.Post{*/
      /*  width: 1000px;*/
      /*}*/
    }
  }

  @media screen and (max-width: 510px){
    .recruitment_kf{
      -webkit-overflow-scrolling: touch;
      .recruitment{
        .RecruitementMenu{
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
          .Post{
            width: 355px;
            height:260px;
            margin: 0 auto;
            .swiper-slide{
              a{
                width: 100px;
                height: 250px;
                overflow: hidden;
                padding: 5px;
                img{
                  width: 100%;
                  height: 60px;
                }
                .recruit-name{
                  font-size: 14px;
                  line-height: 20px;
                  margin-top: 10px;
                }
                .border-Bot{
                  width: 20px;
                  height: 1px;
                  margin: 5px auto 10px;
                }
                .list{
                  .row{
                    clear: both;
                    width: 100%;
                    padding: 0 5px;
                    box-sizing: border-box;
                    justify-content: space-between;
                    margin-bottom: 5px;
                    .logo{
                      img{
                        width: 16px;
                        height: 16px;
                      }
                    }
                    .name{
                      font-size: 12px;
                      line-height: 14px;
                    }
                  }
                }
                .getBut{
                  width: 80px;
                  height: 30px;
                  font-size: 12px;
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
