var fs = require('fs');
module.exports = function (req,res){
    var classifyList = JSON.parse(fs.readFileSync('./data_table/classifyList.json'));
    res.end(JSON.stringify(classifyList));
}