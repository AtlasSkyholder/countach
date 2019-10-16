// turn a into 4
// turn e into 3
// turn o into 0
// turn l into 1

let password = process.argv[2];

const obfuscate = function(word) {
  let newPass = word;
  for (let i = 0; i < newPass.length; i++) {
    if (newPass.charAt(i) === "a") {
      newPass = newPass.replace("a", "4");
    } else if (newPass.charAt(i) === "e") {
      newPass = newPass.replace("e", "3");
    } else if (newPass.charAt(i) === "o") {
      newPass = newPass.replace("o", "0");
    } else if (newPass.charAt(i) === "l") {
      newPass = newPass.replace("l", "1");
    }
  }
  return newPass;
};

console.log(obfuscate(password));