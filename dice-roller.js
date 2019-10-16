let roll = parseInt(process.argv[2]);

const dice = function(roll) {
  let str = "";
  for (let i = 0; i < roll; i++) {
    let num = Math.floor((Math.random() * 6) + 1);
    i === roll - 1 ? str += num : str += num + ", ";
  }
  return "Rolled " + roll + " dice: " + str;
};

console.log(dice(roll));