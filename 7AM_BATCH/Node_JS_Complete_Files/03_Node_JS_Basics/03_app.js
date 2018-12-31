// Normal Function
let greetMe = function(name) {
  console.log(`Good Morning ${name}`);
};
greetMe('John');

// Arrow Function
let greetMeToo = (name) => {
    console.log(`Good Morning ${name}`);
};
greetMeToo('Williams');

// WishMe Function
let wishMe = (time,name) => {
    let message = '';
    if(time <= 12){
        message = `Good Morning ${name}`;
    }
    else if(time >12 && time <= 17){
        message = `Good Afternoon ${name}`;
    }
    else if(time >17 && time <= 23){
        message = `Good Evening ${name}`;
    }
    else{
        message = `Enter Proper Time ${name}`;
    }
    return message;
};
let greetMsg = wishMe(12,'John');
console.log(greetMsg);

// Print Time
let currentTime = () => {
    let time = new Date().toLocaleTimeString();
    console.log(time);
};
setInterval(currentTime,1000);