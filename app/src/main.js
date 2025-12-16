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
    year: 1997,
    image: "/images/OnePiece.jpg",
    alt: "Adventures of Monkey D. Luffy, a young man with rubber-like abilities gained from eating a Devil Fruit, who sets out to find the legendary treasure",
  },
  {
    name: "Naruto",
    year: 1999,
    image: "/images/Naruto.jpg",
    alt: "The story of a young ninja, Naruto Uzumaki, who was ostracized as a child because a powerful demon fox was sealed inside him",
  },
  {
    name: "Bleach",
    year: 2001,
    image: "/images/Bleach.png",
    alt: "About a high school student, Ichigo Kurosaki, who gains the powers of a Soul Reaper (a death personification) after meeting Rukia Kuchiki",
  },
  {
    name: "Attack on Titan",
    year: 2009,
    image: "/images/AttackOnTitan.jpg",
    alt: "Where humanity lives in a walled city to protect themselves from giant, man-eating humanoids called Titans",
  },
  {
    name: "Jujutsu Kaisen",
    year: 2017,
    image: "/images/JujutsuKaisen.jpg",
    alt: "About a high school student named Yuji Itadori who becomes the host for a powerful demon named Ryomen Sukuna",
  },
  {
    name: "Bungo Stray Dogs",
    year: 2012,
    image: "/images/BungoStrayDogs.webp",
    alt: "About a group of detectives with supernatural abilities who solve cases too dangerous for the police, often clashing with the criminal Port Mafia",
  },
  {
    name: "Chainsaw Man",
    year: 2018,
    image: "/images/ChainsawMan.jpg",
    alt: "Denji, an impoverished teenager who makes a contract that fuses his body with that of Pochita, the dog-like Chainsaw Devil, granting him the ability to transform parts of his body into chainsaws",
  },
  {
    name: "Tokyo Ghoul",
    year: 2011,
    image: "/images/TokyoGhoul.jpg",
    alt: "Ken Kaneki, a college student who survives a ghoul attack only to become a half-ghoul himself after receiving ghoul organs in a transplant",
  },
  {
    name: "Spy x Family",
    year: 2019,
    image: "/images/SpyXFamily.jpg",
    alt: "A spy comedy about a master spy who creates a fake family to complete a mission, unaware that his wife is an assassin and his adopted daughter is a telepath",
  },
  {
    name: "Demon Slayer: Kimetsu no Yaiba",
    year: 2016,
    image: "/images/DemonSlayer.jpg",
    alt: "Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by a demon, leaving his younger sister, Nezuko, as the sole survivor, but also turned into a demon herself",
  },
  {
    name: "Case Closed",
    year: 1994,
    image: "/images/CaseClosed.webp",
    alt: "About a teenage detective named Shinichi Kudo who is transformed into a child after being poisoned",
  },
  {
    name: "Death Note",
    year: 2006,
    image: "/images/DeathNote.jpg",
    alt: "Genius high school student, Light Yagami, who finds a supernatural notebook that allows him to kill anyone by writing their name in it",
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  const html = `
    <div class="card" 
         data-name="${item.name}" 
         data-img="${item.image}" 
         data-alt="${item.alt}" 
         data-year="${item.year}">
      <img class="card-img" src="${item.image}">
      <h2 class="card-name">${item.name}</h2>
      <p class="card-alt">${item.alt}</p>
      <p class="card-year">Year: ${item.year}</p>
      <button class="toRead">Read</button>
    </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}

mangas.forEach((item) => inject(item));

function filter(type) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  mangas.forEach((manga) => {
    const year = manga.year;

    if (type === "all") inject(manga);

    if (type === "older" && year >= 1990 && year < 2000) {
      inject(manga);
    }

    if (type === "mid" && year >= 2000 && year <= 2010) {
      inject(manga);
    }

    if (type === "younger" && year > 2010 && year <= 2020) {
      inject(manga);
    }
  });
}

function showFilter() {
  const buttons = document.querySelectorAll(".filter button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterType = btn.getAttribute("data-filter");
      filter(filterType);
    });
  });
}

showFilter();

document.addEventListener("click", (e) => {
  if (e.target.className === "toRead") {
    const card = e.target.closest(".card");
    const showRead = document.querySelector(".showRead");

    const name = card.getAttribute("data-name");
    const img = card.getAttribute("data-img");
    const alt = card.getAttribute("data-alt");
    const year = card.getAttribute("data-year");

    const html = `
      <div class="card" data-name="${name}" data-img="${img}" data-alt="${alt}" data-year="${year}">
        <img class="card-img" src="${img}">
        <h2 class="card-name">${name}</h2>
        <p class="card-alt">${alt}</p>
        <p class="card-year">Year: ${year}</p>
      </div>
    `;

    showRead.insertAdjacentHTML("afterbegin", html);
  }
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
});

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const value = document.getElementById("title").value.toLowerCase();
  const container = document.querySelector(".container");

  container.innerHTML = "";

  let found = false;

  mangas.forEach((item) => {
    if (item.name.toLowerCase().includes(value)) {
      inject(item);
      found = true;
    }
  });

  if (!found) {
    container.innerHTML = "<p>No manga found.</p>";
  }
});
