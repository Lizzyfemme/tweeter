

$(document).ready(() => {
  var textCounter = $(".counter")
  $("textarea").keypress((event)=>{
    console.log(event.target.textLength)
    textCounter.text(event.target.textLength)
  });
});
