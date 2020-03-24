<template>
  <div class="DowonLoad">
    <div class="Menu">
      <p>下载控福智能</p>
      <a href="http://www.kungfunion.com/qrcode/kungfu.apk">
        <img src="../assets/img/and.png" alt="">
        <img src="../assets/img/anded.png" alt="">
        <span>Android</span>
      </a>
      <a style="cursor: pointer;" @click="DownLoad">
        <img src="../assets/img/ios.png" alt="" >
        <img src="../assets/img/iosed.png" alt="">
        <span>iOS</span>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DownLoadApp",
      methods:{
        DownLoad(){
          alert('审核中，敬请期待')
        }
      }
    }
</script>

<style scoped lang="scss">

  .DowonLoad{
    width: 100%;
    height: 100%;
    background: rgba(15,16,20,.902);
    position: relative;
    .Menu{
      position: absolute;
      width: 100%;
      height: 500px;
      left: 0;
      top: 50%;
      margin-top: -250px;
      text-align: center;
      color: #fff;
      p{
        height: 36px;
        line-height: 36px;
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        top: -30px;
        text-align: center;
        font-size: 36px;
        font-weight: 300;
      }
      a{
        position: relative;
        display: inline-block;
        margin:50px 100px 0;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        img{
          width: 150px;
          height: 150px;
          display: block;
          transition: opacity .6s;
          border-radius: 50%;
          &:first-child{
            opacity: 1;
          }
          &:nth-child(2){
            opacity: 0;
            position: absolute;
            left: 0;
            top:0;
          }
        }
        span{
          position: absolute;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          bottom: -50px;
          height: 20px;
          line-height: 20px;
          font-size: 20px;
          font-weight: 100;
          color: #fff;
        }
        &:hover{
            img{
              &:first-child{
                opacity: 0;
                position: absolute;
                left: 0;
                top:0;
              }
              &:nth-child(2){
                opacity: 1;
                position: initial;
              }
            }
        }
      }
    }
  }
  @media screen and (max-width: 510px){
    .DowonLoad{
      .Menu{
        height: 300px;
        margin-top: -150px;
        p{
          height: 24px;
          line-height: 24px;
          position: absolute;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          top: -40px;
          text-align: center;
          font-size: 24px;
          font-weight: 300;
        }
        a{
          position: relative;
          display: inline-block;
          margin:50px 40px 0;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          img{
            width: 80px;
            height: 80px;
            display: block;
            transition: opacity .6s;
            border-radius: 50%;
            &:first-child{
              opacity: 1;
            }
            &:nth-child(2){
              opacity: 0;
              position: absolute;
              left: 0;
              top:0;
            }
          }
          span{
            position: absolute;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            bottom: -50px;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            font-weight: 100;
            color: #fff;
          }
          &:hover{
            img{
              &:first-child{
                opacity: 0;
                position: absolute;
                left: 0;
                top:0;
              }
              &:nth-child(2){
                opacity: 1;
                position: initial;
              }
            }
          }
        }
      }
    }
  }
</style>
