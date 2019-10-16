/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const joinList = function(list) {
  let str = "";
  for (let i = 0; i < list.length; i++) {
    i === list.length - 1 ? str += list[i] : str += list[i] + ", ";
  }
  return str;
};

const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
