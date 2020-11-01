<template>
    <div id="app" v-on:click="change">
        <h1>{{ msg }}</h1>
        <h2>page1</h2>
        <ul>
            <li>
                <router-link to="/">home</router-link>
            </li>
            <li>
                <router-link to="/about">about</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        change (event) {
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
            this.msg = 'changed';
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