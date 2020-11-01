# blogProject
# expressTest

### 更换模板引擎只需要这5句
```javascript
var mustacheExpress = require('mustache-express');
app.engine("mustache", mustacheExpress());
app.set('views', './templates/zh-hans/');
app.set('view engine', 'mustache');
res.render('index', data);
```
todo

在/usr/local/Cellar/mongodb/4.0.3_1/bin目录下，执行mongod,另开一个tab执行./mongo