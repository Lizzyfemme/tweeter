
// validateTweet is a function that checks the tweets for errors
const validateTweet = function(data) {
  if (!data) throw "Tweets must contain data. Please edit your tweet.";
  if (data.length > 140) throw "Sorry there is a 140 character maximum for tweets. Please shorten your message";
  return true;
};
//if tweets do not pass validateTweet an error will be thrown
const throwError = function(msg) {
  if (msg) {
    const errorArea = $('.errorHandling');
    errorArea.html(msg).show();
  }
};

/* renderTweets is a function that interates over the tweets and adds then to the tweet container.*/

const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweetElement = createTweetElement(tweet);
    $('#tweet-container').prepend($tweetElement);
  }
};

//createTweetElement is a function that formats the tweets to the correct html
const createTweetElement = function(tweet) {
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
`;
  let $tweetElement = $('<article></article>').addClass('postedTweet');
  $tweetElement.html(markup);
  return $tweetElement;
};
//loadTweets is a function that retrieve tweets
const loadTweets = function() {
  $.ajax({
    url: "/tweets",
    method: "GET",
    success: function(data) {
      $('#tweet-container').html('');
      renderTweets(data);
    }
  });
};
//where new tweets are validated, posted and displayed
$(document).ready(() => {
  loadTweets();
  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();
    const errorArea = $('.errorHandling');
    errorArea.hide();
    try {
      validateTweet($(".new-tweet-input").val());
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(".tweet-form").serialize(),
        success: function(response) {
          loadTweets();
          //new line
          $(".new-tweet-input").val('');
        }
      });
    } catch (msg) {
      throwError(msg);
    }
  });
  
});

