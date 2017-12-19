var fs = require('fs');
var jwt = require('jsonwebtoken');
module.exports = function (req,res) { 
    var token, obj, flag = false;
    var tel = req.body.telephone;
    var psd = req.body.password;
    var userList = JSON.parse(fs.readFileSync('./data_table/userList.json','utf-8'));
    userList.forEach((item,index) =>{
        if(tel == item.telephone){
            flag = true;
            if(psd == item.password){
                token = jwt.sign(req.body, '1508', { expiresIn:     60*60 });
                obj = {
                    "code": '1',
                    "token": token,
                    "msg": 'success'
                }
            }else{
                obj = {
                    "code": '2',
                    "msg": '密码错误'
                }
            }
        }
        if(!flag){
            obj = {
                "code": '3',
                "msg": '用户名不存在'
            }
        }
    });
    res.end(JSON.stringify(obj));
}