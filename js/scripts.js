$(document).ready(function() {
  $(".dezin").click(function() {
    $(".dezin").hide(function(){
      $(".p1").show(function(){
        $("h5").css("font-weight","bold")
      });
    });
  });
  $(".p1").click(function(){
    $(".dezin").show(function(){
      $(".p1").hide();
    });
  });


  $(".port").click(function() {
    $(".port").hide(function(){
      $(".designs").show();
    });
  });
  $(".designs").click(function(){
    $(".port").show(function(){
      $(".designs").hide();
    });
  });



  $(".prod").click(function() {
    $(".prod").hide(function(){
      $(".designz").show();
    });
  });
  $(".designz").click(function(){
    $(".prod").show(function(){
      $(".designz").hide();
    });
  });







});
