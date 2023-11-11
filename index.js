//prompt the user for froyo flavors
let flavor = prompt('Please enter comma separated froyo flavors:', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

//Split the string flavors into arrays
const flavorsArr = flavor.split(',');
console.log('flavorsArr:',flavorsArr);


console.log(`Your order is : ', ${countFlavors(flavorsArr)}`);

/**
 * 
 * @param {[]}flavors an array of flavors
 * @returns {flavorObj} an object contatining flavors and frequency of flavors
 */
function countFlavors(flavors) {
  const flavorObj = {};
  flavors.forEach(flavor => {
    console.log('flavor inside foreach',flavor)
    if(flavorObj.hasOwnProperty(flavor)){
      flavorObj[flavor] += 1;
    } else {
      flavorObj[flavor] = 1;
    }
  });
  return flavorObj;
}




