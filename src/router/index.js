// import vueRouter from 'vue-router'
// import Vue from 'vue'
// Vue.use(vueRouter)
// import home from '../components/home/index.vue'
// console.log(home, '==home')
// module.exports = () => {
//     return new vueRouter({
//         mode:"history",
//         routes:[
//             {
//                 path:"/",
//                 component:{
//                     template:`<h1>this is home page</h1>`
//                 },
//                 name:"home"
//             },
//             {
//                 path:"/about",
//                 component: home,
//                 name:"about"
//             }
//         ]
//     })
// }
/**
 * /**
  * 本文件非vue官方指定必须的文件，是kenko额外抽取的一些页面配置，同时做多页面express路由和直出配置
  */
 module.exports = {
    'page1': {
        url: '/author1.html',                         //访问的url规则，用于express的get
        dir: './src/pages/author1',                   //页面目录，默认有app.js作为入口
        title: 'author1',                             //生成html的title
        template: './src/pages/author1/index.html'      //特殊指定一个html
    }
} 