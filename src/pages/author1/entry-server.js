/**
 * 用于打包服务器直出部分的逻辑
 */
import { createApp } from './app'
import { getArticle } from '@backend/controllers/getArticle'

import {getTime2} from '../../lib/myDate.js'
import getTime from '../../lib/myDate.js'
console.log(getTime2(), getTime());

export default context => {
    return new Promise(async(resolve, reject) => {
        console.log(getArticle,'====getArticle')
        if (context.url.includes('author1')) {
            console.log('=================', context.url)
        }
        let res = await getArticle({
            loginname: '1'
        })
        console.log(res, '=====getArticle')
        setTimeout(() => {              //模拟拉取接口获取数据
            var data = {
                arr: [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                msg: '啊哈哈哈哈',
                mongoDBdata: res
            };
            context.state = data;        //生成到tpl.html中作为浏览器端全局变量
            const { app } = createApp(data);
            resolve(app);
        }, 100);
        //reject({code: 500});  //对应server.js的baseRender方法
    })
}