var jwt = require('jsonwebtoken');
var fs = require('fs');
module.exports = function (req,res) {
    var token = req.headers.authorization;
    //var flag = true;
    /* var shopCarlist = JSON.parse(fs.readFileSync('./data_table/shopCarlist.json','utf-8'));
    shopCarlist.map((item,index)=>{
        if(req.body.id == item.id){
            item.count++;
            flag = false;
        }
        return item;
    })
    if(flag){
        shopCarlist.unshift(req.body);
    }
    fs.writeFileSync('./data_table/shopCarlist.json',JSON.stringify(shopCarlist)); */
    res.end('success');
}