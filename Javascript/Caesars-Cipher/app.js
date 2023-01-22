function rot13(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if(charCode < 65 || charCode > 90){
      string += str[i];
    } else if (charCode < 78){
      string += String.fromCharCode(charCode + 13);
    } else {
      string += String.fromCharCode(charCode - 13);
    }
  }
  return string;
}

/* MANIÉRE OPTIMISÉE */
const rot13 = (str) =>  str.replace(/[A-Z]/g, (c) => String.fromCharCode((c.charCodeAt(0) % 26) + 65));