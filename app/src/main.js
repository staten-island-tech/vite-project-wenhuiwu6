import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

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
    image: "/images/OnePiece.jpg",
    alt: "Adventures of Monkey D. Luffy, a young man with rubber-like abilities gained from eating a Devil Fruit, who sets out to find the legendary treasure",
  },
  {
    name: "Naruto",
    image: "/images/Naruto.jpg",
    alt: "The story of a young ninja, Naruto Uzumaki, who was ostracized as a child because a powerful demon fox was sealed inside him",
  },
  {
    name: "Bleach",
    image: "/images/Bleach.png",
    alt: "About a high school student, Ichigo Kurosaki, who gains the powers of a Soul Reaper (a death personification) after meeting Rukia Kuchiki",
  },
  {
    name: "Attack on Titan",
    image: "/images/AttackOnTitan.jpg",
    alt: "Where humanity lives in a walled city to protect themselves from giant, man-eating humanoids called Titans",
  },
  {
    name: "Jujutsu Kaisen",
    image: "/images/JujutsuKaisen.jpg",
    alt: "About a high school student named Yuji Itadori who becomes the host for a powerful demon named Ryomen Sukuna",
  },
  {
    name: "Bungo Stray Dogs",
    image: "/images/BungoStrayDogs.webp",
    alt: "About a group of detectives with supernatural abilities who solve cases too dangerous for the police, often clashing with the criminal Port Mafia",
  },
  {
    name: "Chainsaw Man",
    image: "/images/ChainsawMan.jpg",
    alt: "Denji, an impoverished teenager who makes a contract that fuses his body with that of Pochita, the dog-like Chainsaw Devil, granting him the ability to transform parts of his body into chainsaws",
  },
  {
    name: "Tokyo Ghoul",
    image: "/images/TokyoGhoul.jpg",
    alt: "Ken Kaneki, a college student who survives a ghoul attack only to become a half-ghoul himself after receiving ghoul organs in a transplant",
  },
  {
    name: "Spy x Family",
    image: "/images/SpyXFamily.jpg",
    alt: "A spy comedy about a master spy who creates a fake family to complete a mission, unaware that his wife is an assassin and his adopted daughter is a telepath",
  },
  {
    name: "Demon Slayer: Kimetsu no Yaiba",
    image: "/images/DemonSlayer.jpg",
    alt: "Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by a demon, leaving his younger sister, Nezuko, as the sole survivor, but also turned into a demon herself",
  },
  {
    name: "Case Closed",
    image: "/images/CaseClosed.webp",
    alt: "About a teenage detective named Shinichi Kudo who is transformed into a child after being poisoned",
  },
  {
    name: "Death Note",
    image: "/images/DeathNote.jpg",
    alt: "Genius high school student, Light Yagami, who finds a supernatural notebook that allows him to kill anyone by writing their name in it",
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
