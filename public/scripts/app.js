// Fake data taken from initial-tweets.json
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


const renderTweets = function(tweets) {
for (let tweet of tweets){
  console.log("tweet of renderTweets", tweet)
  const $tweetElement = createTweetElement(tweet)
  console.log("renderTweets after the cb ",$tweetElement)
  $('main').append($tweetElement)
}

// takes return value and appends it to the tweets container
}

const createTweetElement = function(tweet) {

  const markup = `
<header>
  <h1>${tweet.user.name}</h1>
  <img src =${tweet.user.avatars}>
  <h3>${tweet.user.handle}</h3>
</header>
<p>${tweet.content.text}</p>
<footer>
  <h2>${tweet.content.create_at}</h2>
  <img src="/images/heart.png">
  <img src="/images/flag.png">
  <img src="/images/square.jpg">
</footer>
`
let $tweetElement = $('<article></article>').addClass('postedTweet');
console.log($tweetElement)
$tweetElement.append(markup);

return $tweetElement;
};

const loadTweets = $(function(){
  $.ajax({
    url:"/tweets",
    method:"GET",
    data: $(".tweet-form").serialize(),
    })
})
loadTweets ()


$(document).ready(() => {

$(".tweet-form").on("submit", function( event ) {
  event.preventDefault();
  $.ajax({
    url:"/tweets",
    method:"POST",
    data: $(".tweet-form").serialize(),
    },
    function(response){
      console.log('succeed',data)
    })
  console.log( $( this ).serialize() );
});
renderTweets(data) 
});