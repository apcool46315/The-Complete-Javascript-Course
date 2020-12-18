"use strict";
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.mBMI = this.mass / (this.height * this.height);
    return this.mBMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.jBMI = this.mass / (this.height * this.height);
    return this.jBMI;
  },
};
john.calcBMI();
mark.calcBMI();
if (mark.mBMI > john.jBMI) {
  console.log(
    `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`
  );
} else {
  console.log(
    `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`
  );
}
