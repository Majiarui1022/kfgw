<template>
  <div class="ContactUs_kf">
    <div class="ContactUs">
    <div class="HerdeaS">
      <HeaderV></HeaderV>
      <div class="IndexBanBox">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in CustomerUsA">
              <img :src="item.img" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
<!--          <div class="swiper-pagination"></div>-->
        </div>
      </div>
    </div>
    <div class="ConMenu">
      <div class="LineOfTop">
        <div class="ProductJ">
          <div class="ProductNei">联系我们</div>
        </div>
      </div>
      <div class="CodeMe">
        <div class="AllBut">
          <ul>
            <li>
              <img src="../../assets/img/fwrx.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/kef.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/yx.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/ly.png" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div id="Map">
      </div>
    </div>
    <FooterV></FooterV>
  </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    import FooterV from "@/components/FooterV";
    import HeaderV from "@/components/HeaderV";
    export default {
        name: "ContactUs",
      components: {HeaderV, FooterV},
      data () {
        return {
          POM:14,
          CustomerUsA:[]
        }
      },
      mounted(){

          this.loadmap()
      },
      methods:{
        getBanner(){
          this.$http.get(this.$conf.env.AllBanner + '?location=6&category=1').then(res=>{
              this.CustomerUsA = res.data
              setTimeout(()=>{
                new Swiper ('.swiper-container', {
                  loop: true,
                  autoplay:true,
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                  },
                })
                },500)
              })
        },
        loadmap(){
          var _that = this
          var map = new BMap.Map("Map");
          var point = new BMap.Point(121.611192,31.18537);
          var marker = new BMap.Marker(point);  // 创建标注
          map.addOverlay(marker);              // 将标注添加到地图中
          map.centerAndZoom(point, _that.POM);
          var opts = {
            width : 200,     // 信息窗口宽度
            height: 70,     // 信息窗口高度
            title : "控福智能" , // 信息窗口标题
          }
          var infoWindow = new BMap.InfoWindow("地址：上海市浦东新区祥科路炬芯研发大厦", opts);  // 创建信息窗口对象
          marker.addEventListener("click", function(){
            _that.POM = 18
            _that.loadmap()

          });

          var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_RIGHT});// 左上角，添加比例尺
          var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
          var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮


          map.addControl(top_left_control);
          map.addControl(top_left_navigation);
          map.addControl(top_right_navigation);
          map.openInfoWindow(infoWindow,point); //开启信息窗口
          map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
          map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
        },
      },
      created() {

          this.getBanner()

          //记录访问次数
        this.$http.get(this.$conf.env.recordF + '5').then(res=>{

        }).catch(err=>{
          console.log(err)
        });

      }
    }
</script>

<style lang="scss">

  .ContactUs{
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
    .ConMenu{
      width: 100%;
      .LineOfTop{
        width: 100%;
        height: 190px;
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
      .CodeMe{
        width: 1256px;
        margin: 0 auto;
        margin-bottom: 75px;
        .AllBut{
          ul{
            overflow: hidden;
            li{
              float: left;
              width:240px;
              height:240px;
              border-radius:50%;
              margin-right: 95px;
              &:last-child{
                margin-right: 0;
              }
            }
          }
        }
      }
      #Map{
        width: 1256px;
        height:316px;
        margin: 0 auto;
        margin-bottom: 106px;
      }
    }
  }

  @media screen and (max-width: 1500px){
    .ContactUs .ConMenu{
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
      .CodeMe{
        width: 1000px;
        .AllBut{
          ul{
            li{
              width: 210px;
              height: 210px;
              margin-right: 50px;
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
  @media screen and (max-width: 510px){
    .ContactUs_kf{
      -webkit-overflow-scrolling: touch;
      .ContactUs{
        .ConMenu{
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
          .CodeMe{
            width: 313px;
            margin-bottom: 18px;
            .AllBut{
              ul{
                li{
                  width: 121px;
                  height: 121px;
                  margin-right: 0;
                  margin-bottom: 18px;
                  &:nth-child(2n){
                    float: right;
                  }
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
          #Map{
            width: 100%;
            height:270px;
            margin: 0 auto;
            margin-bottom: 22px;
          }
        }
      }
    }
  }
</style>
