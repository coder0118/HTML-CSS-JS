const fs = require('fs');

fs.readFile('成绩.txt', 'UTF-8', function (err, dataStr) {
    if (err) {
        console.log('文件读取失败！' + err.message)
    }
    console.log("文件读取成功！" + dataStr)
    //按空格进行分隔
    const addOld = dataStr.split(' ')
    //循环分割数组，进行字符串替换
    const arrNew = []

    addOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })

    console.log(arrNew)
    //换行
    const newStr = arrNew.join(('\r\n'))

    console.log(newStr)

    //调用fs.writeFile()方法写回数到新文件
    fs.writeFile('成绩（整理后）.txt', newStr, "UTF-8", function (err) {
        if (err) {
            return console.log('文件写入失败！' + err.message)
        }
        console.log('文件写入成功！')
    })

})

