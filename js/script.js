
  window.addEventListener("scroll", function(event){
     var top = $(this).scrollTop();
     var prlBlock=$(".paralax").innerHeight();
     var p =1+(top / prlBlock /2) ;
      
     var img=$(".paralax__img-1");  
     var speed =$(img).attr("data-speed"); 
     	var posY=top *speed /100;
      img.css({"transform":"translateX("+posY+"px) scale("+p+")"});

      var img2=$(".paralax__img-3");   
     	var speed2 =$(img2).attr("data-speed");
     	var posY2=(top*speed2/100);
     	
      img2.css({"transform": "translateY("+posY2+"px) scale("+p+")"});

       var img3=$(".paralax__img-2");   
     	var speed3 =$(img3).attr("data-speed");
     	var posY3=-(top*speed3/100);
     	
      img3.css({"transform": "translateX("+posY3+"px) scale("+p+")"});

      var procent= top / prlBlock *100;
      console.log(procent);
      var title=$(".paralax__title");
     
      if(procent > 44)
      title.addClass("active");

       if(procent < 44)
      title.removeClass("active");
      
     });
 
