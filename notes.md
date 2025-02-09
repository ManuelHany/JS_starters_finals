### variable declaration try to use:

1. Camel Case
2. start with lower case
3. don't use keywords like name or new
4. never use special characters
5. if real const let all uppercase
6. be declarative, myFirstJob instead of job1
7. you can use, `let`, `const` and `var` (depracated).

### variable types:

- numbers, strings, booleans, undefined `let children;`, Null.
- BigInt: larger integers than number type can hold.

```javascript
// undefined be like
let year;
console.log(year);
console.log(typeof year);

// output:
//undefined
//undefined
```

```javascript
// null be like
console.log(null);
console.log(typeof null);

//output
//null
//object
```

### Strings

1. you can use `` to just like f strings in python.

```javascript
`this is string concatinated with an integer ${5}`;
```

2. you can either print multiple lines by adding `\n\` in a normal string or simple press return inside a `` string.

### Functions

- function declarations gets a name while function expressions has no name actually.
- function declaration can be called befor usage while function expressions must be called before usage.

```javascript
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
```

### general:

1. Variable Types can change for example start as int and then be string.
2. typeof is an operator same as `+` and `-`.
3. the console has access in real time to all the varibales int running script in vs code.
4. for documentation use `https://developer.mozilla.org/en-US/`.
5. It's preferred to use `const` in declarations.
6.

```javascript
// if else control structure be like
if(){
    //code
} else {
    //another code
}
```

7. `NaN` -> an invalid nubmer.
8. Conversion and Coercion -> Conversion is manually type casting a value Coercion is java scripts work it, `Number` is the dominant in subtraction and `String` is the dominant in addition.
9. 5 falsy values: `0`, `''`, `undefined`, `null`, and `NaN`.
10. - undefined -> is a declared variable e.g. `let x;` but with no assigned value. Will not cause compliation error.
    - not defined -> is neither initialized nor declared variable. and it causes errors. `not defined`.
11. - `===` -> strict euqlity operator does not do coertion.
    - `==` -> loose equality operator does do coertion so `23` is equal to `"23"`

9. - `&&` -> and
   - `||` -> or
   - `===` -> strict equal
   - `==` -> loose equal
   - `!=` -> not equal to
   - `!` -> not!
   - `?` -> conditional operator (ternary operator) `expression ? value if true ' value if false`

10. 'use strict' -> strict mode that allows to reduce and forbid some potential errors and also shows the developer any error.

11. `parameters` are the place holder, the name of the variables that should be passed that is written in the function signature.
12. `arguments` are the actual values that were passed during the function call.
