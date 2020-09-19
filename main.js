const companies = [
  {name: "C1", category: "Finance", start: 1981, end: 2003},
  {name: "C2", category: "Technology", start: 1981, end: 2003},
  {name: "C3", category: "Finance", start: 1981, end: 2003},
  {name: "C4", category: "Retail", start: 1981, end: 2003},
  {name: "C5", category: "Technology", start: 1981, end: 2003},
  {name: "C6", category: "Retail", start: 1981, end: 2003}]
const ages = [33, 12, 11, 22, 16, 41, 78, 79, 28, 21, 39, 29]

//////////////////////////////////////////////
// forEach
//// Base For Loop
for(let i =0; i<companies.length;i++) {
  console.log(companies[i]);
}
////
// Improved result using forEach
companies.forEach(function(company) { // Exact same result as the above for loop
  console.log(company); // can also modify to company.name to only get the names of companies in your return
})
//
//////////////////////////////////////////////



//////////////////////////////////////////////
// filter
//// Base For Loop
let canDrink =[];
for(let i=0;i<ages.length;i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
} 
console.log(canDrink); // Returns ages from array that are 21 or older
////
// Improved result using filter
const canDrink = ages.filter(function(age) {
  if(age >=21) {
    return true; // Exact same result as the for loop above
  }
})
//
/// Refined into arrow functions using Filter and Arrow Functions, same result as above
const canDrink = ages.filter(age => age>=21); 
console.log(canDrink)
///
///// Filter but using Retail companies instead of ages
const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true; // Will return the objects from the array that match the parameters.
    // company is just the parameter put into the function, .category is the "category: Retail" listed in the object. and 'Retail' is matching the string to the object to determine True/False
  } // Objects in this instance are the Companies, or {Objects} inside the Array "[Array]", [{Object1}, {Object2}]
});

//////////////////////////////////////////////