<template>
  <div class="industryInformBox_kf">
    <div class="industryInformBox">
      <public-header></public-header>
      <div class="industryMenu">
        <div class="industryCon">
          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">行业资讯</div>
            </div>
          </div>
          <div class="industryList">
            <ul>
              <li v-for="(item,index) in HotInforList" @click="GoDetal(item.id)">
                <div class="InduStHover">
                  <div class="ImgBox">
                    <img :src="item.img" alt="">
                  </div>
                  <div class="RightW">
                    <p>{{item.title}}</p>
                    <span>{{item.info_detail}}{{item.info_detail}}{{item.info_detail}}{{item.info_detail}}</span>
                    <div class="DataTime">
                      <a href="">{{item.update_time}}</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
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
      <FooterV></FooterV>
    </div>
  </div>
</template>

<script>
    import FooterV from "@/components/FooterV";
    import PublicHeader from "@/components/publicHeader";
    export default {
        name: "industryInform",
      components: {PublicHeader, FooterV},
      data(){
        return{
          PrListNum:0,        //有多少条
          PageSize:5,          //一页显示多少条
          Num:1,              //第几页
          HotInforList:[],     //所有动态
        }
      },
      methods:{

        handleCurrentChange(val){
          this.Num = val
          this.HotInformationList(val)
        },



        HotInformationList(val){
          //index first banner
          this.$http.get(this.$conf.env.AllHotInformation + `${this.Num}`).then(res=>{
            this.PrListNum = res.data.count
            this.HotInforList = res.data.results
          }).catch(err=>{
            console.log(err)
          });
        },


        //跳转到详情
        GoDetal(id){
         let NewOpen =  this.$router.resolve({
            name:'CompanyDetals',
            query:{
              id:id,
              category:2
            }
          })
          window.open(NewOpen.href,'blank')
        }

      },
      created() {
          this.HotInformationList(1)
      }
    }
</script>

<style scoped lang="scss">


  .industryInformBox{
    .industryMenu{
      width: 100%;
      .industryCon{
        width: 1500px;
        height: 100%;
        margin: 0 auto;
        .LineOfTop{
          width: 100%;
          height: 140px;
          padding-top: 48px;
          box-sizing: border-box;
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
        .industryList{
          width: 100%;
          ul{
            li{
              width: 100%;
              height: 136px;
              border-bottom: 1px solid #CCCCCC;
              overflow: hidden;
              padding:25px 0;
              .InduStHover{
                width: 100%;
                height: 100%;
                cursor: pointer;
                .ImgBox{
                  width:131px;
                  height:131px;
                  border-radius:5px;
                  padding: 2px 10px 2px 0;
                  float: left;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
                .RightW{
                  width: calc(100% - 230px);
                  float: left;
                  height: 100%;
                  padding-left: 10px;
                  padding-right: 78px;
                  border-left: 1px solid #666;
                  p{
                    width:100%;
                    font-size:18px;
                    font-family:MicrosoftYaHei;
                    color:rgba(51,51,51,1);
                    line-height:18px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin-bottom: 14px;
                  }
                  span{
                    width:100%;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(153,153,153,1);
                    line-height:28px;
                    display: block;
                    text-indent: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                  }
                  .DataTime{
                    overflow: hidden;
                    a{
                      float: right;
                      font-size:14px;
                      font-family:MicrosoftYaHei;
                      color:rgba(153,153,153,1);
                      line-height:14px;
                      margin-top: 10px;
                    }
                  }
                }
                &:hover{
                  p{
                    color: #dc001f;
                  }
                  span{
                    color: #002072;
                  }
                }
              }
            }
          }
        }
      }
      .GdProduct{
        display: flex;
        justify-content: center;
        margin: 50px 0;
      }
    }
  }

  @media screen and (max-width: 1500px){
    .industryInformBox .industryMenu{
      .industryCon{
        width: 1000px;
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
    }
  }
  @media screen and (max-width: 510px){
    .industryInformBox_kf{
      -webkit-overflow-scrolling: touch;
      .industryInformBox{
        background: #F8F8F8;
        .industryMenu{
          background: #F8F8F8;
          .industryCon{
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
                .ProductNei{
                  font-size: 14px;
                }
              }
            }
            .industryList{
              ul{
                li{
                  width: 100%;
                  height: 100px;
                  border-bottom: 0;
                  overflow: hidden;
                  padding: 5px;
                  box-sizing: border-box;
                  background:rgba(255,255,255,1);
                  box-shadow:0px 1px 5px 0px rgba(40,40,40,0.2);
                  border-radius:3px;
                  margin-bottom: 8px;
                  .InduStHover{
                    .ImgBox{
                      width:90px;
                      height:90px;
                      border-radius:5px;
                    }
                    .RightW{
                      width: calc(100% - 100px);
                      float: left;
                      height: 100%;
                      padding: 0;
                      border-left: 0;
                      position: relative;
                      span{
                        display: none;
                      }
                      p{
                        font-size: 14px;
                        font-family: MicrosoftYaHei;
                        color: #333333;
                        line-height: 22px;
                        text-indent: 0;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 3;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        white-space: pre-wrap;
                      }
                      .DataTime{
                        right: 0;

                        font-size:12px;
                        font-family:SimHei;
                        color:rgba(102,102,102,1);
                      }
                    }
                  }
                }
              }
            }
          }
          .GdProduct{
            margin: 20px 0;
          }
        }
      }
    }
  }
</style>
