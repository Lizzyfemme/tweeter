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
    // if ((140 - (event.target.textLength+1)) <= 0 ) {
    //   (".counter").removeClass(".counter").addClass(".negCounter")
    // }
  //}