specicity in css 

Inline Style > ID Selector > Class or Attribute Selector > Element Selector > Universal Selector

if specicity is same then jo last mein hoga wo select hoga 

https://www.codewithharry.com/tutorial/css-specificity/
```

/* This is an example of attribute selector. The specificity of this selector is 10 */
        [data-x=a] {
            color: maroon;
        }
         <div>
        <h1 class="yellow cred cpurple" data-x="a">CSS Specificity</h1>
    </div>

```
In CSS, vm is not a standard unit. You might be thinking of vw and vh, which are viewport-relative units. These units are useful for creating responsive designs that adapt to the size of the viewport. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units



display flex and display grid -https://developer.mozilla.org/en-US/docs/Web/CSS/display



shadow https://www.codewithharry.com/tutorial/css-shadows/


z index -https://developer.mozilla.org/en-US/docs/Web/CSS/z-index



if we allign flex box towads center toh wo main axis k according hota haai 
![image](https://github.com/Ayush-Tibrewal/ayush_maybe_webd/assets/96817905/e48a67a2-4eef-43eb-b03a-23eb9956a367)



gap use hoga flex nad grid mein no padding

```
.container {
    display: flex;
    justify-content: center; /* Aligns items horizontally in the center */
    align-items: center; /* Aligns items vertically in the center */
    align-content : center; // for multiple rows
    flex-wrap: wrap;

}
```

//is used to hide any content that overflows the boundaries
overflow: hidden;

1 ,2 ,3 ,4 jp bhi ordered  ya unordered list banate hai uska style ya image add krna 
list-style: devanagari;
 list-style-image: url("mccain2.jpg");

```
/* Hides horizontal overflow content */
overflow-x: hidden;

/* Adds a vertical scrollbar if content overflows vertically */
overflow-y: scroll;

/* Adds scrollbars only if content overflows */
overflow: auto;

/* Prevents text from wrapping to the next line */
white-space: nowrap;

/* Adds an ellipsis (...) to indicate overflowed text */
text-overflow: ellipsis;
```
```
/* Positions the element absolutely within the nearest positioned ancestor */
jis k mein bhi positive relative hogi static nhi hogi usmein uske according hi ye kaam karega 
    position: absolute;
     top: 0px;
     left:3px;
// it is used to overlap on thing into another
     z-index: 2000px
    // it is used to fixed the complete position 
      /* position: fixed;
 Exception: transform, filter, or perspective properties can also make an element appear as positioned */
//https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
```
used to make the fuction
 :root{
            --color: rgb(255, 0, 247);
            }
color : var(color)

```
jo bhi text hum  kisi buttonn k ander rakhte hai 
input::placeholder {
            color: red;
        }
<input type="text" placeholder="placeholder color">
````

## javascript
var is function-scoped or globally-scoped.
let is block-scoped  // let is more used in the new convention of java script

includes fuction


```
for(i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function ayush(){
    alert("you clicked me mf ");
});
}

Yes, exactly. Your code iterates through all elements with the class "drum" (which are presumably buttons in your case),
and for each button found, it adds an event listener that triggers when that button is clicked. This way, every button gets
the same event listener attached to it, which displays an alert message when clicked. So, it first selects
 all the buttons with the class "drum" and then adds the event listener to each one sequentially.
```
# constructor in js 
```
// Constructor function for creating a Person object
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    // Method to display information about the person
    this.displayInfo = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    };
}

// Creating instances of Person using the constructor
let person1 = new Person('Alice', 30, 'Female');
let person2 = new Person('Bob', 25, 'Male');

// Using the displayInfo method to show information
person1["name"]; is same as person1.name
person1.displayInfo(); // Output: Name: Alice, Age: 30, Gender: Female
person2.displayInfo(); // Output: Name: Bob, Age: 25, Gender: Male


  console.log("Original Object:", obj);
// object ki key miljati hai 
Object.keys()
//value mil jaati hai 
Object.values()
//ye key and value alag alag arrays mein dal dete hai 
Object.entries()


  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
```
When you use console.log(event) in a keydown event listener, it will log the entire event object 
to the browser's console. This object contains a wide range of properties and methods that provide 
detailed information about the event that occurred. Here’s what you can expect to see when you log the event object to the console:
```

document.addEventListener('keydown', function(event) {
    console.log(event.keyCode); // Logs the key code, e.g., 13 for "Enter", 65 for "a"
});
```
```
$(".btn").click(function() {
    var clickedColor = $(this).attr('id'); 
    handler(clickedColor) ;
```
# time out 
```
setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

```

## key press 
```
$(document).keypress(function () {
    if (!gameStarted) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});
```
there is premade daqta class in js 
where you can you so many mmethods and use it for yourself

```
let currentDate = new Date();
console.log(currentDate);
.getMonth
.getHour
.getTime
```
// hum class ko string bana kr bhejte hai kyuki kahi kahi class nhi hoti toh usko string bana dete hai toh, wapis class mein bannae k 
hum parese use krte hai hai 
# jsom
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
//and normal class ko string mein dena ho toh stringify use krte hai 
  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  

  
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);



  In JavaScript, `in` and `of` are both operators used in different contexts:

1. **`in` Operator**:
   - The `in` operator is primarily used to check for the existence of a property in an object or an index in an array.
   - **Examples**:
     ```javascript
     const person = { name: 'John', age: 30 };
     console.log('name' in person);  // Output: true

     const colors = ['red', 'green', 'blue'];
     console.log(0 in colors);  // Output: true
     ```

2. **`of` Operator**:
   - The `of` operator is used in conjunction with `for...of` loops to iterate over the values of an iterable object (like arrays, strings, or other iterable objects).
   - **Examples**:
     ```javascript
     const colors = ['red', 'green', 'blue'];
     for (let color of colors) {
       console.log(color);  // Output: 'red', 'green', 'blue'
     }

     const str = 'Hello';
     for (let char of str) {
       console.log(char);  // Output: 'H', 'e', 'l', 'l', 'o'
     }

     let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Start at index 2, remove 1 element
console.log(arr); // Output: [1, 2, 4, 5]
     ```

**Key Differences**:
- **Purpose**: `in` checks for existence (property or index), while `of` is used for iteration over values.
- **Usage**: `in` is used with objects and arrays to check existence, whereas `of` is used with iterable objects to iterate over their values.

Understanding these differences helps in correctly applying these operators depending on the task at hand—whether you need to check for existence or iterate over values.


