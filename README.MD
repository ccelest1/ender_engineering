Work for applying to ender engineering Apprenticeship

# Questions
## Write a function in typescript that takes an array of objects, each with known properties name, age, and hasACar. This function should return the name of the youngest person who owns a car. Paste the code in here.
[Question 1](Q1.ts)

## What is the difference between `any`, `unknown`, and `never` types in typescript?
The any type is a type that loses the advantages of type safety provided by Typescript. It is not recommended and is only done if one want's to opt of type checking because of two reason: type info is not available or a type declaration would involve a disproportionate effort level.

The unknown type is for variables that we are unaware of what the type is going to be. For this type, we most likely want to involve typeof or comparison checks when taking them as parameter inputs.

Finally, the never type represents value types that won't ever occur. Never would be the desired type for a function/arrow expression that would throw an exception or wouldn't return. Two examples include a function that throws an error message or a function that doesn't reach a definite ending.

## What is typecasting and when should you use it?
In general typecasting, there are two types: explicit and implicit. Explicit is performed when converting from one type to another where the desired type is now inherited by the object i.e performing:
```
let num = 123
let num_string = num.toString()
console.log(typeof num_string) // returns string
```
With implicit typecasting, js provides a type for operations to make an expression have logical sense
```
let num = 123
let string_num = "this is me counting to 3: " + num
console.log(string_num) // 'this me counting to 3: 123'
```

For typescript, typecasting is necessary in order to override a type given at default to a variable. If a variable is given unknown and we have a process where we need a defined type to prevent errors or runtime errors, we most definitely should perform typecasting in order to provide code clarity.

```
let var_for_test: unknown = 12
console.log((<number> var_for_test))

let unknown_str: unknown = 'im here to be casted'
console.log((<string> unknown_str).length);
```

## Build a form in HTML that takes in a person’s name, phone number, a message up to 500 characters, and an uploaded file.
[Form for name, phone#, message, file](form.html)

## How do you handle asynchronous operations in javascript, such as sending a request to an API?
In order to send a request, ie DELETE/POST/UDPATE, you can create a handlesubmit/onclick/function that triggers when a user desires an API request, in said function we want two things which is the url to handle request and fetchConfig that specifies the type of operation to occur using the desired API
```js
const handleSubmit = async (values) => {
    try{
        const url_to_post = 'url'
        const fetchConfig = {
            'method': 'CRUD OPERATION',
            'body': JSON.stringify(values),
            'headers': {
                'content-type':'application/json'
            }
        }
        const response = await fetch(url_to_post, fetchConfig)
    }
}
```


## What is the difference between CSS Grid and Flexbox layouts?
A css grid is a grid layout designed for one dimension whereas flexbox layouts are designed for two dimensional layouts. One question that you would ask when determining which to use is if do you need control in both dimensions or just one dimension. Flexbox in the former and css grid in teh latter.

## Explain the concepts of and differences between props and state in React.
Props are immutable and follow the parent and child component lifecycle
```js
function Parent({ props }){
    const { info } = props;
    return(
        <body>
        this is the {info}
        </body>
    )
}
export default function send_props_to_parent(){
    <Parent
    info="info"
    >
}
```


State is mutable and often initialized/changed/managed with a defined component using
```js
export default const test_operation = ( ) => {
    const [cars, setCars] = useState([])
    useEffect(()=>{
        const fetch_cars = async () => {
            try{
                const cars = fetch await('https://cars.com')
                if(cars.ok){
                    const cars_response = cars.json()
                    setCars(cars_response)
                }
            }
        }
    })
    ... (rest of function using carState)
}
```

## Write a functional component in React that accepts two props, name and age, and renders a string that displays those two values and then a function that reverses name.
```js
function TwoProps({ name, age }) {
  return(
    <h1> Hello {name} and your age is: {age}</h1>
  );
}

export default function App() {
  return(
    <TwoProps
     name="name"
     age="age"/>
    );
}
```
```js
function TwoProps({ name, age }) {
  const reversed_name = ( str ) => {
    let res = ""
    for(let i=str.length-1; i>=0;i--){
      res+=str[i]
    }
    return res
  }
  let result = reversed_name( name )
  return(
    <h1> Hello {result} and your age is: {age}</h1>
  );
}

export default function App() {
  return(
    <TwoProps
     name="name"
     age="age"/>
    );
}
```

## Create a Test for the Above Function
[Test](./test-rev-string/src/pages/RevString.test.jsx)
