

$(document).ready(function(){
    
   function stickyMenu(){
     var nav = $("#nav");
     var navOffsetFromTop = nav.position().top;
    $(window).on("scroll", function(event){
         event.preventDefault();
         if($(window).scrollTop() > navOffsetFromTop) {
         nav.addClass("sticky");
         } else {     
         nav.removeClass("sticky");                                 }   
       });
   }
   stickyMenu();
    
   
   $("#nav").find('a').on('click', function(e) {
    e.preventDefault();
    $link = $(this).attr('href');
  
    $('html, body').animate({
    scrollTop: $($link).offset().top 
  }, 800 );
  });
    
    $(".mainBottom").find('a').on('click', function(e) {
    e.preventDefault();
    $link = $(this).attr('href');
  
    $('html, body').animate({
    scrollTop: $($link).offset().top -70,
        
  }, 800 );
  });

  $("#arrow").on("click", function(e){
    e.preventDefault();
   $bottom=$(".nav_section") 
   $("html,body").animate({
       scrollTop:$($bottom).offset().top 
   },800) ;
  });  
    
    
 
    //slider pojedynczy
    
    var slideNumber = 0;
    var max = $(".slide").length;
    
   $("#team").find(".leftArrow").click(function(event){
       slideNumber = slideNumber - 1;
       if (slideNumber<0) {
           slideNumber= max-1;
       }; 
       Slider(slideNumber);
   });
   
   
      $("#team").find(".rightArrow").click(function(event){
       slideNumber = slideNumber + 1;
       if (slideNumber>=max) {
           slideNumber=0;
       };       
       Slider(slideNumber);
   });
       
 
    function Slider(slideNumber){
      
     $(".slide").hide();
        
     $(".slide").eq(slideNumber).show();
    };
                    
    //progressbar   
    
	 
      
     $(".progress-bar").mouseenter(function(){
          var wi = $(this).data("value");
          $(this).css("width", wi);
      })
        
     $(".progress-bar").mouseleave(function(){
         
          $(this).css("width", "5%");
      })
  /*function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('.progress-bar').animate({ width: progressBarWidth }, 500).html(percent + "% ");
}
  */ 
     $("#portfolio").on("click", ".rect", function(){
        
         var sort = $("#images").children();
         var app = $("#images").find(".app");
         var web = $("#images").find(".web");
         var ikon = $("#images").find(".ikon");
        
         
         if ($(this).hasClass("app") ) {
            
            app.show(); 
            web.hide();
            ikon.hide(); 
         } else if ($(this).hasClass("web") ) {
             $(this).css("background-color, green");
             web.show();
             app.hide();
             ikon.hide();
            
         }else if($(this).hasClass("ikon")){
            ikon.show();
            app.hide();
             web.hide();
             
         }else if($(this).hasClass("all")){
             web.show();
             app.show();
             ikon.show();
         }
        
     
     });
         
  
    
});




