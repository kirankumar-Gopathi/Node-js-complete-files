// JavaScript Arrays
let technologies  = ['HTML','CSS','JavaScript','Jquery','Bootstrap'];

console.log(technologies);

// Sort an Array
console.log(technologies.sort());

// reverse the Array
console.log(technologies.reverse());

// Using Normal for-loop through the array
let output = '';
for(let i=0; i<technologies.length; i++){
    let element = technologies[i];
    output += element + ' ';
}
console.log(output);

// Using for-in Loop
output = '';
for(let index in technologies){
    let element = technologies[index];
    output += element + ' ';
}
console.log(output);

// using forEach Loop of ES5 version
output = '';
technologies.forEach(function(element) {
    output += element + ' ';
});
console.log(output);

// Using forEach loop of ES6 version
output = '';
technologies.forEach(element => {
    output += element + ' ';
});
console.log(output);

// for-of Loop from ES6 version
output = '';
for(let element of technologies){
    output += element + ' ';
}
console.log(output);

// filter of an Array
let filteredArray = technologies.filter((element) => element.length > 4);
console.log(filteredArray);

// filter
filteredArray = technologies.filter(element => { return element.endsWith('p')});

