import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import DownLoadApp from '@/components/DownLoadApp'
import ShareWeChart from '@/components/ShareWeChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/aboutwe',
      name: 'aboutwe',
      component:() => import('@/view/aboutwe/aboutwe'),
    },
    {
      path: '/ProductMiddle',
      name: 'ProductMiddle',
      component:() => import('@/view/ProductMiddle/ProductMiddle'),
    },
    {
      path: '/MoreSolutions',
      name: 'MoreSolutions',
      component:() => import('@/view/MoreSolutions/MoreSolutions'),
    },
    {
      path: '/TechniSupp',
      name: 'TechniSupp',
      component:() => import('@/view/TechniSupp/TechniSupp'),
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component:() => import('@/view/ContactUs/ContactUs'),
    },
    {
      path: '/help',
      name: 'help',
      component:() => import('@/view/help/help'),
    },
    {
      path: '/industryInform',
      name: 'industryInform',
      component:() => import('@/view/industryInform/industryInform'),
    },
    {
      path: '/onlineMessage',
      name: 'onlineMessage',
      component:() => import('@/view/onlineMessage/onlineMessage'),
    },
    {
      path: '/recruitment',
      name: 'recruitment',
        component:() => import('@/view/recruitment/recruitment'),
    },
    {
      path: '/CompanyNews',
      name: 'CompanyNews',
      component:() => import('@/view/CompanyNews/CompanyNews'),
    },
    {
      path: '/CustomerCase',
      name: 'CustomerCase',
      component:() => import('@/view/CustomerCase/CustomerCase'),
    },{
      path: '/IndustrialPro',
      name: 'IndustrialPro',
      component:() => import('@/view/IndustrialPro/IndustrialPro'),
    },
    {
      path: '/InternetPro',
      name: 'InternetPro',
      component:() => import('@/view/InternetPro/InternetPro'),
    },
    {
      path: '/IndustrialProzc',
      name: 'IndustrialProzc',
      component:() => import('@/view/IndustrialProzc/IndustrialProzc'),
    },
    {
      path: '/InternetPorzc',
      name: 'InternetPorzc',
      component:() => import('@/view/InternetPorzc/InternetPorzc'),
    },
    {
      path: '/technicalSupTxt',
      name: 'technicalSupTxt',
      component:() => import('@/view/technicalSupTxt/technicalSupTxt'),
    },
    {
      path: '/CompanyDetals',
      name: 'CompanyDetals',
      component:() => import('@/view/CompanyNews/CompanyDetals'),
    },
    {
      path: '/ShareWeChart',
      name: 'ShareWeChart',
      component:ShareWeChart,
    },
    {
      path: '/MenuNav',
      name: 'MenuNav',
      component:() => import('@/view/MenuNav/MenuNav'),
    },
    {
      path: '/SecondaryMenu',
      name: 'SecondaryMenu',
      component:() => import('@/view/MenuNav/SecondaryMenu'),
    },
    {
      path: '/IphoneLogin',
      name: 'IphoneLogin',
      component:() => import('@/view/IphoneLogin/IphoneLogin'),
    },
    {
      path: '/Register',
      name: 'Register',
      component:() => import('@/view/IphoneLogin/Register'),
    },
    {
      path: '/ForgetPass',
      name: 'ForgetPass',
      component:() => import('@/view/IphoneLogin/ForgetPass'),
    },
    {
      path: '/ClearLogin',
      name: 'ClearLogin',
      component:() => import('@/view/IphoneLogin/ClearLogin'),
    },
    {
      path: '/DownLoadApp',
      name: 'DownLoadApp',
      component:DownLoadApp,
    },
    {
      path: '/DownLoadMiddle',
      name: 'DownLoadMiddle',
      component:() => import('@/view/DownLoadMiddle/DownLoadMiddle'),
    }
  ]
})


