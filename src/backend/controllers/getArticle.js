import { User } from '../proxy'
// var tools = require('../common/tools');


function getArticle (req, res, next) {
  return new Promise((resolve, reject) => {
    console.log(req, res, '===req, res')
  const {
    loginname,
    email
  } = req
    User.getUsersByQuery({'$or': [
        {'loginname': loginname},
        {'email': email}
      ]}, {}, function (err, users) {
        if (err) {
          return next(err);
        }
        resolve(users)
        console.log(users, '=====users')
        // if (users.length > 0) {
        //   ep.emit('prop_err', '用户名或邮箱已被使用。');
        //   return;
        // }
        // tools.bhash(pass, ep.done(function (passhash) {
        //   // create gravatar
        //   var avatarUrl = User.makeGravatar(email);
        //   User.newAndSave(loginname, loginname, passhash, email, avatarUrl, false, function (err) {
        //     if (err) {
        //       return next(err);
        //     }
        //     // 发送激活邮件
        //     mail.sendActiveMail(email, utility.md5(email + passhash + config.session_secret), loginname);
        //     res.render('sign/signup', {
        //       code: 0, success: '欢迎加入 ' + config.name + '！我们已给您的注册邮箱发送了一封邮件，请点击里面的链接来激活您的帐号。'
        //     });
        //   });
        // }));
      });
  })
    
}

export {
    getArticle
}