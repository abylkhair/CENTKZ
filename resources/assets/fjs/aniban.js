$(document).ready(
function(){
startAnimation();
}
);


function startAnimation() { 
    var img = document.getElementById("aniban");
    var frameCount = 81;
    var i = 1;
    setInterval(function () {
		
		next=i++;
		zero='000';
		if ([next % frameCount]<1000){zero='0';}
		if ([next % frameCount]<100){zero='0';}
		if ([next % frameCount]<10){zero='00';}
		
		src='/aniban2/Rectangle 1_1_'+zero+ [next % frameCount]+'.jpg';
        img.src = src;
      
    }, 120);
}