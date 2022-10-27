
const fs = require('fs');

var str="你好node.js 123";

fs.writeFile('1.txt',str, function (err){
    if (err){
        console.log('文件写入失败！'+err.message)
    }
    console.log('文件写入成功！')

})