<template>
  <div class="HelpBox_kf">
    <div class="HelpBox">
      <public-header></public-header>
      <div class="HelpMenu">
        <div class="HelpCon">
          <div class="LineOfTop">
            <div class="ProductJ">
              <div class="ProductNei">帮助中心</div>
            </div>
          </div>
          <div class="SearchBox">
            <div class="Search">
              <input type="text" v-model="MessageWord" placeholder="请输入问题" @keyup.enter="SearchWord">
              <div class="SearchBtn" @click="SearchWord"></div>
            </div>
          </div>
          <div class="HelpList">
            <ul>
              <li v-for="(item,index) in HelpList" :key="index" @click="GoHelp(item.id,5)">
                <span>{{item.title}}</span>
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
    import FooterV from "@/components/FooterV";
    export default {
        name: "help",
      components: {FooterV, PublicHeader},
      data(){
        return{
          PrListNum:15,        //有条
          PageSize:15,          //一页显示多少条
          Num:1,
          HelpList:[],
          MessageWord:''
        }
      },
      methods:{
        handleCurrentChange(val){
          this.Num = val
          this.GetHelpList()
        },
        GetHelpList(){
          this.$http.get(this.$conf.env.AllHelp + `page=${this.Num}`).then(res=>{
            this.PrListNum = res.data.count
            this.HelpList = res.data.results
          }).catch(err=>{
            console.log(err)
          });

        },


        SearchWord(){
          if(this.MessageWord === ''){
            this.GetHelpList()
            return
          }
          this.$http.get(this.$conf.env.AllHelp + `search=${this.MessageWord}`).then(res=>{
            this.PrListNum = res.data.count
            this.HelpList = res.data.results
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

<style scoped lang="scss">

  .HelpMenu{
    width: 100%;
    .HelpCon{
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
      .HelpList{
        width: 100%;
        ul{
          li{
            width: 100%;
            height: 52px;
            border-bottom: 1px solid #CCCCCC;
            font-size:20px;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            line-height:52px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-weight:400;
            span{
              height: 52px;
              line-height:52px;
              cursor: pointer;
              font-weight:400;
              &:hover{
                color: #E40012;
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
      .HelpMenu{
        .HelpCon{
          width: 1000px;
          .LineOfTop{
            height: 90px;
            padding-top: 50px;
            .ProductJ{
              width: 650px;
              font-size: 36px;
            }
          }
        }
      }
  }
  @media screen and (max-width: 510px){
    .HelpBox_kf{
      -webkit-overflow-scrolling: touch;
      .HelpBox{
        .HelpMenu{
          .HelpCon{
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
            .HelpList{
              ul{
                li{
                  width: 100%;
                  height: 28px;
                  border-bottom: 1px solid #CCCCCC;
                  font-size: 12px;
                  font-family: MicrosoftYaHei;
                  color: #333333;
                  line-height: 28px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  font-weight: 400;
                  span{
                    height: 28px;
                    line-height: 28px;
                    cursor: pointer;
                    font-weight: 400;
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
