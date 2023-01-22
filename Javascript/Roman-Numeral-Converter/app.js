function convertToRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    let result = "";
    for (let romanNumeral in romanNumerals) {
        while (num >= romanNumerals[romanNumeral]) {
            result += romanNumeral;
            num -= romanNumerals[romanNumeral];
        }
    }
    return result;
}

/* MANIÉRE OPTIMISÉE */
function toRoman(num) {
    let roman = '';
    let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= values[i]) {
            roman += romanNumerals[i];
            num -= values[i];
        }
    }
    return roman;
}


