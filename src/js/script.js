const games = [
  {
    img: "saint_row.png",
    categoryDesign: "actionRPG",
    categoryText: "Action RPG",
    title: "Saints Row",
    stars: ["empty.svg", "empty.svg", "empty.svg", "empty.svg", "empty.svg"],
    countReviews: 0,
    description: "Platinum Edition",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "-50%",
  },
  {
    img: "paladins.png",
    categoryDesign: "multiplayerRPG",
    categoryText: "Multiplayer RPG",
    title: "Paladins",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "empty.svg"],
    countReviews: "1,820",
    description: "Get the Captain Price Operator included with purchase",
    priceOld: "",
    priceCur: "Free",
    discount: "",
  },
  {
    img: "fc6.png",
    categoryDesign: "action",
    categoryText: "Action",
    title: "Far Cry 6",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "empty.svg"],
    countReviews: "2,888",
    description: "In-Game Content",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "-50%",
  },
  {
    img: "call_of_duty.png",
    categoryDesign: "shooter",
    categoryText: "Shooter",
    title: "Call of Duty: Warzone",
    stars: ["full.svg", "full.svg", "full.svg", "empty.svg", "empty.svg"],
    countReviews: "18,982",
    description: "Get the Captain Price Operator included with purchase",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "-50%",
  },
  {
    img: "warcraft.png",
    categoryDesign: "action",
    categoryText: "Action",
    title: "World of Warcraft: Shadowlands",
    stars: ["full.svg", "full.svg", "full.svg", "half.svg", "empty.svg"],
    countReviews: "299",
    description:
      "Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!",
    priceOld: "",
    priceCur: "Free",
    discount: "",
  },
  {
    img: "fortnite.png",
    categoryDesign: "shooter",
    categoryText: "Shooter",
    title: "Fortnite",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "half.svg"],
    countReviews: "9,199",
    description: "Get the Captain Price Operator included with purchase",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "-50%",
  },
  {
    img: "horizon.png",
    categoryDesign: "actionRPG",
    categoryText: "Action RPG",
    title: "Horizon: Forbidden West",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "half.svg"],
    countReviews: "9,199",
    description: "Platinum Edition",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "",
  },
  {
    img: "nfs.png",
    categoryDesign: "action",
    categoryText: "Action",
    title: "Need for Speed: Heat",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "half.svg"],
    countReviews: "2,911",
    description:
      "Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!",
    priceOld: "",
    priceCur: "$649",
    discount: "",
  },
  {
    img: "sp_mm.png",
    categoryDesign: "action",
    categoryText: "Action",
    title: "Spider-Man: Miles Morales",
    stars: ["full.svg", "full.svg", "full.svg", "empty.svg", "empty.svg"],
    countReviews: "920",
    description: "Get the Captain Price Operator included with purchase",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "-50%",
  },
  {
    img: "witcher3.png",
    categoryDesign: "cardGame",
    categoryText: "Card Game",
    title: "Witcher 3: Wild Hunt",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "full.svg"],
    countReviews: "299,890",
    description:
      "Will only be usable in the new Classic Format when it is released",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "",
  },
  {
    img: "gg.png",
    categoryDesign: "shooter",
    categoryText: "Shooter",
    title: "Guardians of the Galaxy",
    stars: ["full.svg", "full.svg", "full.svg", "empty.svg", "empty.svg"],
    countReviews: "29",
    description: "In-Game Content",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "-50%",
  },
  {
    img: "ctr.png",
    categoryDesign: "shooter",
    categoryText: "Shooter",
    title: "Crash Team Racing",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "half.svg"],
    countReviews: "9,199",
    description: "Get the Captain Price Operator included with purchase",
    priceOld: "$1,299",
    priceCur: "$649",
    discount: "-50%",
  },
  {
    img: "sp.png",
    categoryDesign: "multiplayerRPG",
    categoryText: "Multiplayer RPG",
    title: "Spider-Man",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "half.svg"],
    countReviews: "9,199",
    description:
      "Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!",
    priceOld: "",
    priceCur: "$649",
    discount: "",
  },
  {
    img: "blank.png",
    categoryDesign: "actionRPG",
    categoryText: "Action RPG",
    title: "Dragon Age 5",
    stars: ["empty.svg", "empty.svg", "empty.svg", "empty.svg", "empty.svg"],
    countReviews: "0",
    description: "Non released",
    priceOld: "",
    priceCur: "",
    discount: "",
  },
];
const addCards = (elem) => {
  let card = document.createElement("div");
  card.classList.add("main__game");
  card.classList.add("main__game-info");
  let stars = (card.innerHTML = `
<div>
    <div class="main__game-img">
        <img src="./img/games/${elem.img}" alt="game_bg">
        <div class="close">
            <img src="./icons/main/close.svg" alt="">
        </div>
    </div>
    <div class="main__game-about">
        <div>
            <div class="game ${elem.categoryDesign}">
                <span>${elem.categoryText}</span>
            </div>
            <div class="main__game-about__title">
                ${elem.title}
            </div>
            <div class="evaluation">
                <div class="evaluation__stars">
                    ${addStars(elem.stars)}
                </div>
                <span class="evaluation__count">${elem.countReviews}</span>
            </div>
            <div class="main__game-about__description">
                ${elem.description}
            </div>
        </div>                            
    </div>  
</div>
<div class="price">
    <div class="divider"></div>
    <div class="price__conteiner">
        <div class="price__views">
            <div class="price__views_old"  style='display:${
              elem.priceOld === "" ? "none" : "block"
            }'>${elem.priceOld}</div>
            <div class="price__views_act" style='display:${
              elem.priceCur === "" ? "none" : "block"
            }'>${elem.priceCur}</div>
        </div>
        <div class="price__discount"  style='display:${
          elem.discount === "" ? "none" : "block"
        }'>${elem.discount}</div>
    </div>
</div>
`);
  return card;
};

const addStars = (arr) => {
  let stars = "";
  arr.forEach((star) => {
    stars += `<img src="./icons/main/stars/${star}" alt="" />`;
  });
  return stars;
};

games.forEach((elem) => {
  document.querySelector("#main__games").appendChild(addCards(elem));
});

const addNewCard = document.querySelector("#addCard");
addNewCard.addEventListener("click", () => {
  const newElem = addCards({
    img: "blank.png",
    categoryDesign: "actionRPG",
    categoryText: "Action RPG",
    title: "GTA 5 ",
    stars: ["full.svg", "full.svg", "full.svg", "full.svg", "half.svg"],
    countReviews: "10,000",
    description: "Lorem",
    priceOld: "$2000",
    priceCur: "$1000",
    discount: "-50%",
  });
  const addCardBlock = document.querySelectorAll(".main__game-info");
  document.querySelector("#main__games").insertBefore(newElem, addCardBlock[0]);
});

const toogleFilters = document.querySelector("#toogleFilters");
toogleFilters.addEventListener("click", () => {
  document.querySelector("#filters").classList.toggle("active");
});
