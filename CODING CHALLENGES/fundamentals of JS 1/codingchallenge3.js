const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin > 100) {
  console.log("Dolphin win");
} else if (scoreDolphin < scoreKoalas && scoreKoalas > 100) {
  console.log("Koalas win");
} else if (
  scoreDolphin === scoreKoalas &&
  scoreDolphin >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Game is draw");
} else {
  console.log("No team wins");
}
