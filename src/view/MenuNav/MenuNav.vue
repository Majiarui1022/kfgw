<template>
    <div class="NabBox">
      <div class="NavHeader">
        <img src="../../assets/img/logoTwo.png" alt="">
        <img src="../../assets/img/close.png" alt="" class="closeNax" @click="Back">
      </div>
      <div class="Menu">
        <div class="Content">
          <ul>
            <li @click="GoTo(item,index)" v-for="(item,index) in Nav">{{item.name}}<img src="../../assets/img/join.png" alt=""></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import Nav from  '../../../static/data/Nav'
    export default {
        name: "MenuNav",
      data(){
          return{
            Nav,
          }
      },
      mounted() {
      },
      methods:{
        GoTo(val,index){
          if(val.children.length <= 0){
            this.$router.push({
              name:val.url
            })
          }else{
            this.$router.push({
              name:'SecondaryMenu',
              query:{
                id:index
              }
            })
          }
        },
        Back(){
          this.$router.go(-1)
        }
      }
    }
</script>
<style scoped lang="scss">

  .NabBox{
    width: 100%;
    height: 100%;
    .NavHeader{
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #F8F8F8;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img{
        width:90px;
        height:19px;
      }
      .closeNax{
        width:19px;
        height:19px;
        position: absolute;
        right: 20px;
      }
    }
    .Menu{
      width: 100%;
      ul{
        li{
          line-height: 40px;
          border-bottom: 1px solid #f8f8f8;
          position: relative;
          text-indent: 15px;
          font-size:15px;
          font-family:MicrosoftYaHei;
          color:rgba(51,51,51,1);
          line-height:40px;
          img{
            position: absolute;
            width: 8px;
            height: 15px;
            right: 18px;
            top: 13px;
          }
        }
      }
    }
  }
</style>
