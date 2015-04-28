var fs = require('fs');

function copy(src, dist) {
	// fs.writeFileSync(dist, fs.readFileSync(src));
	fs.createReadStream(src).pipe(fs.createWriteStream(dist));
}

function main(argv) {
	copy(argv[0], argv[1]);
	console.log(argv);
} 

main(process.argv.slice(2));