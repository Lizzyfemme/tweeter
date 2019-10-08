

$(document).ready(() => {
  let textCounter = $(".counter")
  textCounter.text(140);
  $("textarea").keypress((event)=>{
    textCounter.text(140 - (event.target.textLength + 1))
  });
});

let subtract = function(){

};
