//prompt the user for froyo flavors
let flavor = prompt('Please enter comma separated froyo flavors:', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

//Split the string flavors into arrays
const flavorsArr = flavor.split(',');
console.log('flavorsArr:',flavorsArr);

const flavorObj = countFlavors(flavorsArr);


console.log(
  `You have ordered ${flavorObj['vanilla']} vanilla, ${flavorObj.coffee} coffee, ${flavorObj.strawberry} strawberry.`);

/**
 * 
 * @param {[]}flavors an array of flavors
 * @returns {flavorCount} an object contatining flavors and frequency of flavors
 */
 function countFlavors(flavors) {
    const flavorCount = {};
    flavors.forEach(flavor => {
    if(flavorCount.hasOwnProperty(flavor)){
      flavorCount[flavor] += 1;
    } else {
      flavorCount[flavor] = 1;
    }
  });
  return flavorCount;
}




