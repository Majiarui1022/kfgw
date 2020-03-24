<template>
  <div class="DownLoadMiddle">
    <div class="DownLoadBox">
      <public-header></public-header>
      <div class="DownLoadMenu">
        <div class="DownLoadCon">
          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">下载中心</div>
            </div>
          </div>
          <div class="SearchBox">
            <div class="Search">
              <input type="text" v-model="MessageWord" placeholder="请输入问题" @keyup.enter="SearchWord">
              <div class="SearchBtn" @click="SearchWord"></div>
            </div>
          </div>
          <div class="DownLoadBox">
            <ul>
              <li v-for="(item,index) in DownLoadPro" :key="index">
                <img :src="item.img" alt="">
                <p class="name">{{item.title}}</p>
                <p class="load-con">{{item.description}}</p>
                <div class="DownLoadBut" @click="DownLoadFile(item.id,index)">点击下载</div>
              </li>
            </ul>
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
      </div>
      <FooterV></FooterV>
    </div>
  </div>
</template>
<script>
  import PublicHeader from "@/components/publicHeader";
  import FooterV from "@/components/FooterV"
    export default {
        name: "DownLoadMiddle",
      components: {FooterV, PublicHeader},
      data(){
        return{
          PrListNum:12,        //有条
          PageSize:12,          //一页显示多少条
          Num:1,
          DownLoadPro:[],
          MessageWord:'',
          asdasd:{}
        }
      },
      methods:{
        handleCurrentChange(val){
          this.Num = val
          this.GetHelpList()
        },
        GetHelpList(){
          this.$http.get(this.$conf.env.DownLoadFileList + `page=${this.Num}`).then(res=>{
          this.PrListNum = res.data.count
          this.DownLoadPro = res.data.results
          }).catch(err=>{
            console.log(err)
          });

        },







        SearchWord(){
          if(this.MessageWord === ''){
            this.GetHelpList()
            return
          }
          this.$http.get(this.$conf.env.DownLoadFileList + `search=${this.MessageWord}`).then(res=>{
            this.PrListNum = res.data.count
            this.DownLoadPro = res.data.results
          }).catch(err=>{
            console.log(err)
          });
        },

        DownLoadFile(id,index){
          this.$http.get(this.$conf.env.DownLoadFileLPer + id + '/').then(res=>{
            if(!res.data.file){
              alert('您暂未登录，请先登录确定下载。')
              return false
            }
            window.open(res.data.file)
          }).catch(err=>{
            console.log(err)
          });



        },

        GoHelp(id,val){
          this.$router.push({
            name:'CompanyDetals',
            query:{
              id:id,
              category:val
            }
          })
        }
      },
      created() {
        this.GetHelpList()




      }
    }
</script>

<<style scoped lang="scss">

  .DownLoadMenu{
    width: 100%;
    .DownLoadCon{
      width: 1500px;
      height: 100%;
      margin: 0 auto;
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
      .SearchBox{
        overflow: hidden;
        margin-bottom: 16px;
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
      .DownLoadBox{
        margin-top: 30px;
        ul{
          width: 100%;
          overflow: hidden;
          li{
            float: left;
            width: calc(25% - 100px);
            padding:0 50px;
            position: relative;
            margin-bottom: 40px;
            img{
              width:61px;
              height:61px;
              display: block;
              margin: 10px auto;
              max-width: 100%;
            }
            .name{
              font-size:20px;
              font-weight:bold;
              color:rgba(51,51,51,1);
              line-height:32px;
              text-align: center;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 100%;
            }
            .load-con{
              width:100%;
              height:70px;
              font-size:14px;
              color:rgba(51,51,51,1);
              line-height:23px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 3;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              margin-bottom: 18px;
            }
            .DownLoadBut{
              width:104px;
              height:36px;
              border:1px solid rgba(51,51,51,1);
              border-radius:2px;
              text-align: center;
              line-height: 36px;
              transition: background .4s , color .4s;
              cursor: pointer;
              bottom: 20px;
              margin: 0 auto;
              z-index: 2;
              &:hover{
                background: black;
                color: #fff;
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
    .DownLoadMenu{
      .DownLoadCon{
        width: 1000px;
        .LineOfTop{
          height: 90px;
          padding-top: 50px;
          .ProductJ{
            width: 650px;
            font-size: 36px;
          }
        };
        .DownLoadBox{
          ul{
            li{
              width: calc(25% - 50px);
              padding: 0 25px;
              .DownLoadBut{
                width: 80px;
                height: 28px;
                line-height: 28px;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 510px){
    .DownLoadMiddle{
      -webkit-overflow-scrolling: touch;
      .DownLoadBox{
        .DownLoadMenu{
          .DownLoadCon{
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
            .DownLoadBox{
              ul{
                li{
                  width: 45%;
                  padding:0 2.2%;
                  position: relative;
                  margin-bottom: 10px;
                  img{
                    width: 30px;
                    height: 30px;
                    margin: 5px auto;
                  }
                  .name{
                    font-size: 14px;
                    line-height: 24px;
                  }
                  .load-con{
                    font-size: 12px;
                    line-height: 18px;
                    height: 55px;
                    margin-bottom: 10px;
                  }
                  .DownLoadBut{
                    width:54px;
                    height:20px;
                    border:1px solid rgba(51,51,51,1);
                    border-radius:1px;
                    text-align: center;
                    transition: background .4s , color .4s;
                    cursor: pointer;
                    bottom: 10px;
                    z-index: 2;
                    font-size:12px;
                    font-family:MicrosoftYaHei;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    line-height:20px;
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
