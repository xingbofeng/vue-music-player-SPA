var express = require('express');
var POSThttp = require('./POSThttp.js');
var bodyParser = require('body-parser');
// 使用body-parser解析post请求的参数，如果没有，req.body为undefined。
var cors = require('cors');
// cors 解决跨域
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.post('/', (req, res) => {
  POSThttp(req).then((data) => {
  	// res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  	// res.header('Access-Control-Allow-Headers','Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
   //  res.header('Access-Control-Allow-Methods','GET,POST');
    res.send(data);
  }).catch((err) => {
  	// res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  	// res.header('Access-Control-Allow-Headers','Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
   //  res.header('Access-Control-Allow-Methods','GET,POST');
    res.send(err);
  });
});
app.listen(3000, () => {
  console.log('server loaded in http://localhost:3000')
});