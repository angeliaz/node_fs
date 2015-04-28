var path = require('path');
var path1 = 'foo//baz1/bar1/../bar';

console.log(path.normalize(path1));