let num1 = "9";
let str = 10;
let str2 = "20";

let result = num1 === str ? "{num1} Is The Same Value As {str}" : num1 == str ? "{num1} Is The Same Value As {str} But Not The Same Type" : num1 != str && typeof num1 !== typeof str ? "{num1} Is Not The Same Value Or The Same Type As {str2}" : str !== str2 && typeof str === typeof str2 ? "{str} Is The Same Type As {str2} But Not The Same Value" : "Nothing Else";
console.log(result);
// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"