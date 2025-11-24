import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

const mangas = [
  {
    name: "One Piece",
    image: "https://example.com/one-piece.jpg",
  },
  {
    name: "Naruto",
    image: "https://example.com/naruto.jpg",
  },
  {
    name: "Bleach",
    image: "https://example.com/bleach.jpg",
    alt: "Bleach manga cover",
  },
  {
    name: "Attack on Titan",
    image: "https://example.com/aot.jpg",
    alt: "Attack on Titan manga cover",
  },
  {
    name: "Jujutsu Kaisen",
    image: "https://example.com/jujutsu-kaisen.jpg",
    alt: "Jujutsu Kaisen manga cover",
  },
  {
    name: "My Hero Academia",
    image: "https://example.com/mha.jpg",
    alt: "My Hero Academia manga cover",
  },
  {
    name: "Chainsaw Man",
    image: "https://example.com/chainsaw-man.jpg",
    alt: "Chainsaw Man manga cover",
  },
  {
    name: "Tokyo Ghoul",
    image: "https://example.com/tokyo-ghoul.jpg",
    alt: "Tokyo Ghoul manga cover",
  },
  {
    name: "Fullmetal Alchemist",
    image: "https://example.com/fma.jpg",
    alt: "Fullmetal Alchemist manga cover",
  },
  {
    name: "Demon Slayer: Kimetsu no Yaiba",
    image: "https://example.com/demon-slayer.jpg",
    alt: "Demon Slayer manga cover",
  },
  {
    name: "Berserk",
    image: "https://example.com/berserk.jpg",
    alt: "Berserk manga cover",
  },
  {
    name: "Vagabond",
    image: "https://example.com/vagabond.jpg",
    alt: "Vagabond manga cover",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = ` <div class="card" data-name="${item.name}" data-img="${item.image}" data-alt="${item.alt}" data-price="${item.price}" >
      <img class = "card-img" src="${item.image}">
      <h2 class = "card-name"> ${item.name}</h2>
      <p class = "card-alt"> ${item.alt}</p>
      <p class = "card-price"> price: $${item.price}</p>
      <button class="button"> Add to Cart</button>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

cats.forEach((item) => inject(item));
