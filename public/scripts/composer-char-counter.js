const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



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
  renderTweets(data)
});
