var fs = require('fs');
module.exports = function (req,res) {
    var addList = JSON.parse(fs.readFileSync('./data_table/addr.json','utf-8'));
    res.end(JSON.stringify(addList));
}