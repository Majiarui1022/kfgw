<template>
  <div class="CompanyDetalsBox_kf">
    <div class="CompanyDetalsBox">
      <public-header></public-header>
      <div id="Menu" v-html="ProDetal">

      </div>
      <FooterV></FooterV>
    </div>
  </div>
</template>

<script>
    import PublicHeader from "@/components/publicHeader";
    import FooterV from "@/components/FooterV";
    export default {
        name: "CompanyDetals",
      components: {FooterV, PublicHeader},
      data(){
        return{
          ProDetal:''
        }
      },
      mounted(){
      },
      methods:{
        GetWord(){
          //等于1代表公司动态详情  2代表行业资讯详情
          if(this.$route.query.category == 1){
            this.$http.get(this.$conf.env.ConpanyDatal + `${this.$route.query.id}/`).then(res=>{
              this.ProDetal = res.data.info_detail
              this.SetImg()
            }).catch(err=>{
              console.log(err)
            });
          }else if(this.$route.query.category == 2){
            this.$http.get(this.$conf.env.HayeDetal + `${this.$route.query.id}/`).then(res=>{
              this.ProDetal = res.data.info_detail
              this.SetImg()
            }).catch(err=>{
              console.log(err)
            });
          }else if(this.$route.query.category == 3){
            this.$http.get(this.$conf.env.ProductDetal + `${this.$route.query.id}/?category=1`).then(res=>{
              this.ProDetal = res.data.info_detail
              this.SetImg()
            }).catch(err=>{
              console.log(err)
            });

          }else if(this.$route.query.category == 4){
            this.$http.get(this.$conf.env.ProductDetal + `${this.$route.query.id}/?category=2`).then(res=>{
              this.ProDetal = res.data.info_detail
              this.SetImg()
            }).catch(err=>{
              console.log(err)
            });

          }else if(this.$route.query.category == 5){
            this.$http.get(this.$conf.env.HelpDetal + `${this.$route.query.id}/`).then(res=>{
              this.ProDetal = res.data.info_detail
              this.SetImg()
            }).catch(err=>{
              console.log(err)
            });

          }else if(this.$route.query.category == 6){
            this.$http.get(this.$conf.env.MoreScheme + `${this.$route.query.id}/`).then(res=>{
              this.ProDetal = res.data.info_detail
              this.SetImg()
            }).catch(err=>{
              console.log(err)
            });
          }else if(this.$route.query.category == 7){

            this.$http.get(this.$conf.env.RecruitDetal + `${this.$route.query.id}/`).then(res=>{
              this.ProDetal = res.data.info_detail
              this.SetImg()
            }).catch(err=>{
              console.log(err)
            });
          }


        },


        SetImg(){
          setTimeout(()=>{
            $("#Menu img").css({
              'max-width':'100%'
            })
          },100)
        }

      },
      created() {
          this.GetWord()
      },
      watch: {
        $route (to, from) {
          this.$router.go(0);
        }}
    }
</script>

<style scoped lang="scss">

  .CompanyDetalsBox{
    #Menu{
      width: 1500px;
      margin: 60px auto 100px;
    }
  }


  @media screen and (max-width: 1500px){
    .CompanyDetalsBox #Menu{
      width: 1000px;
    }
  }
  @media screen and (max-width: 510px){
    .CompanyDetalsBox_kf{
      -webkit-overflow-scrolling: touch;
      .CompanyDetalsBox{
        #Menu{
          width: 335px;
          margin: 20px auto;
        }
      }
    }
  }
</style>
