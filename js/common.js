// writen by Becky,2018/11/05
function a2d(n){
    return n*180/Math.PI;
}

function d2a(n){
    return n*Math.PI/180;
}

function rnd(n, m){
    return Math.floor(Math.random()*(m-n)+n);
}

var resource_img = {
    fish1: './images/fish1.png',
    fish2: './images/fish2.png',
    fish3: './images/fish3.png',
    fish4: './images/fish4.png',
    fish5: './images/fish5.png',
    cannon1: './images/cannon1.png',
    cannon2: './images/cannon2.png',
    cannon3: './images/cannon3.png',
    cannon4: './images/cannon4.png',
    cannon5: './images/cannon5.png',
    cannon6: './images/cannon6.png',
    cannon7: './images/cannon7.png',
    bottom: './images/bottom.png',
    bullet: './images/bullet.png',
    coin1: './images/coinAni1.png',
    coin2: './images/coinAni2.png',
    number: './images/number_black.png'
}
function loadImages(json, fn){
    let res = {};
    let total = 0;
    let complete = 0;

    for(let name in json){
        total++;
        let oImg = new Image();
        oImg.src = json[name];
        res[name] = oImg;//往res内存值

        oImg.onload = function(){
            complete++;

            if(complete == total){
                _imgs = res;
                fn();
            }
        }

        oImg.onerror = function(){
            alert('图片加载失败'+oImg.src);
        }
    }
}