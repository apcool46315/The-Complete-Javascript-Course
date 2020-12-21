"use strict";
const temperatues = [17, 21, 23];
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < temperatues.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log(str);
};
printForecast(temperatues);
