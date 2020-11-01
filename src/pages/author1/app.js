import Vue from 'vue'
import App from './App.vue'

export function createApp (data) {
    console.log(data, '=====data')
    const app = new Vue({
        components: { App },                      //演示如何从初始化地方传递数据给子组件。这个页面不使用vuex，展示简单粗暴的方式，配合global event bus即可https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication
        template: '<App :appData="appData"/>',
        data: {
            //数据先在服务器渲染一遍，到了客户端会在重建一遍，如果客户端部分数据不一致，会重新渲染
            appData: data
        },
        mounted : function () {
            console.log('mounted')
        }
    });
    return { app };
}