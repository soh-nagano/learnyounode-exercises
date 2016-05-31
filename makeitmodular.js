var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(error, list) {
	if(error){
		throw error;
	}
	else {
		list.forEach(function(element){
			console.log(element);
		});
	}
})