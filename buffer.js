var fs = require('fs');
// var Buffer = require('Buffer');

var bfArr = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(bfArr.toString('utf-8'));
// console.log(bfArr[0].toString('utf-8'));
var sub = bfArr.slice(2);
sub[0] = 0x66;
bfArr[4] = 0x68;
// console.log(bfArr);
// console.log(sub);

// var bin = new Buffer('hello', 'utf-8');

// 
var dup = new Buffer(bfArr.length);
bfArr.copy(dup);
dup[0] = 0x60;
console.log(bfArr);
console.log(dup.toString());


function readAndCopy (src, dist) {

	// 数据流实现文件拷贝
	var rs = fs.createReadStream(src);
	var ws = fs.createWriteStream(dist);

	rs.on('data', function(chuck) {
		if(ws.write(chuck) === false) {
			rs.pause();
		}
	});

	rs.on('end', function () {
		ws.end();
	});

	ws.on('drain', function () {
		rs.resume();
	});
} 

var argv = process.argv.slice(2);
readAndCopy(argv[0], argv[1]);

