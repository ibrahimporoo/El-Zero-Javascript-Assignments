function itsMe() {
	return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function
// Conversion to Arrow Function
let itsMeArr = _ => `Iam An Arrow Function`;
console.log(itsMeArr()); // Iam An Arrow Function

// ------------------------------

function urlCreate(protocol, web, tld) {
	return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Conversion to Arrow Function
let converFunc = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(converFunc("https", "ibrahim", "org")); // https://www.ibrahim.org