// Comentário: código implementado corretamente. Nota 2.0

const fs = require('fs');
var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./1.txt', function(error, data) {
    resolve(parseInt(data));
    });
})
var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./2.txt', function(error, data) {
    resolve(parseInt(data));
    });
})

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./3.txt', function(error, data) {
    resolve(parseInt(data));
    });
})
Promise.all([p1, p2, p3]).then(function([data1, data2, data3]) {
    console.log(data1 + data2 + data3);
});
