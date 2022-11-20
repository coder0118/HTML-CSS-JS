window.onload = function () {
    var oBtnLeft = document.getElementById("btn_left");
    var oBtnRight = document.getElementById("btn_right");
    var oPic = document.getElementById("picture");
    var imgList = ['pic/4.jpg', 'pic/2.jpg', 'pic/3.jpg', 'pic/1.jpg', 'pic/5.jpg'];

    var num = 0;

    //切换下一张照片函数
    oBtnRight.onclick = function () {
        num++;
        if (num > imgList.length - 1) {
            num = 0;
        }
        oPic.src = imgList[num];
    }
    //切换上一张照片函数
    oBtnLeft.onclick = function () {
        num--;
        if (num < 0) {
            num = imgList.length - 1;
        }
        oPic.src = imgList[num];

    }
}

var imgList = ['pic/4.jpg', 'pic/2.jpg', 'pic/3.jpg', 'pic/1.jpg', 'pic/5.jpg'];
var n = 0;
var timeout = 1300;

setInterval(change, timeout);
function change() {
    var oPic = document.getElementById("picture");
    n++;
    if (n > imgList.length - 1) {
        n = 0;
    }
    oPic.src = imgList[n];
}

function sub() {
    alert('您的信息已提交');
}