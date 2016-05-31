var inputs = process.argv;

var sum = 0;
for (var i = 2; i < inputs.length; i++){
	sum += +inputs[i];
}

console.log(sum);
