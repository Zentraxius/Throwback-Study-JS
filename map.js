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
// map
const companyNames = companies.map(function(company) {
return company.name;
}); // Returns new array with only the company names
console.log(companyNames)
//

///
const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
}) // Returns company name and its start - end dates
console.log(testMap)
///

//// Shortened version using arrow functions
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap)
////

/////
const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age=>age*2); // Doubles the age

const ageSquareDouble = ages
.map(age => Math.sqrt(age))
.map(age => age*2);

console.log(agesSquare); // gets square root of ages
console.log(agesTimesTwo); // gets ages * 2
console.log(ageSquareDouble); // gets ages squared then doubled
/////
//////////////////////////////////////////////
