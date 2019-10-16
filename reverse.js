let input = process.argv[2];

if (input.length > 1) {
  console.log(reverse(input));
}

const reverse = function(original) {
  let reverseList = original.split('');
  reverseList.reverse();
  return reverseList.join('');
};