// Init
var $ = jQuery;

var date1 = new Date();
var date2 = new Date("06/01/2021");
  
// İki tarihin saat farkını hesaplamak için
var Difference_In_Time = date2.getTime() - date1.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
var animationTime = 15,
  days = 4;

  function deadlineMain(){
    // console.log(date1)
    // console.log(date2)
    // console.log(Difference_In_Time)
    // console.log(Difference_In_Days)
    $(document).ready(function () {
  // timer arguments:
  //   #1 - time of animation in mileseconds,
  //   #2 - days to deadline

  $("#progress-time-fill, #death-group").css({
    "animation-duration": animationTime + "s",
  });

  var deadlineAnimation = function () {
    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "1.5s" });
    }, 0);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "1s" });
    }, 4000);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "0.7s" });
    }, 8000);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "0.3s" });
    }, 12000);

    setTimeout(function () {
      $("#designer-arm-grop").css({ "animation-duration": "0.2s" });
    }, 15000);
  };

  function timer(totalTime, deadline) {
    var time = totalTime * 1000;
    var dayDuration = time / deadline;
    var actualDay = deadline;

    var timer = setInterval(countTime, dayDuration);

    function countTime() {
      --actualDay;
      $(".deadline-days .day").text(actualDay);

      if (actualDay == 0) {
        clearInterval(timer);
        $(".deadline-days .day").text(deadline);
      }
    }
  }

  var deadlineText = function () {
    var $el = $(".deadline-days");
    var html =
      '<div class="mask-red"><div class="inner">' +
      $el.html() +
      '</div></div><div class="mask-white"><div class="inner">' +
      $el.html() +
      "</div></div>";
    $el.html(html);
  };

  //deadlineText();

  deadlineAnimation();
  timer(animationTime, days);

  setInterval(function() {
    //console.log("setInterval çalıştı");

    timer(animationTime, days);
    deadlineAnimation();
    
    //console.log("begin interval", animationTime * 1000);
  }, animationTime * 1000);
});

  }

