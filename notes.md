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

- `declaration` functions, function `expressions` and `arrow` functions.
- function declarations gets a name while function expressions has no name actually.
- function declaration can be called befor usage while function expressions must be called before usage.
- arrow function are even simpler than function expressions but they dont get the keyword `this`.

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

### arrays & objects:

1. arrays are almost exactly as lists in python.
2. use `.push` to add element at the end of the array.
3. use `.unshift` to add elmeent at the begining of the array
4. use `.pop` to remove the last element of the array and return it.
5. use `.shift` to remove the first element in the array.
6. use `.undexOf` to return the index of an element.
7. use `.includes` to check if element is included in an array.
8. It's bettr to give arrays a plural name.
9. An object is almost exactly as the dict in python.
10. In arrays the order matters alot of the element, however in objects it doesn't matter (same as dicts in python)
11. `.length` is a property that is available on all arrays.
12. Arrays are also objects.

### HTML & CSS:

1. You can use certain attributes with certin tags.
2. Attributes are mainly standard but you can use your own by adding `data-yourCustomAttribute`.
3. Tags are mainly constrained when it comse to naming.
4. Tags could be divided to `block` elements and `inline` elements.
   | Feature | Block Elements | Inline Elements |
   |----------------------------------|----------------|-----------------|
   | Starts on a new line? | ✅ Yes | ❌ No |
   | Takes full width by default? | ✅ Yes | ❌ No |
   | Can contain block elements? | ✅ Yes | ❌ No |
   | Common use cases | Layout structure | Styling text, links |
5. Clsses and IDs are mainly used in identyfying elements.
6. IDs must be uniuqe while classes don't.
7. There are multiple ways to create boxes in HTML, `div` is a generic one of them, `form` has is semantic and has more meaning.
8. Some tags does not have closing tag, like `img`, `button` ..etc.
9. In CSS not when you inherit fonts, not all elements inherit them because some like `h1` has their own predefined fonts unless you change them.
10. The box model is one of the most fundamental parts in CSS, That's because it's the main factor that affects how elements are displayed on a webpage and also how they are sized..
    ![Alt text](static/images/css_box_model.png)
11. The `*` selector selects all the elements.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

12. There are many units likc `px`, `%`, `m` ...etc.
13. all css properties that are named like `background-color` in css are accessed by javascript within DOM by camel case like `backgroundColor`.

14. Any property value accessed through JS should be written within `'string'` notations.

### general:

1. Variable Types can change for example start as int and then be string.
2. typeof is an operator same as `+` and `-`.
3. the console has access in real time to all the varibales int running script in vs code.
4. for documentation use `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence`.
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

12. - `&&` -> and
    - `||` -> or
    - `===` -> strict equal
    - `==` -> loose equal
    - `!=` -> not equal to
    - `!` -> not!
    - `?` -> conditional operator (ternary operator) `expression ? value if true ' value if false`

13. 'use strict' -> strict mode that allows to reduce and forbid some potential errors and also shows the developer any error.

14. `parameters` are the place holder, the name of the variables that should be passed that is written in the function signature.
15. `arguments` are the actual values that were passed during the function call.
16. there is `console.warn()`, `console.error()` and `console.table()`
17. you can use the debugger either by breakpoints in sources tab inside the browser or by using the `debugger` keyword insid our code.
18. there are multiple ways to listen to an even on browser `addEventListener` is the most famous. it takes 2 arguments, First the type of the event like 'click'..etc. and second the reaction to the event.
