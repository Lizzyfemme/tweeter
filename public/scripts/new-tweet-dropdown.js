//This makes the tweet field slide up or down when clicked
$("button").click(function () {
  $(".new-tweet").slideToggle("slow", function () {
    $(".new-tweet-input").focus();
  });

});
