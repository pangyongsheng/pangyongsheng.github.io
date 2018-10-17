window.onload = function() {

     var $Dom = document.querySelector(".img1");

     $Dom.onclick = function(){
        
     }

}

/*
 *  自定义移动端手势事件  
 *  事件：
 *  - gesturestart      手势事件开始
 *  - gesturechange     手势缩放
 *  - gestureend        手势事件结束
 *  - swipeMove         单指滑动
 */
(function() {
    var istouch = false;
    var isdown = false;
    var gesturesPosition = []; //手势点坐标
    var startPosition, movePosition, endPosition; //滑动开始位置、移动位置、结束位置
    //事件声明
    var gesturestart = new CustomEvent('gesturestart');
    var gesturechange = new CustomEvent('gesturechange');
    var gestureend = new CustomEvent('gestureend');
    var swipeMove = new CustomEvent('swipeMove');

    var supportTouch = 'ontouchend' in document,
        touchStartEvent = supportTouch ? 'touchstart' : 'mousedown', //触屏
        touchMoveEvent = supportTouch ? 'touchmove' : 'mousemove', //移动
        touchEndEvent = supportTouch ? 'touchend' : 'mouseup'; //离屏


    //监听touchstart事件
    document.addEventListener("touchStartEvent", function(e) {
        e.preventDefault();
        if (e.touches.length >= 2) { //判断是否有两个点在屏幕上
            istouch = true;
            gesturesPosition = e.touches; //得到第一组两个点
            var screenMinPoint = getMidpoint(gesturesPosition[0], gesturesPosition[1]); //中心点坐标
            gesturestart.midPoint = [screenMinPoint[0] - e.target.offsetLeft, screenMinPoint[1] - e.target.offsetTop]; //中心点坐标相对目标元素坐标
            e.target.dispatchEvent(gesturestart);
        } else {
            startPosition = [e.touches[0].pageX, e.touches[0].pageY];
            isdown = true;
        }
    }, false);

    //监听touchmove事件
    document.addEventListener("touchMoveEvent", function(e) {
        e.preventDefault();
        if (e.touches.length >= 2 && istouch) {
            var now = e.touches; //得到第二组两个点
            var scale = getDistance(now[0], now[1]) / getDistance(gesturesPosition[0], gesturesPosition[1]); //得到缩放比例
            var rotation = getAngle(now[0], now[1]) - getAngle(gesturesPosition[0], gesturesPosition[1]); //得到旋转角度差
            gesturechange.scale = scale.toFixed(2);
            gesturechange.rotation = rotation.toFixed(2);
            e.target.dispatchEvent(gesturechange);
        } else if (isdown) {
            movePosition = [e.touches[0].pageX, e.touches[0].pageY];
            endPosition = movePosition;
            movePosition = [movePosition[0] - startPosition[0], movePosition[1] - startPosition[1]];
            startPosition = [e.touches[0].pageX, e.touches[0].pageY];
            swipeMove.distance = movePosition;
            e.target.dispatchEvent(swipeMove);
        }
    }, false);

    //监听touchend事件
    document.addEventListener("touchEndEvent", function(e) {
        if (istouch) {
            istouch = false;
            e.target.dispatchEvent(gestureend);
        };
    }, false);
    /*
     * 两点的距离
     */
    function getDistance(p1, p2) {
        var x = p2.pageX - p1.pageX,
            y = p2.pageY - p1.pageY;
        return Math.sqrt((x * x) + (y * y));
    };
    /*
     * 两点的夹角
     */
    function getAngle(p1, p2) {
        var x = p1.pageX - p2.pageX,
            y = p1.pageY - p2.pageY;
        return Math.atan2(y, x) * 180 / Math.PI;
    };
    /*
     * 获取中点 
     */
    function getMidpoint(p1, p2) {
        var x = (p1.pageX + p2.pageX) / 2,
            y = (p1.pageY + p2.pageY) / 2;
        return [x, y];
    }

})

/*
 * 事件处理
 */
var previewImg = function() {
    
    var $imgs = document.querySelector("img");

    $imgs.addEventListener('gesturestart', gesturef, false);
    $imgs.addEventListener('gesturechange', gesturef, false);
    $imgs.addEventListener('gestureend', gesturef, false);
    $imgs.addEventListener('swipeMove', gesturef, false);

    function gesture(event) {

        switch (event.type) {

            case "gesturestart":
                var x = event.midPoint[0];
                var y = event.midPoint[1];
                box.style.transformOrigin = x + "px " + y + "px";
                break;

            case "gesturechange":
                var sc = parseFloat(event.scale);
                tMatrix[0] = tMatrix[0] + sc - 1 > 0.5 && tMatrix[0] + sc - 1 < 3 ? tMatrix[0] + sc - 1 : tMatrix[0];
                tMatrix[3] = tMatrix[3] + sc - 1 > 0.5 && tMatrix[3] + sc - 1 < 3 ? tMatrix[3] + sc - 1 : tMatrix[3];
                var temp = tMatrix.join(",");
                box.style.transform = "matrix(" + temp + ")";
                break;

            case "gestureend":
                break;

            case "swipeMove":
                tMatrix[4] = tMatrix[4] + parseInt(event.distance[0]);
                tMatrix[5] = tMatrix[5] + parseInt(event.distance[1]);
                var temp = tMatrix.join(",");
                box.style.transform = "matrix(" + temp + ")";

        }


    }
}