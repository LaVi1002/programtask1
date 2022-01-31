const n = 13;
const m = 4;
const q = Math.round(n/m);
const num1 = q*m
if((n*m) >0) {
num2=m*(q+1)
}
else{
  num2=m*(q-1)
}
if(Math.abs(n-num1) < Math.abs(n-num2)) {
       console.log("The closest number of",`${num1}`, "is")
}
else{
  console.log("The closest number of", `${num2}`, "is")
}