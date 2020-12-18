"use strict";
const calcAvg = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAvg(85, 54, 41);
const avgKoalas = calcAvg(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
}
checkWinner(avgDolphins, avgKoalas);
