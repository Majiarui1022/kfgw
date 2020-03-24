<template>
  <div class="MoreSoBox_kf">
    <div class="MoreSoBox">
    <public-header></public-header>
    <!--    应用方案-->
    <div class="menu">
      <div class="NarIndusInterPro">
        <div class="LineOfTop">
          <div class="ProductJ">
            <div class="ProductNei">应用方案</div>
          </div>
        </div>
        <div class="SearchBox">
          <div class="Search">
            <input type="text" placeholder="请输入问题" v-model="SearchW">
            <div class="SearchBtn" @click="SearchList"></div>
          </div>
        </div>
        <div class="ProList">
          <ul>
            <li v-for="(item,index) in MoreList" @click="GoDetal(item.id,6)">
              <a href="javascript:void(0)" :title="item.title">
                <img :src="item.img" alt="">
              </a>
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
        name: "MoreSolutions",
      components: {PublicHeader, FooterV},
      data(){
          return{
            PrListNum:60,        //有条
            PageSize:10,          //一页显示多少条
            Num:1,             //当前页码
            MoreList:[],        //应用方案列表
            SearchW:'',        //用户搜索输入内容
          }
      },
      methods:{
          //页码改变时
        handleCurrentChange(val){
          this.Num = val
          this.GetScheme()
        },
        //初始获取数据
        GetScheme(){
          this.$http.get(this.$conf.env.MoreScheme + `?page=${this.Num}`).then(res=>{
            this.PrListNum = res.data.count
            this.MoreList = res.data.results
          }).catch(err=>{
            console.log(err)
          });
        },
        //搜索
        SearchList(){
          if(this.SearchW === ''){
            this.Num = 1
            this.GetScheme()
            return false
          }
          this.$http.get(this.$conf.env.MoreScheme + `?search=${this.SearchW}`).then(res=>{
            this.PrListNum = res.data.count
            this.MoreList = res.data.results
          }).catch(err=>{
            console.log(err)
          });
        },

        //跳转到详情
        GoDetal(id,asd){
          let NewOpen = this.$router.resolve({
            name:'CompanyDetals',
            query:{
              id:id,
              category:asd
            }
          })
          window.open(NewOpen.href,'blank')
        }
      },
      created() {
          this.GetScheme()
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
            ul{
              overflow: hidden;
              li{
                float: left;
                width:552px;
                height:242px;
                border:1px solid rgba(102,102,102,1);
                margin-bottom: 12px;
                cursor: pointer;
                a,img{
                  width: 100%;
                  height: 100%;
                  display: block;
                }
                &:nth-child(2n){
                  float: right;
                }
              }
            }
            margin-bottom: 38px;
          }
          .GdProduct{
            display: flex;
            justify-content: center;
          }
        }
      }
  }


  @media screen and (max-width: 1500px) {
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
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 510px) {
    .MoreSoBox_kf{
      -webkit-overflow-scrolling: touch;
      .MoreSoBox{
        .menu{
          background: #F8F8F8;
          .NarIndusInterPro{
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
              width: 300px;
              ul{
                li{
                  width:300px;
                  height:110px;
                  border:1px solid rgba(102,102,102,1);
                }
              }
            }
          }
        }
      }
    }
  }

</style>
