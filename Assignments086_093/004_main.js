let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];


// let tempVar = one.setAttribute(one.attributes[1].name, two.attributes[1].value);
oneValue = two.attributes[1].value;
twoValue = one.attributes[1].value;
two.setAttribute(two.attributes[1].name, twoValue);
one.setAttribute(one.attributes[1].name, oneValue);

console.log(one);
console.log(two);

