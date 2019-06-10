$(document).ready(function() {
  $(".dezin").click(function() {
    $(".dezin").hide(function() {
      $(".p1").show(function() {
        $("#h51").css("font-weight", "bold");
      });
    });
  });
  $(".p1").click(function() {
    $(".dezin").show(function() {
      $(".p1").hide(function() {
        $("#h51").css("font-weight", "normal");
      });
    });
  });


  $(".port").click(function() {
    $(".port").hide(function() {
      $(".designs").show(function() {
        $("#h52").css("font-weight", "bold");
      });
    });
  });
  $(".designs").click(function() {
    $(".port").show(function() {
      $(".designs").hide(function() {
        $("#h52").css("font-weight", "normal");
      });
    });
  });

  $(".prod").click(function() {
    $(".prod").hide(function() {
      $(".designz").show(function() {
        $("#h53").css("font-weight", "bold");
      });
    });
  });
  $(".designz").click(function() {
    $(".prod").show(function() {
      $(".designz").hide(function() {
        $("#h53").css("font-weight", "normal");
      });
    });
  });



  $('#feedback').submit(function(event) {
    var name = $('input#name').val();
    var email = $('input#email').val();
    if (name && email != '') {
      alert('Thank you so much for contacting us  ' + name + ' we appreciate your feedback');
      alert("Your message has been received!")
    }
     else {
      alert('Invalid input');
    }
    event.preventDefault();
  });


  









});
