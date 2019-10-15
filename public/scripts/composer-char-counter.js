
/*This makes the character counter count down and change to red if there are mor than 140 characters*/

$(document).ready(() => {
  let textCounter = $(".counter");
  let textArea= $("textarea");
  textCounter.html(140);
  textArea.on('keyup', function () {
    let charCount = 140 - $(this).val().length;
    textCounter.html(charCount);
    if (charCount < 0) {
      textCounter.addClass ('negCounter');
    } else {
      textCounter.removeClass ('negCounter');
    }
  });

});
