import index_serch from '@/components/ly_cpn/index_serch'
import shop_home_page from '@/components/ly_cpn/shop_home_page'
import shop_home_list from '@/components/ly_cpn/shop_home_list'
import shop_serch from '@/components/ly_cpn/shop_serch'
import shop_home_filter from '@/components/ly_cpn/shop_home_filter'
import detail_page from '@/components/ly_cpn/detail_page'
import detail_page_right from '@/components/ly_cpn/detail_page_right'
import detail_page_left from '@/components/ly_cpn/detail_page_left'
import restaurant_detail from '@/components/ly_cpn/restaurant_detail'
import activity_detail from '@/components/ly_cpn/activity_detail'
import shop_detail from '@/components/ly_cpn/shop_detail';
import shop_order from '@/components/ly_cpn/shop_order'
import use_address from '@/components/ly_cpn/use_address'
import add_address from '@/components/ly_cpn/add_address'  
import address_serch from '@/components/ly_cpn/address_serch'
import shop_remark from '@/components/ly_cpn/shop_remark'
import shop_invoice from '@/components/ly_cpn/shop_invoice'
/*
Mr.y
*/ 
import CityHome from '@/components/yzy_cpn/cityHome'// 城市首页
import Guess from '@/components/yzy_cpn/guess'//当前定位城市
import Hot from '@/components/yzy_cpn/hot'//热门城市
import Group from '@/components/yzy_cpn/group'//所有城市
import Login from '@/components/yzy_cpn/login'//登录界面
import ChangePass from '@/components/yzy_cpn/changePass'//更改密码
import MySelf from '@/components/yzy_cpn/mySelf'//我的界面
import Balance from '@/components/yzy_cpn/balance'//余额界面
import BalanceInstructions from '@/components/yzy_cpn/balanceInstructions'//余额说明
import Sale from '@/components/yzy_cpn/sale'//优惠页面
import Instructions from '@/components/yzy_cpn/instructions'//红包说明
import Vouchers from '@/components/yzy_cpn/vouchers'//我的优惠代金券页面
import VoucherDescription from '@/components/yzy_cpn/voucherDescription'//代金券说明
import Points from '@/components/yzy_cpn/points'//我的积分
import PointsInstructions from '@/components/yzy_cpn/pointsInstructions'//积分说明
import IntegralMall from '@/components/yzy_cpn/integralMall'//积分商城
import MemberCenter from '@/components/yzy_cpn/memberCenter'//会员中心
import VipInstructions from '@/components/yzy_cpn/vipInstructions'//会员说明
import Pay from '@/components/yzy_cpn/pay'//支付页面
import VipExchange from '@/components/yzy_cpn/vipExchange'//兑换会员
import PurchaseRecords from '@/components/yzy_cpn/purchaseRecords'//购买记录
import DownLoadPage from '@/components/yzy_cpn/downLoadPage'//下载界面
import Envelope from '@/components/yzy_cpn/envelope'//兑换红包
import Recommended from '@/components/yzy_cpn/Recommended'//推荐有奖
import ServiceCenter from '@/components/yzy_cpn/ServiceCenter'//服务中心
import UserInFormations from '@/components/yzy_cpn/userInFormations'//用户信息
import Edd_address from '@/components/yzy_cpn/Edd_address'//收货地址
import AddAddress from '@/components/yzy_cpn/AddAddress'//新增地址
import HistoryEnvelope from '@/components/yzy_cpn/historyEnvelope'//历史红包
import ChangeUserName from '@/components/yzy_cpn/changeUserName'//更改用户名
import AddAres from '@/components/yzy_cpn/addares'//搜索地址
import teachMovie from '@/components/yzy_cpn/teachMovie'//搜索地址
import Order_list from '@/components/yzy_cpn/order_list'//订单列表
import order_detail from '@/components/yzy_cpn/order_detail'//订单详情
export default {
    routes: [
      {
        path: '/',
        component: CityHome,
     },
      // 城市首页
      {
        path: '/cityHome',
        name: 'cityHome',
        component: CityHome,
        children:[
          // 当前城市
          {
            path: '/guess',
            name: 'guess',
            component: Guess,
        },
        //热门城市
        {
          path: '/hot',
          name: 'hot',
          component: Hot,
      },
      //全部城市
      {
        path: '/group',
        name: 'group',
        component: Group,
    },
      ]
      },
      //密码登录
      {
        path: '/login',
        name:'login',
        component: Login,
        
    },
    //更改密码
    {
      path: '/changePass',
      name:'changePass',
      component: ChangePass,
    },
    //我的余额
    {
      path: '/balance',
      name:'balance',
      component: Balance,
    },
    //余额说明
    {
      path: '/balanceInstructions',
      name:'balanceInstructions',
      component:BalanceInstructions,
    },
    // 我的优惠
    {
      path: '/sale',
      name:'sale',
      component:Sale,
    },
    // 红包说明
    {
      path: '/instructions',
      name:'instructions',
      component:Instructions,
    },
    // 商家代金券
    {
      path: '/vouchers',
      name:'vouchers',
      component:Vouchers,
    },
    // 商家代金券说明
    {
      path: '/voucherDescription',
      name:'voucherDescription',
      component:VoucherDescription,
    },
    // 我的积分
    {
      path: '/points',
      name:'points',
      component:Points,
    },
    // 积分说明
    {
      path: '/pointsInstructions',
      name:'pointsInstructions',
      component:PointsInstructions,
    },
    // 积分商城
    {
      path: '/integralMall',
      name:'integralMall',
      component:IntegralMall,
    },
    // 会员中心
    {
      path: '/memberCenter',
      name:'memberCenter',
      component:MemberCenter,
    },
    // 会员说明
    {
      path: '/vipInstructions',
      name:'vipInstructions',
      component:VipInstructions,
    },
    // 支付中心
    {
      path: '/pay',
      name:'pay',
      component:Pay,
    },
    // 兑换会员
    {
      path: '/vipExchange',
      name:'vipExchange',
      component:VipExchange,
    },
    // 购买记录
    {
      path: '/purchaseRecords',
      name:'purchaseRecords',
      component:PurchaseRecords,
    },
    //下载界面
    {
      path: '/downLoadPage',
      name:'downLoadPage',
      component:DownLoadPage,
    },
    //兑换红包
    {
      path: '/envelope',
      name:'envelope',
      component:Envelope,
    },
     //推荐有奖
     {
      path: '/Recommended',
      name:'Recommended',
      component:Recommended,
    },
     //服务中心
     {
      path: '/ServiceCenter',
      name:'ServiceCenter',
      component:ServiceCenter,
    },
    //账户信息
    {
      path: '/userInFormations',
      name:'userInFormations',
      component:UserInFormations,
    },
    //收货地址
    {
      path: '/Edd_address',
      name:'Edd_address',
      component:Edd_address,
    },
    //新增地址
    {
      path: '/AddAddress',
      name:'AddAddress',
      component:AddAddress,
    },
     //历史红包
     {
      path: '/historyEnvelope',
      name:'historyEnvelope',
      component:HistoryEnvelope,
    },
    //更改用户名
    {
      path: '/changeUserName',
      name:'changeUserName',
      component:ChangeUserName,
    },
     //搜索地址
     {
      path: '/addares',
      name:'addares',
      component:AddAres,
    },
    {
      path: '/teachMovie',
      name:'teachMovie',
      component:teachMovie,
    },
    /*
    =============================================================
    =================================================================
    */ 
      {
        path: '/shop_home_page',
        component: shop_home_page,
        redirect:"/shop_home_list",
        children:[
          {
            path: '/shop_home_list',
            name: 'shop_home_list',
            component:shop_home_list,
          },
          {
            path: '/shop_serch',
            name: 'shop_serch',
            component: shop_serch,

          },
          {
            path:"/shop_home_filter",
            name:"shop_home_filter",
            component:shop_home_filter
          },
          {
            path: '/mySelf',
            name:'mySelf',
            component: MySelf,
          },
          {
            path: '/order_list',
            name:'order_list',
            component: Order_list,
          }
        ]
      },
      {
        path: '/index_serch',
        name: 'index_serch',
        component: index_serch,
      },
      {
        path: '/detail_page',
        name: 'detail_page',
        redirect:"/detail_page_left",
        component: detail_page,
        children:[
          {
            path: '/detail_page_left',
            name: 'detail_page_left',
            component: detail_page_left,
          },
          {
            path: '/detail_page_right',
            name: 'detail_page_right',
            component: detail_page_right,
          }
        ]
      },
      // {
      //   path: '/restaurant_detail',
      //   name: 'restaurant_detail',
      //   component: restaurant_detail,
      // },
      {
        path: '/activity_detail',
        name: 'activity_detail',
        component: activity_detail,
      },
      {
        path: '/restaurant_detail',
        name: 'restaurant_detail',
        component: restaurant_detail
      },
      {
        path: '/shop_detail',
        name: 'shop_detail',
        component: shop_detail,
      },
      {
        path: '/shop_order',
        name: 'shop_order', 
        component: shop_order
      },
      {
        path: '/use_address',
        name: 'use_address', 
        component: use_address
      },
      {
        path: '/add_address',
        name: 'add_address', 
        component: add_address
      },
      {
        path: '/address_serch',
        name: 'address_serch',   
        component: address_serch  
      },
      {
        path: '/shop_remark',
        name: 'shop_remark',   
        component: shop_remark
      },
      {
        path: '/shop_invoice',
        name: 'shop_invoice',   
        component: shop_invoice
      },
      {
        path: '/order_detail',
        name: 'order_detail',   
        component: order_detail
      }
    ]
  }