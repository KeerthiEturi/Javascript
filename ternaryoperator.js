//if a customer has more than 100 points ,they are a 'gold' customer,otherwise,they are a 'silver' customer

let points=90;
let type=points>100 ? 'gold': 'silver';
console.log(type);

//LOGICAL OPERATORS AND OR NOT

//To built an app for approving loans.If applicant has highIncome & goodCreditScore
// then they will be eligible for loan

// let highIncome=true;
// let goodCreditScore=true;
// let eligibleForLoan=highIncome && goodCreditScore;
//   console.log(eligibleForLoan);

let highIncome=false;
let goodCreditScore=false;
let eligibleForLoan=highIncome || goodCreditScore;
  console.log(eligibleForLoan);

//SHORT CIRCUTING:
 let userColor='red';   //undefined=blue
 let defaultColor='blue';
 let currentColor=userColor||defaultColor;
 console.log(currentColor);