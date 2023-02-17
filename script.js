const boxCont1 = document.getElementById("boxCont1");
const boxCont2 = document.getElementById("boxCont2");
const boxCont3 = document.getElementById("boxCont3");
const showInfo = document.getElementById("showInfo");
const winnerGifCont = document.getElementById("winnerGifCont");
let boxDict = {};
let boxCount = 9;
let turn = "x";

function getBoxes(dict, count) {
  for (let i = 1; i <= count; i++) {
    dict[`box${i}`] = [document.getElementById(`box${i}`), false];
  }
}
getBoxes(boxDict, boxCount);

function setClickListener(dict, count) {
  for (let i = 1; i <= count; i++) {
    dict[`box${i}`][0].addEventListener("click", () => {
      if (turn === "x" && dict[`box${i}`][1] === false) {
        dict[`box${i}`][0].innerHTML = `x`;
        turn = "o";
        setInfoText("Turn: o");
      } else if (turn === "o" && dict[`box${i}`][1] === false) {
        dict[`box${i}`][0].innerHTML = `o`;
        turn = "x";
        setInfoText("Turn: x");
      }
      dict[`box${i}`][1] = true;
      checkWin(dict);
    });
  }
}
setClickListener(boxDict, boxCount);

function checkWin(dict) {
  // x-win check
  if (
    (dict[`box${1}`][0].innerHTML === "x" &&
      dict[`box${2}`][0].innerHTML === "x" &&
      dict[`box${3}`][0].innerHTML === "x") ||
    (dict[`box${4}`][0].innerHTML === "x" &&
      dict[`box${5}`][0].innerHTML === "x" &&
      dict[`box${6}`][0].innerHTML === "x") ||
    (dict[`box${7}`][0].innerHTML === "x" &&
      dict[`box${8}`][0].innerHTML === "x" &&
      dict[`box${9}`][0].innerHTML === "x") ||
    (dict[`box${1}`][0].innerHTML === "x" &&
      dict[`box${4}`][0].innerHTML === "x" &&
      dict[`box${7}`][0].innerHTML === "x") ||
    (dict[`box${2}`][0].innerHTML === "x" &&
      dict[`box${5}`][0].innerHTML === "x" &&
      dict[`box${8}`][0].innerHTML === "x") ||
    (dict[`box${3}`][0].innerHTML === "x" &&
      dict[`box${6}`][0].innerHTML === "x" &&
      dict[`box${9}`][0].innerHTML === "x") ||
    (dict[`box${1}`][0].innerHTML === "x" &&
      dict[`box${5}`][0].innerHTML === "x" &&
      dict[`box${9}`][0].innerHTML === "x") ||
    (dict[`box${3}`][0].innerHTML === "x" &&
      dict[`box${5}`][0].innerHTML === "x" &&
      dict[`box${7}`][0].innerHTML === "x")
  ) {
    setInfoText("x won | click on image to play again");
    winnerGifCont.style.display = `block`;
    hideBoxes();
  }
  // o-win check
  else if (
    (dict[`box${1}`][0].innerHTML === "o" &&
      dict[`box${2}`][0].innerHTML === "o" &&
      dict[`box${3}`][0].innerHTML === "o") ||
    (dict[`box${4}`][0].innerHTML === "o" &&
      dict[`box${5}`][0].innerHTML === "o" &&
      dict[`box${6}`][0].innerHTML === "o") ||
    (dict[`box${7}`][0].innerHTML === "o" &&
      dict[`box${8}`][0].innerHTML === "o" &&
      dict[`box${9}`][0].innerHTML === "o") ||
    (dict[`box${1}`][0].innerHTML === "o" &&
      dict[`box${4}`][0].innerHTML === "o" &&
      dict[`box${7}`][0].innerHTML === "o") ||
    (dict[`box${2}`][0].innerHTML === "o" &&
      dict[`box${5}`][0].innerHTML === "o" &&
      dict[`box${8}`][0].innerHTML === "o") ||
    (dict[`box${3}`][0].innerHTML === "o" &&
      dict[`box${6}`][0].innerHTML === "o" &&
      dict[`box${9}`][0].innerHTML === "o") ||
    (dict[`box${1}`][0].innerHTML === "o" &&
      dict[`box${5}`][0].innerHTML === "o" &&
      dict[`box${9}`][0].innerHTML === "o") ||
    (dict[`box${3}`][0].innerHTML === "o" &&
      dict[`box${5}`][0].innerHTML === "o" &&
      dict[`box${7}`][0].innerHTML === "o")
  ) {
    setInfoText("o won | click on image to play again");
    winnerGifCont.style.display = `block`;
    hideBoxes();
  }
}

function setInfoText(text) {
  showInfo.innerHTML = `${text}`;
}

function hideBoxes() {
  boxCont1.style.visibility = `hidden`;
  boxCont2.style.visibility = `hidden`;
  boxCont3.style.visibility = `hidden`;
}

winnerGifCont.addEventListener('click', () => {
    location.reload();
})