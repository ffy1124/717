var fs = require('fs');
module.exports = function (req,res) {
    var addList = JSON.parse(fs.readFileSync('./data_table/addressList.json','utf-8'));
    addList.push(req.body);
    fs.writeFileSync('./data_table/addressList.json',JSON.stringify(addList));
    res.end('success');
}