// turn a into 4
// turn e into 3
// turn o into 0
// turn l into 1

let word = process.argv[2];

const obfuscate = function(word) {
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === "a") {
      word = word.replace("a", "4");
    } else if (word.charAt(i) === "e") {
      word = word.replace("e", "3");
    } else if (word.charAt(i) === "o") {
      word = word.replace("o", "0");
    } else if (word.charAt(i) === "l") {
      word = word.replace("l", "1");
    }
  }
  return word;
};

console.log(obfuscate(word));