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
