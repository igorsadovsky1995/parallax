
  window.addEventListener("scroll", function(event){
     var top =pageYOffset;
     var img=$(".paralax__img-1");   
     	var posY=top/100;
      img.css({"transform": "scale("+posY+","+posY+")"});

      var img2=$(".paralax__img-3");   
     	var speed2 =$(img2).attr("data-speed");
     	var posY2=(top*speed2/100);
     	
      img2.css({"transform": "translateY("+posY2+"px)"});

       var img3=$(".paralax__img-2");   
     	var speed3 =$(img3).attr("data-speed");
     	var posY3=-(top*speed3/100);
     	console.log(speed3);
      img3.css({"transform": "translateX("+posY3+"px)"});
     });
 
