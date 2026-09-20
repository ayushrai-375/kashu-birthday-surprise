/* ================= BASIC ELEMENTS ================= */

const intro = document.getElementById("intro");
const party = document.getElementById("party");
const startBtn = document.getElementById("startBtn");


/* ================= NEW GAME SCREENS ================= */

const gameIntro = document.getElementById("gameIntro");
const balloonGame = document.getElementById("balloonGame");
const loveReward = document.getElementById("loveReward");
const finalUnlock = document.getElementById("finalUnlock");

const gameStartBtn = document.getElementById("gameStartBtn");
const rewardNextBtn = document.getElementById("rewardNextBtn");
const openRealSurpriseBtn = document.getElementById("openRealSurpriseBtn");

const gameBalloons = document.getElementById("gameBalloons");
const popConfetti = document.getElementById("popConfetti");
const gameScore = document.getElementById("gameScore");


/* ================= ORIGINAL ELEMENTS ================= */

const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");

const photoBtn = document.getElementById("photoBtn");
const photoCard = document.getElementById("photoCard");

const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");

const musicBtn = document.getElementById("musicBtn");

let musicOn = true;
let gameScoreValue = 0;


/* =====================================================
   SCREEN CHANGE FUNCTION
===================================================== */

function showScreen(screen) {

  [
    intro,
    gameIntro,
    balloonGame,
    loveReward,
    finalUnlock,
    party
  ].forEach(function (section) {

    section.classList.add("hidden");

  });

  screen.classList.remove("hidden");
}


/* =====================================================
   STEP 1
   OPEN YOUR SURPRISE → GAME INTRO
===================================================== */

startBtn.addEventListener("click", function () {

  showScreen(gameIntro);

});


/* =====================================================
   STEP 2
   CHALO → BALLOON GAME
===================================================== */

gameStartBtn.addEventListener("click", function () {

  gameScoreValue = 0;

  gameScore.textContent = "0";

  showScreen(balloonGame);

  createGameBalloons();

});


/* =====================================================
   CREATE BALLOONS
===================================================== */

function createGameBalloons() {

  gameBalloons.innerHTML = "";

  popConfetti.innerHTML = "";


  const positions = [

    {
      left: "12%",
      top: "25%"
    },

    {
      left: "64%",
      top: "24%"
    },

    {
      left: "39%",
      top: "40%"
    },

    {
      left: "18%",
      top: "59%"
    },

    {
      left: "69%",
      top: "58%"
    },

    {
      left: "43%",
      top: "72%"
    }

  ];


  const colors = [

    "gb-pink",
    "gb-purple",
    "gb-blue",
    "gb-yellow",
    "gb-red",
    "gb-pink"

  ];


  positions.forEach(function (position, index) {

    const balloon = document.createElement("div");


    balloon.className =
      "game-balloon " + colors[index];


    balloon.style.left =
      position.left;


    balloon.style.top =
      position.top;


    balloon.style.animationDelay =
      (index * 0.12) + "s";


    /*
      IMPORTANT:
      Mobile tap + desktop click
    */

    balloon.addEventListener(
      "click",
      function () {

        popGameBalloon(balloon);

      }
    );


    gameBalloons.appendChild(balloon);

  });

}


/* =====================================================
   BALLOON POP
===================================================== */

function popGameBalloon(balloon) {

  // Prevent double tap
  if (balloon.classList.contains("pop")) {
    return;
  }

  balloon.classList.add("pop");


  // Increase score
  gameScoreValue++;

  gameScore.textContent = gameScoreValue;


  // ================= POP TEXT =================

  const popText = document.createElement("div");

  popText.className = "pop-text";

  popText.textContent = "💥 POP!";

  popText.style.left = balloon.style.left;

  popText.style.top = balloon.style.top;

  gameBalloons.appendChild(popText);


  // ================= BURST EFFECT =================

  makePopBurst(balloon);


  // ================= REMOVE BALLOON =================

  setTimeout(function () {

    balloon.remove();

  }, 280);


  // Remove POP text

  setTimeout(function () {

    popText.remove();

  }, 700);


  // ================= AFTER 3 BALLOONS =================

  if (gameScoreValue === 3) {

    setTimeout(function () {

      showScreen(loveReward);

    }, 700);

  }

}


/* =====================================================
   POP CONFETTI / BURST
===================================================== */

function makePopBurst(balloon) {

  const rect =
    balloon.getBoundingClientRect();


  const colors = [

    "#ffd5e8",
    "#fff0a6",
    "#bda7ff",
    "#8ee8ff",
    "#ff9bbd",
    "#ffffff"

  ];


  for (let i = 0; i < 18; i++) {

    const piece =
      document.createElement("span");


    piece.className =
      "pop-piece";


    piece.style.left =
      (
        rect.left +
        rect.width / 2
      ) + "px";


    piece.style.top =
      (
        rect.top +
        rect.height / 2
      ) + "px";


    piece.style.background =
      colors[i % colors.length];


    /*
      Random direction
    */

    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      45 +
      Math.random() * 75;


    piece.style.setProperty(
      "--x",
      Math.cos(angle) * distance + "px"
    );


    piece.style.setProperty(
      "--y",
      Math.sin(angle) * distance + "px"
    );


    popConfetti.appendChild(piece);


    setTimeout(function () {

      piece.remove();

    }, 800);

  }

}


/* =====================================================
   STEP 3
   I LOVE YOU KASHU → NEXT
===================================================== */

rewardNextBtn.addEventListener("click", function () {

  showScreen(finalUnlock);

});


/* =====================================================
   STEP 4
   OPEN MY SURPRISE → ORIGINAL BIRTHDAY PAGE
===================================================== */

openRealSurpriseBtn.addEventListener(
  "click",
  function () {

    showScreen(party);


    /*
      Original balloons
    */

    balloonsAndConfetti();


    /*
      Original song
    */

    startMelody();

  }
);


/* =====================================================
   ORIGINAL PARTY BALLOONS
===================================================== */

function balloonsAndConfetti() {

  balloons.innerHTML = "";


  [
    "b1",
    "b2",
    "b3",
    "b4",
    "b5"
  ].forEach(function (className, index) {

    const balloon =
      document.createElement("div");


    balloon.className =
      "balloon " + className;


    balloon.style.animationDelay =
      (index * 0.35) + "s";


    balloons.appendChild(balloon);

  });


  /*
    Original confetti
  */

  confetti.innerHTML = "";


  const pieces = [

    "#ffd5e8",
    "#fff0a6",
    "#bda7ff",
    "#8ee8ff",
    "#ff9bbd",
    "#ffffff"

  ];


  for (let i = 0; i < 100; i++) {

    const piece =
      document.createElement("span");


    piece.className =
      "confetti-piece";


    piece.style.left =
      Math.random() * 100 + "%";


    piece.style.background =
      pieces[i % pieces.length];


    piece.style.animationDuration =
      (3 + Math.random() * 4) + "s";


    piece.style.animationDelay =
      Math.random() * 2 + "s";


    confetti.appendChild(piece);

  }

}


/* =====================================================
   TUM SE HI
===================================================== */

function startMelody() {

  const song =
    document.getElementById("birthdaySong");


  if (!song) {

    return;

  }


  song.volume = 0.8;

  song.currentTime = 0;


  song.play().catch(function () {

    /*
      Mobile browser may block playback
      until user interaction.
    */

  });

}


/* =====================================================
   LETTER BUTTON
===================================================== */

letterBtn.addEventListener(
  "click",
  function () {

    letter.classList.remove("hidden");


    letterBtn.textContent =
      "My Heart, In A Few Words ❤️";


    letterBtn.disabled = true;

  }
);


/* =====================================================
   PHOTO BUTTON
===================================================== */

photoBtn.addEventListener(
  "click",
  function () {

    photoCard.classList.remove("hidden");


    photoBtn.textContent =
      "Always Us ❤️";


    photoBtn.disabled = true;


    photoCard.scrollIntoView({

      behavior: "smooth",

      block: "center"

    });

  }
);


/* =====================================================
   MUSIC BUTTON
===================================================== */

musicBtn.addEventListener(
  "click",
  function () {

    const song =
      document.getElementById("birthdaySong");


    if (!song) {

      return;

    }


    musicOn = !musicOn;


    musicBtn.textContent =
      musicOn
        ? "🔊 Music On"
        : "🔇 Music Off";


    if (musicOn) {

      song.play().catch(function () { });

    }

    else {

      song.pause();

    }

  }
);
