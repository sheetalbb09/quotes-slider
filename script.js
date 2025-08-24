const quotes = [
  {
    photo: "https://images.gr-assets.com/authors/1673611182p8/3565.jpg",
    quote: "Be yourself; everyone else is already taken.",
    name: "Oscar Wilde ",
  },
  {
    photo: "https://images.gr-assets.com/quotes/1511992603p8/8630.jpg",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    name: " Marilyn Monroe ",
  },
  {
    photo: "https://images.gr-assets.com/authors/1696236573p8/22302.jpg",
    quote: "So many books, so little time.",
    name: "Frank Zappa",
  },
  {
    photo: "https://images.gr-assets.com/authors/1429114964p8/9810.jpg",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name: "Albert Einstein ",
  },
  {
    photo: "https://images.gr-assets.com/authors/1197881416p8/13755.jpg",
    quote: "A room without books is like a body without a soul.",
    name: "Marcus Tullius Cicero ",
  },
];

const imageEl = document.querySelector("img");
const quoteEl = document.querySelector(".text");
const UsernameEl = document.querySelector(".username");

let index = 0;

updateQuoteSlider();

function updateQuoteSlider() {
  const { photo, quote, name } = quotes[index];

  imageEl.src = photo;
  quoteEl.innerText = quote;
  UsernameEl.innerText = name;

  index++;

  if (index === quotes.length) {
    index = 0;
  }

  setTimeout(() => {
    updateQuoteSlider();
  }, 3000);
}
