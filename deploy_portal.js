var ncp = require('ncp').ncp
var path = require('path')

console.log("done")

var distPath = path.join(require.main.filename,"../dist")

console.log(distPath)

var targetPath = path.join(distPath,"../../../IMCC/WebContent/ia")

console.log(targetPath)

ncp(distPath, targetPath, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log('done!');
});