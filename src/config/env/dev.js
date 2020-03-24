// const winchaingroupApi = "https://www.kungfunion.com/";
const winchaingroupApi = "https://www.kungfunion.com/";


module.exports = {

  //首页
  AllBanner:winchaingroupApi + 'web/webbanner/',    //全部banner
  ProIntroduce: winchaingroupApi + 'web/product_introduce/',//产品介绍
  proIntroduceNews : winchaingroupApi + 'web/product_introduce/',//产品介绍修改（新）
  IndexScheme:winchaingroupApi + 'web/index/app_scheme/',    //首页应用方案展示

  //关于我们
  AllCompanyDynamic:winchaingroupApi + 'web/company_dynamic/?page=',  //全部公司动态
  AllHotInformation:winchaingroupApi + 'web/hot_information/?page=',      //全部热点资讯
  ConpanyDatal:winchaingroupApi + 'web/company_dynamic/',      //公司动态详情
  HayeDetal:winchaingroupApi + 'web/hot_information/',         //行业动态详情
  ConpanyOver : winchaingroupApi + 'web/company/overview/', //公司概览（新）
  AboutKF: winchaingroupApi + 'web/company/introduce/',   //公司介绍


  //产品中心
  ProductCentenr:winchaingroupApi + 'web/products_center/?category=',     //产品中心的产品展示
  IndustrialInternetPro:winchaingroupApi + 'web/products/?',         //集合性所有产品列表
  ProductDetal:winchaingroupApi + 'web/products/',                           //产品详情

  //应用方案
  MoreScheme:winchaingroupApi + 'web/app_scheme/',         //应用方案    详情  共用！！！


  //客户案例
  CstomerCase:winchaingroupApi  + 'web/case/',         //应用方案


  //技术支持
  AllSupport:winchaingroupApi + 'web/index_technical/support/?category=',         //技术支持
  IndustrialSupprt:winchaingroupApi + 'web/technical/support/',                             //工业互联网产品支持
  AllHelp:winchaingroupApi + 'web/helps/?',                                    //全部帮助
  HelpDetal:winchaingroupApi + 'web/helps/',                                    //帮助详情
  DownLoadFile:winchaingroupApi + 'web/files/',                              //下载文件
  DownLoadFileList:winchaingroupApi + 'web/download/?',                  //获取下载文件列表
  DownLoadFileLPer:winchaingroupApi + 'web/download/',                              //获取下载文件列表   下载文件


  //联系我们
  LeaveMessage:winchaingroupApi  + 'web/leave_message/?page=',         //留言列表
  CreateMessage:winchaingroupApi + 'web/leave_message/',               //创建留言
  Recuitment:winchaingroupApi + 'web/recruit/',                         //全部招聘岗位
  RecruitDetal:winchaingroupApi + 'web/recruit/',                         //全部招聘岗位


  LoginUserS:winchaingroupApi + 'login/',                                   //登录
  GetMoblieCode:winchaingroupApi + 'users/codes/',                           //获取验证码
  ChangePass:winchaingroupApi + 'users/forget_password/',                      //忘记密码
  UserRegister:winchaingroupApi + 'users/register/',                            //用户注册
  Agreement:winchaingroupApi + 'users/register_agreement/2/',                     //注册协议

  GetSceneVal:winchaingroupApi + 'users/login/app_url/',                        //登录获取场景值
  recordF:winchaingroupApi + 'users/ip/?module_id=',                            //记录访问次数

}
