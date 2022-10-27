//导入fs模块
const fs = require('fs');

//调用fs.readFile()来读取文件
//参数1：文件存放路径
//参数2：声明文件编码格式
//参数3：回调函数，获得读取结果

fs.readFile('1.txt','UTF-8',function (err,dataStr){
    if (err){
        console.log('文件读取失败'+err.message);
    }
    else {
        console.log('文件读取成功:'+dataStr);
    }
})