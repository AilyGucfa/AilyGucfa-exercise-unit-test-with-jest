
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = valueInEuro =>{
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}
const fromDollarToYen = valueInDollar => {

    valueInYen  = valueInDollar * oneEuroIs["JPY"];
    return valueInYen;
}
const fromYenToPound = valueInYen => {
    valueInPound = valueInYen * oneEuroIs["GBP"];
    return valueInPound;
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack
module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound};