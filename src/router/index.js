import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

//解决  路由冗余跳转问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const router =  new Router(routes)
// router.beforeEach((to,from,next) => {
//     console.log(from)
//     console.log("-------")
//     console.log(to)
//     if(from.path == to.path){
//         console.log(1)
//         next(false)
//     }else{
//         console.log(2)
//         next()
//     }

// })
export default router