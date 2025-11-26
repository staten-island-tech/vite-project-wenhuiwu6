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
    image: "OnePiece.jpg",
    alt: "",
  },
  {
    name: "Naruto",
    image: "Naruto.jpg",
    alt: "",
  },
  {
    name: "Bleach",
    image: "Bleach.png",
    alt: "",
  },
  {
    name: "Attack on Titan",
    image: "AttackOnTitan.png",
    alt: "",
  },
  {
    name: "Jujutsu Kaisen",
    image: "JujutsuKaisen.jpg",
    alt: "",
  },
  {
    name: "Bungo Stray Dogs",
    image: "BungoStrayDogs.webp",
    alt: "",
  },
  {
    name: "Chainsaw Man",
    image: "ChainsawMan.jpg",
    alt: "",
  },
  {
    name: "Tokyo Ghoul",
    image: "TokyoGhoul.jpg",
    alt: "",
  },
  {
    name: "Spy x Family",
    image: "SpyXFamily.jpg",
    alt: "",
  },
  {
    name: "Demon Slayer: Kimetsu no Yaiba",
    image: "DemonSlayer.jpg",
    alt: "",
  },
  {
    name: "Case Closed",
    image: "CaseClosed.webp",
    alt: "",
  },
  {
    name: "Death Note",
    image: "DeathNote.jpg",
    alt: "",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = ` <div class="card" data-name="${item.name}" data-img="${item.image}" data-alt="${item.alt}" data-price="${item.price}" >
      <img class = "card-img" src="${item.image}">
      <h2 class = "card-name"> ${item.name}</h2>
      <p class = "card-alt"> ${item.alt}</p>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

mangas.forEach((item) => inject(item));
