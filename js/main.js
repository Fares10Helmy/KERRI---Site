
// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining 
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/



/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input 
.attr();//html attribute => src , href , id 
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
*/





// FEATURES 
let imgs = Array.from(document.querySelectorAll(".item img"));
//let lightBox = document.getElementById("lightBox");
//let lightBoxItem = document.getElementById("lightBoxItem");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let closeBtn = document.getElementById("close");

let currentIndex = 0;



for(let i=0 ; i<imgs.length ; i++)   //imgs.length = 6
{
  imgs[i].addEventListener("click",function(event){

    lightBox.style.display="flex";
    let imgSrc= event.target.src;
    lightBoxItem.style.backgroundImage = `url("${imgSrc}")`;

    


    currentIndex = imgs.indexOf(event.target);     // to get nim of img used in next and prev //1
    
  })
}



// next button    
nextBtn.addEventListener("click",function(){

    currentIndex++; //2

  if(currentIndex==imgs.length)      //imgs.length=6
  {
    currentIndex=0;
  }

    let imgSrc = imgs[currentIndex].getAttribute ("src");
    lightBoxItem.style.backgroundImage = `url("${imgSrc}")`;
});


// prev button    
prevBtn.addEventListener("click",function(){

  currentIndex--; //0

if(currentIndex<0)      //imgs.length=6
{
  currentIndex= imgs.length -1;  //5
}

  let imgSrc = imgs[currentIndex].getAttribute ("src");
  lightBoxItem.style.backgroundImage = `url("${imgSrc}")`;
});


//close button
closeBtn.addEventListener("click",function(){

  lightBox.style.display="none";

})

// enable arrows   //https://keycode.info/
document.addEventListener("keydown",function(event){

  if(event.code== "ArrowRight")
  {
    currentIndex++; //2

    if(currentIndex==imgs.length)      //imgs.length=6
    {
      currentIndex=0;
    }
  
      let imgSrc = imgs[currentIndex].getAttribute ("src");
      lightBoxItem.style.backgroundImage = `url("${imgSrc}")`
  }


  if(event.code== "ArrowLeft")
  {
    currentIndex--; //0

    if(currentIndex<0)      //imgs.length=6
      {
        currentIndex= imgs.length -1;  //5
      }

  let imgSrc = imgs[currentIndex].getAttribute ("src");
  lightBoxItem.style.backgroundImage = `url("${imgSrc}")`;
  }

  
  if(event.code== "Escape")
  {
    lightBox.style.display="none";
  }



})




//test jquery
$(".imgs-item").click(function(){
let imgSrc = $(this).attr("src");
$("#mainImg").attr("src",imgSrc);
  })
//test jquery

//jquery
let aLocationTop = $(".about").offset().top    // makan 2i 7aga fe app



$(window).scroll(function(){     // user 3ml scroll wla l2

  let x = $(window).scrollTop(); // nzl feen bel scroll


      if( x > aLocationTop-70 )
      {
      
        $("#main-nav").css("backgroundColor","rgba(0,0,0,0.4)");
        $("#btn-up").fadeIn(800);
        //$("#main-nav").css("display","none");
      }
      else
      {
        $("#main-nav").css("backgroundColor","transparent");
        $("#btn-up").fadeOut(800);
        //$("#main-nav").css("display","flex"); 
      }


})

//btn up
$("#btn-up").click(function(){
  // $(window).scrollTop(0);  without animate
  $("html,body").animate({scrollTop:0},2000)
})

//about
$("#aboutLink").click(function(){
  $("html,body").animate({scrollTop:aLocationTop},2000);
})

//work
  let workLocation = $(".work").offset().top    // makan 2i WORK fe app

  $("#workLink").click(function(){
  $("html,body").animate({scrollTop:workLocation},2000);
})

// haga as7al mra wa7da
  $("a").not("a[data-toggle='pill']").click(function(){
    let Href = $(this).attr("href");  //herf bta3 a2 link attos 3aleh
    
    let sectionLocation = $(Href).offset().top;  // makan el section fe 2l app

    $("html,body").animate({scrollTop:sectionLocation},2000);
  }) 

  
  
//color box bar  (show == hide)
$("#sideIcon").click(function(){
let colorBoxWidth = $("#colorBox").innerWidth();

if(    $("#sideBar").css("left")   == "0px"   )  //keda bara
{
    $("#sideBar").animate({left:`-${colorBoxWidth}`},1000);
}
else
{
    $("#sideBar").animate({left: `0px`} ,1000);
}



//$("#colorBox").toggle(500);  
})



//put color in side bar
// $(".colorItem").eq(0).css("backgroundColor", "red");
// $(".colorItem").eq(1).css("backgroundColor", "blue");
// $(".colorItem").eq(2).css("backgroundColor", "green");
// $(".colorItem").eq(3).css("backgroundColor", "black");
// $(".colorItem").eq(4).css("backgroundColor", "gray");

//put color in side bar random
for (let i = 0; i < $(".colorItem").length; i++)
{
  let red = Math.round( Math.random()*255);       //0 ==> 255
  let green = Math.round( Math.random()*255);
  let blue = Math.round( Math.random()*255);


  $(".colorItem").eq(i).css("backgroundColor", `rgb(${red} , ${green} , ${blue} )`);
}


//put color in website
$(".colorItem").click(function(){

  let bgColor = $(this).css("backgroundColor");
  $("h1").css("color",bgColor);

})


// loading screen
$(document).ready(function(){

  $(".loading").fadeOut(1000);
  
  $("body").css("overflow","auto");




    //typed js pulgn
  var typed = new Typed('.element', { 
    // Waits 1000ms after typing "First"
    strings: ['START OUR JOURENY', 'WE HOPE TO MAKE YOU HAPPY'],
    loop:true ,
    typeSpeed:90 ,

  });

})