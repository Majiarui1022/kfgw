<template>
  <div class="MoreSoBox_kf">
    <div class="MoreSoBox">
    <public-header></public-header>
    <!--    应用方案-->
    <div class="menu">
      <div class="NarIndusInterPro">
        <div class="LineOfTop">
          <div class="ProductJ">
            <div class="ProductNei">互联网产品</div>
          </div>
        </div>
        <div class="SearchBox">
          <div class="Search">
            <input type="text" placeholder="请输入问题" v-model="SearchW"  @keyup.enter="SearchList">
            <div class="SearchBtn" @click="SearchList"></div>
          </div>
        </div>
        <div class="ProList">
          <ul>
            <li v-for="(item,index) in InternetProList" :key="index"  @click="GoDetal(item.id,4)">
              <img :src="item.web_img" alt="">
              <div class="pro-detail">
                <div class="name">{{item.name}}</div>
                <div class="code">产品编号：{{item.code}}</div>
                <div class="pro-con">产品介绍：{{item.description}}</div>
              </div>
            </li>
          </ul>
        </div>
        <!--        <div class="GdProduct">我要分页</div>-->
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
  import FooterV from "@/components/FooterV";
  import PublicHeader from "@/components/publicHeader";
  export default {
    name: "InternetPro",
    components: {PublicHeader, FooterV},
    data(){
      return{
        PrListNum:0,        //有条
        PageSize:10,          //一页显示多少条
        Num:1,                  //当前页码
        InternetProList:[],    //互联网产品列表i
        SearchW:'',        //用户搜索输入内容
      }
    },
    methods:{
      handleCurrentChange(val){
        this.Num = val
        this.GetLineList()
      },
      GetLineList(){
        this.$http.get(this.$conf.env.IndustrialInternetPro + `page=${this.Num}&category=2`).then(res=>{
          this.PrListNum = res.data.count
          this.InternetProList = res.data.results
        }).catch(err=>{
          console.log(err)
        });
      },

      //搜索
      SearchList(){
        if(this.SearchW === ''){
          this.Num = 1
          this.GetLineList()
          return false
        }
        this.$http.get(this.$conf.env.IndustrialInternetPro + `category=2&search=${this.SearchW}`).then(res=>{
          this.PrListNum = res.data.count
          this.InternetProList = res.data.results
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
      this.GetLineList()
    }
  }
</script>

<style scoped lang="scss">

  .MoreSoBox{
    width: 100%;
    height: 100%;
    /*工业互联网产品*/
    .menu{
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
        .SearchBox{
          width: 1247px;
          overflow: hidden;
          margin:0 auto 16px;
          .Search{
            float: right;
            width:348px;
            height:40px;
            background:rgba(230,230,230,1);
            border-radius:2px;
            overflow: hidden;
            input{
              background:rgba(230,230,230,1);
              float: left;
              font-size:16px;
              font-family:MicrosoftYaHei;
              color:rgba(153,153,153,1);
              line-height:40px;
              border: 0;
              outline: none;
              width: 300px;
              height: 100%;
              text-indent: 10px;
            }
            .SearchBtn{
              width:48px;
              height:40px;
              float: left;
              background: url("../../assets/img/search.png") center no-repeat;
              cursor: pointer;
            }
          }
        }
        .ProList{
          width: 1247px;
          margin: 0 auto;
          margin-bottom: 38px;
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
        }
        .GdProduct{
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 1500px){
    .MoreSoBox .menu{
      .NarIndusInterPro{
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
        .SearchBox{
          width: 1000px;
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
      }
    }
  }
  @media screen and (max-width: 510px){

    .MoreSoBox_kf{
      -webkit-overflow-scrolling: touch;
      .MoreSoBox{
        .menu{
          background: #F8F8F8;
          padding-bottom: 14px;
          .NarIndusInterPro{
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
            .SearchBox{
              width: 345px;
              height: 44px;
              .Search{
                width:345px;
                height:40px;
                background:rgba(255,255,255,1);
                box-shadow:0px 1px 3px 0px rgba(40,40,40,0.2);
                border-radius:20px;
                input{
                  background:rgba(255,255,255,1);
                }
                .SearchBtn{
                  width: 45px;
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
          }
        }
      }

    }
  }
</style>
