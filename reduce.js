const companies = [
  { name: "C1", category: "Finance", start: 1981, end: 2003 },
  { name: "C2", category: "Technology", start: 1981, end: 2003 },
  { name: "C3", category: "Finance", start: 1981, end: 2003 },
  { name: "C4", category: "Retail", start: 1981, end: 2003 },
  { name: "C5", category: "Technology", start: 1981, end: 2003 },
  { name: "C6", category: "Retail", start: 1981, end: 2003 },
];
const ages = [33, 12, 11, 22, 16, 41, 78, 79, 28, 21, 39, 29];

//////////////////////////////////////////////
// reduce
let ageSum = 0;
for(let i=0;i<ages.length;i++) {
  ageSum += ages[i]; // returns total of ages
}
console.log(ageSum)
// Default forloop above

///Reduce Magic 
const ageSum = ages.reduce(function(total, age) { // same result as above but with reduce
  return total+age;
}, 0); // the 0 is included here to indicate where the number begins.
console.log(ageSum)
///

////
const ageSum = ages.reduce((total, age) => total+age,0);
console.log(ageSum); // Same result as above but with arrow notation
////

///// 
const totalYearsForCompanies = companies.reduce(function(total, company){
return total + (company.end - company.start) // Returns total of each companies lifespan, so company 1, End-Start, + company 2 end-start, etc.
}, 0);
console.log(totalYears);
/////

////// same as above but with arrow notation
const totalYears=companies.reduce((total,company)=>total+(company.end-company.start),0);
console.log(totalYears);
//////
//////////////////////////////////////////////