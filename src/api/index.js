const axios = require('axios')

async function sendComment (params) {
    let res2 = await new Promise((resolve, reject) => {
        let res = axios.post('http://localhost:3000/comment/sendComment', params);
        resolve(res)
    })
    return res2
}
async function getCommentList (params) {
    let res2 = await new Promise((resolve, reject) => {
        let res = axios.get(`http://localhost:3000/comment/getCommentList?articleId=${params}`);
        resolve(res)
    })
    return res2
}
async function buryPoint (params) {
    let res2 = await new Promise((resolve, reject) => {
        let res = axios.get(`http://localhost:3000/comment/buryPoint?articleId=${params}`);
        resolve(res)
    })
    return res2
}
async function buryPoint (params) {
    let res2 = await new Promise((resolve, reject) => {
        let res = axios.post('http://localhost:3000/comment/buryPoint', params);
        resolve(res)
    })
    return res2
}
module.exports = {
    sendComment,
    getCommentList,
    buryPoint
}