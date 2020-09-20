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
// Combination
const combined=ages
.map(age=>age*2)
.filter(age=>age>=40)
.sort((a,b)=>a-b)
.reduce((a,b)=>a+b, 0); // Abomination to combine all methods 
console.log(combined);
// Returns ages*2, then takes those over 40 and combines. Also sorts because why not.
//////////////////////////////////////////////