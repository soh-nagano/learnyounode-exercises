var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	var filter  = "." + ext;
	var output = [];
	fs.readdir(dir, function (err, list) {
		if (err) {
			return callback(err);
		}
		else output = list.filter(function(element){
			return path.extname(element) == filter;
		})
			return callback(null, output)
		})
};



