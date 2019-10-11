
const validateTweet = function (data) {
  $('.errorHandling').hide()
  if (data === "" || data === null) {
    $('.errorHandling').html("Tweets must contain data. Please edit your tweet.").show()
  } else if (data.length > 140) {
    $('.errorHandling').html("Sorry there is a 140 character maximum for tweets. Please shorten your message").show()
  } else {
    return true;
  }
};

const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    //console.log("tweet of renderTweets", tweet)
    const $tweetElement = createTweetElement(tweet)
    //console.log("renderTweets after the cb ", $tweetElement)
    $('#tweet-container').prepend($tweetElement)
  }
}

const createTweetElement = function (tweet) {

  const markup = `
<header>
  <div class= "nameAndPic">
    <img src =${tweet.user.avatars}>
    <h1>${tweet.user.name}</h1>
  </div>
  <h3>${tweet.user.handle}</h3>
</header>
<p>${tweet.content.text}</p>
<footer>
  <h2>${moment(tweet.created_at).fromNow()}</h2>
  <div class="icons">
    <img src="/images/heart.png">
    <img src="/images/flag.png">
    <img src="/images/square.jpg">
  </div>
</footer>
`
  let $tweetElement = $('<article></article>').addClass('postedTweet');
  $tweetElement.html(markup);

  return $tweetElement;
};

const loadTweets = function () {
  $.ajax({
    url: "/tweets",
    method: "GET",
    success: function (data) {
      $('#tweet-container').html('');
      renderTweets(data)
    }
  })
}

$(document).ready(() => {
  loadTweets();
  $(".tweet-form").on("submit", function (event) {
    event.preventDefault();
if (validateTweet($(".new-tweet-input").val())){
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(".tweet-form").serialize(),
      success: function (response) {
        loadTweets();

      }
    })
  }
});
  
});

