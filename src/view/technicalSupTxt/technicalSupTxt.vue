<template>
  <div class="technicalSupTxtBox">
    <public-header></public-header>
    <div class="technicalSupTxtCon">
      <div class="Content">
        <div id="TechnicalSupText" v-html="ProductDatil">
          my is Text
        </div>
        <div class="DownLoadBox">
          <ul>
            <li v-for="(item,index) in DownLoadPro" :key="index">
              <img :src="item.img" alt="">
              <div class="DownLoadBut" @click="DownLoadFile(item.id,index)">点击下载</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <FooterV></FooterV>
  </div>
</template>

<script>
    import FooterV from "@/components/FooterV";
    import PublicHeader from "@/components/publicHeader";
    export default {
        name: "technicalSupTxt",
      components: {PublicHeader, FooterV},
      data(){
          return{
            ProductDatil:'',
            DownLoadPro:[]
          }
      },
      methods:{
        GetTechniDetal(){
          this.$http.get(this.$conf.env.IndustrialSupprt + `${this.$route.query.id}/?category=${this.$route.query.category}`).then(res=>{
            this.ProductDatil = res.data.info_detail
            this.DownLoadPro = res.data.in_files
              setTimeout(()=>{
                $("#TechnicalSupText img").css({
                  'max-width':'100%'
                })
              },100)
          }).catch(err=>{
            console.log(err)
          });
        },
        DownLoadFile(id,index){
          // window.open(this.$conf.env.DownLoadFile + `${id}/`)
          if(!this.DownLoadPro[index].file){
            alert('您暂未登录，请先登录确定下载。')
            return false
          }
          window.open(this.DownLoadPro[index].file)

        }
      },
      created() {
          this.GetTechniDetal()
      },
      watch: {
        $route (to, from) {
          this.$router.go(0);
        }
      }
    }
</script>

<style scoped lang="scss">

  .technicalSupTxtBox{
    width: 100%;
    height: 100%;
    .technicalSupTxtCon{
      width: 100%;
      .Content{
        width: 1500px;
        margin: 0 auto;
        #TechnicalSupText{
          width: 100%;
          margin: 60px auto 100px;
        }
        .DownLoadBox{
          border-top: 1px solid #CCCCCC;
          margin-top: 30px;
          ul{
            width: 100%;
            overflow: hidden;
            li{
              float: left;
              width: calc(25% - 100px);
              padding:0 50px;
              position: relative;
              margin-bottom: 10px;
              img{
                display: block;
                margin: 0 auto;
                max-width: 100%;
              }
              .DownLoadBut{
                position: absolute;
                width:104px;
                height:36px;
                border:1px solid rgba(51,51,51,1);
                border-radius:2px;
                text-align: center;
                line-height: 36px;
                transition: background .4s , color .4s;
                cursor: pointer;
                bottom: 20px;
                left: 50%;
                margin-left: -52px;
                z-index: 2;
                &:hover{
                  background: black;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }


  @media screen  and (max-width: 1500px){
    .technicalSupTxtBox .technicalSupTxtCon{
      .Content{
        width: 1000px;
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
                margin-left: -40px;
              }
            }
          }
        }
      }
    }

  }
  @media screen  and (max-width: 510px){
    .technicalSupTxtBox{
      .technicalSupTxtCon{
        .Content{
          width: 345px;
          #TechnicalSupText{
            margin: 10px auto;
          }
          .DownLoadBox{
            ul{
              li{
                width: 45%;
                padding:0 2.2%;
                position: relative;
                margin-bottom: 10px;
                .DownLoadBut{
                  width:54px;
                  height:20px;
                  border:1px solid rgba(51,51,51,1);
                  border-radius:1px;
                  position: absolute;
                  text-align: center;
                  transition: background .4s , color .4s;
                  cursor: pointer;
                  bottom: 10px;
                  left: 50%;
                  margin-left: -27px;
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
      }
    }
  }
</style>
