<template>

  <div class="ShareBox">
    <p>微信分享</p>
    <div id="qrcode" ref="qrcode"></div>
    <div class="ShareTit">
      <p>请使用微信扫描二维码打开</p>
      <p>"控福智能"</p>
    </div>
  </div>
</template>

<script>
  import QRCode from 'qrcodejs2'
    export default {
        name: "ShareWeChart",
      methods:{
        qrcode() {
            let qrcode = new QRCode('qrcode', {
              width: 240,
              height: 240,
              text: "https://www.kungfunion.com", // 二维码地址
              colorDark: "#000",
            })
        },
      },
      mounted() {
          this.qrcode()
      }
    }
</script>

<style scoped lang="scss">

  .ShareBox{
    background:rgb(51, 51, 51);
    width:100%;
    height: calc(100% - 50px);
    padding-top:50px;
    p{
      text-align: center;
      font-size: 20px;
      color: #fff;
    }
    #qrcode{
      width: 240px;
      border: 1px solid #E2E2E2;
      margin: 15px auto 0;
      padding: 20px;
      background: #fff;
    }
    .ShareTit{
      width: 280px;
      margin: 15px auto 0;
      background-color: #232323;
      border-radius: 100px;
      -moz-border-radius: 100px;
      -webkit-border-radius: 100px;
      box-shadow: inset 0 5px 10px -5px #191919, 0 1px 0 0 #444;
      -moz-box-shadow: inset 0 5px 10px -5px #191919,0 1px 0 0 #444;
      -webkit-box-shadow: inset 0 5px 10px -5px #191919, 0 1px 0 0 #444;

      p{
        font-size: 13px;
        line-height: 28px;
      }
    }
  }
</style>
