let mMass = 78;
let mHeight = 1.69;
let jMass = 92;
let jHeight = 1.95;
let mBMI = mMass/(mHeight*mHeight);
let jBMI = jMass/(jHeight*jHeight);
let markHigherBMI = mBMI>jBMI;
if(markHigherBMI){
    console.log(`Mark's BMI(${mBMI}) is higher than John's(${jBMI})!`);
}else{
    console.log(`John's BMI(${jBMI}) is higher than Mark's(${mBMI})!`);
}