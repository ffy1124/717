var express = require('express');
var bodyparser = require('body-parser');
var queryApi = require('./queryApi')
var app = express()

app.use(bodyparser.json())

app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Content-Type', 'application/json');
    next();
})

app.post('/mall/index/getGoodsChannel',function(req,res){
    res.status(200)
    queryApi('/mall/index/getGoodsChannel',req.body,"POST").then(data=>{
        res.end(data);
    })
})

//点击首页购物车
let getToken = require('./api/getToken');
app.post('/mall/index/getToken', getToken);

//点击登录
let Login = require('./api/login');
app.post('/mall/index/UserList', Login);

//点击注册
let Register = require('./api/register');
app.post('/mall/index/register', Register);

//请求分类数据
let getGoodslist = require('./api/getGoodslist');
app.post('/mobile/Category/categorySon', getGoodslist);

//请求购物车的数据
let getshopcarList = require('./api/getshopcarList');
app.post('/mobile/Category/getshopcarList', getshopcarList);

//请求级联地址数据
let addList = require('./api/getaddList');
app.post('/mobile/Category/getaddList', addList);

//添加邮寄地址
let addRlist = require('./api/addList');
app.post('/mobile/Category/addlist', addRlist);

//请求邮寄地址数据
let addressList = require('./api/addressList');
app.post('/mobile/Category/addressList', addressList);

//删除邮寄地址
let delAdd = require('./api/delAddress');
app.post('/mobile/Category/delAddress', delAdd);

app.listen('3000',function(){
    console.log('server listen 3000');
})