var fs = require('fs');
module.exports = function (req,res) {
var addressList = JSON.parse(fs.readFileSync('./data_table/addressList.json','utf-8'));
res.end(JSON.stringify(addressList));
}