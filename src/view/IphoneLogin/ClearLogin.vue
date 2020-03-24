<template>
  <div class="NabBox">
    <div class="IphoneLoginHeader">
      <img src="../../assets/img/logoTwo.png" alt="">
      <img src="../../assets/img/join.png" alt="" class="closeNax" @click="Back">
    </div>
    <div class="Menu">
      <div class="Content">
        <ul>
          <li style="text-align: center">控福智能</li>
          <li @click="ClearLogins">退出登录<img src="../../assets/img/join.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClearLogin",
    data(){
      return{
        Nav,
        NavList:[],
        name:''
      }
    },
    methods:{
      Back(){
        this.$router.go(-1)
      },
      ClearLogins(){
        sessionStorage.clear()
        localStorage.clear()
        this.$router.push({
          name:'index'
        })
      }
    },
    created() {
      this.name = localStorage.getItem("Username") ? localStorage.getItem("Username") : sessionStorage.getItem("Username")
    }
  }
</script>

<style scoped lang="scss">

  .NabBox{
    width: 100%;
    height: 100%;
    .IphoneLoginHeader{
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
        width:10px;
        height:17px;
        position: absolute;
        left: 20px;
        transform: rotateZ(180deg);
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
