var fs = require('fs');
module.exports = function (req,res) { 
    var obj, flag=true;
    var tel = req.body.tel;
    var password = req.body.password;
    var userList = JSON.parse(fs.readFileSync('./data_table/userList.json'));
    userList.forEach((item,index)=>{
        if (item.telephone == tel){
            flag = false;
        }
    });
    if(flag){
        userList.push({ telephone: tel, password: password });
        obj={
            "code": "1",
            "msg":"添加成功"
        }
    }else{
        obj = {
            "code": "2",
            "msg": "此用户名已存在"
        }
    }
    fs.writeFileSync('./data_table/userList.json',JSON.stringify(userList));
    res.end(JSON.stringify(obj));
}