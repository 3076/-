// 回到顶部
function toTop(){
    // window.scrollTo(0,0);
    // 1.获取滚动条所在位置
   var posY = window.scrollY;
   console.log("位置：",posY);
  
    var sit = setInterval(function(){
        posY -= 100;
        //window.scrollTo(0,posY);
        window.scrollBy(0,-100);
        if(posY<=0){
            //清除定时器
            clearInterval(sit);
        }
        console.log(posY) 
        //便于在控制台观察定时器是否停止
    },1000/100);
  }
  
  // 回到顶部动画
  var back_box = document.querySelector(".back_box")
  window.onscroll = function () {
      console.log("滚动条位置:", window.scrollY);
      //位置 >=680  显示： 位置 <=660 隐藏
      var posY = window.scrollY;
      if (posY >= 600 &&  posY < 1500) {
          // navbox.style.cssText = "display:block;transform: translateY(60px)"//显示
          back_box.style.cssText = "top:600px;right:50px";
          // transform: ;
      }else if(posY >= 2000){
        back_box.style.cssText = "bottom:325px;right:50px";
      }

      
      if (posY <= 660) {
        back_box.style.cssText = "display:none;";//隐藏
          // back_box.style.cssText = "top:-500px;right:-100px";   transform: translateY(-660px)
      }
     
  }