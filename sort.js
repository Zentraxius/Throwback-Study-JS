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
// sort
const sortedCompanies = companies.sort(function(a, b) {
if(a.start > b.start) {
  return 1;
} else {
  return -1;
}
});
console.log(sortedCompanies) // returns array, arranged from earliest company to latest company, based on start year
//

///
const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies); // same as above but in a smaller chunk of code
///

////
const sortAges = ages.sort((a,b) => a-b); // Returns in ascending order, change to b-a to become descending order
console.log(sortAges)
////
//////////////////////////////////////////////