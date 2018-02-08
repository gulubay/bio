$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

var work = ['PHOTOGRAPHER', '<span id= "graphic"> GRAPHIC DESIGNER </span>', 'WEB DEVELOPER'];
var result = [];
var x = 0;

// $('#dev').animate({'opacity': 0}, 400);

function changeText(){
  while(x < work.length +1){
       x++;
      if(x < work.length +1){
        result= [];
        result.push(work[x -1]);
        document.getElementById("dev").innerHTML = result; 
        // fadeIn(text);
      } else if( x > work.length){
         x = 0;
      }

        setInerval(changeText(), 1500);
  }

}


// $('#startContact').click(function(){
// 	$('.contactForm').style.display = "block";
// })
 
 
function startContact(){
	var contactPage = document.getElementById('contactPage');
	contactPage.style.display= 'block';
	 $("#contactPage").animate({height: "100%"});
	if(contactPage.style.display = 'block'){
		document.getElementsByTagName("BODY")[0].style.overflow ="hidden";
	}
}

function closePage(){
	var contactPage = document.getElementById('contactPage');
	document.getElementsByTagName("BODY")[0].style.overflow ="scroll";
	$("#contactPage").animate({height: "0%"});

setTimeout(
  function() 
  {
    
	if(contactPage.style.height="0%"){
			contactPage.style.display= 'none';
		}
	
  }, 350);

	}

	



	
	// document.getElementById('contactPage').style.display= 'none';


// }

