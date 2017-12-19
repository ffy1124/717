var fs = require('fs');
module.exports = function (req,res) { 
    var getshopcarList = JSON.parse(fs.readFileSync('./data_table/shopCarlist.json','utf-8'));
    res.end(JSON.stringify(getshopcarList));
}