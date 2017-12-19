var fs = require('fs');
module.exports = function (req,res) {
    var addressList = JSON.parse(fs.readFileSync('./data_table/addressList.json', 'utf-8'));
    var index = req.body.index;
    addressList.splice(index, 1);
    fs.writeFileSync('./data_table/addressList.json', JSON.stringify(addressList));
    res.end('success');
}