<template>
    <div id="app" v-on:click="change">
        <h1 v-for="(item, index) in appData.arr" :key="index">{{item}}</h1>
        <h1>{{appData.msg}}</h1>
        <h2>page1</h2>
        <h3>{{appData.mongoDBdata}}</h3>
        <form>
            <div>
                <label for="name">昵称</label>
                <input type="text" placeholder="请输入姓名" v-model="formdata.name" />
            </div>
            <div>
                <label for="name">评论</label>
                <input type="text" placeholder="请输入评论" v-model="formdata.comments" />
            </div>
            <div @click="commit">
                提交
            </div>
        </form>
        <div v-for="item in commentList" :key="item.id">
            {{item.name}}{{item.comments}}
        </div>
        <div @click="getCommentList">getCommentList</div>
        <!-- <ul>
            <li>
                <router-link to="/">home</router-link>
            </li>
            <li>
                <router-link to="/about">about</router-link>
            </li>
        </ul>
        <router-view></router-view> -->
    </div>
</template>

<script>
import { sendComment, getCommentList, buryPoint } from '../../api/index'
import { guid } from '../../common/js/tool'

export default {
    name: 'app',
    data() {
        console.log(this.appData, '=====appData')
        return {
            formdata: {
                name: '',
                comments: '',
                articleId: '1',
            },
            msg: 'Welcome to Your Vue.js App',
            arr: [],
            commentList: []
        }
    },
    props: {
        appData: {
            type: Object
        }
    },
    methods: {
        change (event) {
            // `event` 是原生 DOM 事件
            if (event) {
                // alert(event.target.tagName)
            }
            this.msg = 'changed';
        },
        async commit () {
            console.log(this.formdata)
            let res2 = await sendComment(this.formdata)
            console.log(res2)
        },
        async getCommentList () {
            let res2 = await getCommentList(this.formdata.articleId)
            this.commentList = res2.data.result
            console.log(res2)
        },
        async buryPoint () {
            let guid = sessionStorage.get('guid')
            let isNew = false
            if (!guid) {
                isNew = true
                guid = guid()
                sessionStorage.setItem('guid', guid)
            }
            let res = await buryPoint({
                guid,
                isNew
            })
        }
    },
}
</script>

<style>
    /*基础css的引入，从js搬到这里来*/
    /* @import '../../css/base.css'; */
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>