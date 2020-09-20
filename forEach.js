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
// forEach
//// Base For Loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
////
// Improved result using forEach
companies.forEach(function (company) {
  // Exact same result as the above for loop
  console.log(company); // can also modify to company.name to only get the names of companies in your return
});
//
//////////////////////////////////////////////