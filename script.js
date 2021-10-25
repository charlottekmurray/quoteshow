/* Data to Show*/
const data = [
  {
    quote: `Friday the 13th`,
    emoji:
      '<img src="https://media0.giphy.com/media/1MC8r5KvTmGjD7D2KS/giphy.gif?cid=790b7611664fa90ad3f2902ec195976cb8c943f1c2fb8158&amp;rid=giphy.gif&amp;ct=g" alt="https://media0.giphy.com/media/1MC8r5KvTmGjD7D2KS/giphy.gif?cid=790b7611664fa90ad3f2902ec195976cb8c943f1c2fb8158&amp;rid=giphy.gif&amp;ct=g" class="transparent">',
    image: `url(assets/Pumpkin-Halloween-Background-7.jpg)`
  },
  {
    quote: `A Nightmare on Elm Street`,
    emoji:
      '<img src="https://i.giphy.com/media/3otPoPWetYFLGwDDQ4/giphy.webp" alt="https://i.giphy.com/media/3otPoPWetYFLGwDDQ4/giphy.webp" class="transparent">',
    image: `url(assets/catandpumpkins.jpg)`
  },
  {
    quote: `Saw`,
    emoji:
      '<img src="https://i.giphy.com/media/1qnuGtWiouZUI/giphy.webp" alt="https://i.giphy.com/media/1qnuGtWiouZUI/giphy.webp" class="transparent">',
    image: `url(assets/forest.jpg)`
  },
  {
    quote: `Scream`,
    emoji:
      '<img src="https://i.giphy.com/media/wzgjH2QsAanC0/giphy.webp" alt="https://i.giphy.com/media/wzgjH2QsAanC0/giphy.webp" class="transparent">',
    image: `url(assets/funnysquirrels.jpg)`
  },
  {
    quote: `The Exorcist`,
    emoji:
      '<img src="https://i.giphy.com/media/3otPoJhe5AZrhllEeQ/giphy.webp" alt="https://i.giphy.com/media/3otPoJhe5AZrhllEeQ/giphy.webp" class="transparent">',
    image: `url(assets/graveyard.jpg)`
  },
  {
    quote: `It’s the Great Pumpkin, Charlie Brown`,
    emoji:
      '<img src="https://i.giphy.com/media/RmEumn52rgwZa/giphy.webp" alt="https://i.giphy.com/media/RmEumn52rgwZa/giphy.webp" class="transparent">',
    image: `url(assets/manypumpkinsorange.jpg)`
  },
  {
    quote: `Hocus Pocus`,
    emoji:
      '<img src="https://i.giphy.com/media/jkH6SAznVzJZK/giphy.webp" alt="https://i.giphy.com/media/jkH6SAznVzJZK/giphy.webp" class="transparent">',
    image: `url(assets/skeletons.jpg)`
  },
  {
    quote: `Sleepy Hollow`,
    emoji:
      '<img class="oJpGW" src="https://64.media.tumblr.com/03c0c363701194a89a88c4835446a696/tumblr_pcsqlfKDR71spmueto1_640.gifv" alt="#sleepy hollow from the Moviegoer">',
    image: `url(assets/spookyhouse.jpg)`
  },
  {
    quote: `The Addams Family`,
    emoji:
      '<img src="https://i.giphy.com/media/11XZmjOcJBNPt6/giphy.webp" alt="https://i.giphy.com/media/11XZmjOcJBNPt6/giphy.webp" class="transparent">',
    image: `url(assets/ouija.jpg)`
  },
  {
    quote: `Halloween`,
    emoji:
      '<img src="https://media1.popsugar-assets.com/files/2013/09/26/913/n/1922283/05d5cdd77d6ad3e2_Halloween.gif" alt="https://media1.popsugar-assets.com/files/2013/09/26/913/n/1922283/05d5cdd77d6ad3e2_Halloween.gif" class="transparent">',
    image: `url(assets/twopumpkins.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

// Check-Check: change text
quote.innerHTML = "What Spooky Halloween Movie should you watch?";
// Check-Check: change emoji text
emoji.innerHTML = `<img src="https://i.giphy.com/media/xT9IgzmIOFMa6vOQW4/giphy.webp" alt="https://i.giphy.com/media/xT9IgzmIOFMa6vOQW4/giphy.webp" class="transparent">`;
// Check-Check: background image
bgImage.style.backgroundImage = "url(assets/manypumpkins.jpg)";

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  if (event.keyCode === 39) {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  if (event.keyCode === 37) {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  if (event.keyCode === 32) {
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  }
});
