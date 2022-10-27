//导入fs模块
const fs = require('fs');

//调用fs.readFile()来读取文件
//参数1：文件存放路径
//参数2：声明文件编码格式
//参数3：回调函数，获得读取结果
fs.readFile('1.txt','UTF-8',function (err,dataStr){
    //打印失败结果
    //若成功，err为null
    //若失败，err值为错误对象；dataStr值为undefined
    console.log(err);
    console.log('------');
    //打印成功结果
    console.log(dataStr);
})