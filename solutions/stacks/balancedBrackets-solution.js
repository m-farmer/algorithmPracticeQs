/*

Write a function that determines whether an input string has balanced brackets.

You are given an input string consisting of brackets—square [ ], round ( ), and curly { }. The input string can include other text. Write a function that returns either true if the brackets in the input string are balanced or false if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

An empty input string or a string without brackets can also be considered "balanced".

Examples
hasBalancedBrackets('[][(){}'); // false
hasBalancedBrackets('({)}'); // false
hasBalancedBrackets('({[]})'); // true
hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true

*/

// other solutions: https://gist.github.com/csweeny/9c07c29f1146ac0d66fdb24145049f2a

const open = {
  "(" : ")",
  "{" : "}",
  "[" : "]"
}

const closed = {
  ")" : "(",
  "}" : "{",
  "]" : "["
}

// the 'clever' way to initialize these hash tables:

// const opens = {};
// const closed = {};

// ([
//   ['{', '}'],
//   ['[', ']'],
//   ['(', ')']
// ]).forEach(([open, close]) => {
//   opens[open] = close;
//   closed[close] = open;
// });


function balancedBrackets (string) {
  const opensStack = [];

  for (const char of string) {
    // reminder: hasOwnProperty is finding the key-value pair based on the key

    // if one of the opening brackets from open{} appears in the string
    if (open.hasOwnProperty(char)) {
      // push that opening bracket onto the stack
      opensStack.push(char);
    }
    // otherwise if one of the closing brackets from closed{} appears in the string
    else if (closed.hasOwnProperty(char)) {

      // the most recent open bracket is popped off the stack
      // once you get to a closing bracket, the most recent open bracket should match
      const mostRecentOpen = opensStack.pop();

      // open{} is used as a lookup table to find the corresponding closing bracket to mostRecentOpen
       // if the current closing bracket !== the corresponding closing bracket to mostRecentOpen, return false
      if (char !== open[mostRecentOpen]) return false;
    }
  }

  // if all the brackets were evenly matched the stack should be empty
  return opensStack.length === 0;
}

console.log(balancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'))
console.log(balancedBrackets("(){}[]"))
console.log(balancedBrackets("((]()[))"))
