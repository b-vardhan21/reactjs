# What is React?
1. Open source library for building user interfaces
2. Focus on UI
3. Rich Ecosystem
4. Doesn't focus on routing, HTTP requests

# Component Based Architecture
React component architecture is a way of organizing React components into a reusable and maintainable structure. It's based on the idea of using components to build larger components, which can then be used to build even larger components. This allows you to create complex UIs with a lot of functionality without having to write a lot of code.

There are a few different ways to organize React components into an architecture. One popular way is to use a container/component pattern. This pattern involves creating two types of components: containers and components. Containers are responsible for managing the state of their child components and passing that state down to them. Components are responsible for rendering their own UI and handling user interaction.

Traditional website can break down into header, footer, sidenav, main content

# React is Declarative
**Describes the UI State:** In React, you declare how the user interface should look based on the current state of your application. You define what the UI should display when certain conditions are met, but you don't explicitly specify how to transition from one state to another. This is in contrast to imperative programming, where you specify step-by-step instructions for changing the UI.

**Virtual DOM:** React uses a virtual representation of the DOM (Virtual DOM) to efficiently update the actual DOM. When your component's state changes, you declare how the UI should look in response to that change, and React takes care of updating the real DOM as efficiently as possible. You don't have to manipulate the DOM directly, which is an imperative approach.

# To create a React app
`npx create-react-app my-react-app`  
This will create a new React app in the **my-react-app** directory.  
Navigate to the **my-react-app** directory and run the following command to start the development server:
`npm start`  
This will start the development server on port 3000. You can view your React app at http://localhost:3000 in your web browser.  If we are using npm to create react app we have to install react app globally so that's why we are using npx.

When you run the command `npm start` `index.html` will be served in the browser it contains root DOM node `<div id="root"></div>` next the control enters `index.js` react dom renders the app component onto the root dom node. The app component the html which is ultimately displayed in the browser.

# Components
In react component refers to the part of the user interface. Suppose our application has 5 components header, footer, sidenav, main content and finally one component(root usually known as App component) to contain every other component. Each of the 4 component represents a part of the UI, how ever all the components come together to make up the entire application.  
Components are also reusable the same component can be used with different properties to display differnt information, for ex: the sidenav component can be left sidenav or right sidenav.  
Components can contain other components for example App component contains other components.  
App component -> App.js  
Component code -> Javascript File

# Component Types

**Functional Component** 

A stateless functional component in React is a component that does not have any state. This means that it does not track any changes to its own data, and it does not have a lifecycle. Functional Components are bascially Javascript functions they return HTML which describes UI.
**Update:**
In React, functional components can handle state as well as class components, thanks to React Hooks. Prior to the introduction of Hooks in React 16.8, functional components were stateless and could not handle state. However, with the introduction of Hooks, functional components can now manage state using the useState Hook.

Before Hooks, only class components could hold and manage state by using the this.state object. However, functional components were mainly used for presenting UI based on the provided props.

Now, with Hooks, the useState Hook specifically allows functional components to hold and manage state in a more concise and readable manner. This means that you can define and update state variables within functional components. 
```javascript
function Hello(props) {
  const { name } = props;

  return (
    <h1>
      Hello, {name}!
    </h1>
  );
}
```

**Stateful Class Component**

A stateful class component in React is a component that has its own state. This means that it can track changes to its own data and respond to those changes.  
Stateful class components are more complex than stateless functional components, but they offer more flexibility. They can be used to create more dynamic and interactive UIs.  
Stateful Class Component are regular ES6 classes that extend the component class from the react library. They must contain **render method returning HTML**
```javascript
class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
```

# export

The export statement is used to export functions, objects, variables, or components from a file, making them available to be imported in other modules.
```javascript
// Exporting a single default component or function
export default MyComponent;

// Exporting multiple named components or functions
export { someFunction, someVariable };
```

# JSX

Javascript XML(JSX) - Extension to the Javascript language syntax.
Write xml like code for elements and components.
JSX tags have a tag name, attributes and children.
JSX is not a necessary to write react applications.
JSX makes your react code simpler and elegant.
JSX ultimately transpiles to pure javascript which is understood by browsers.

Class - className
for - htmlFor
camelCase property naming convention
onclick - onClick
tabindex - tabIndex

# Props

props is an object that contains the attribute and the values which have passed from the parent component.  
props are immutable.  

# props vs state

| props| state |
|:------------ |:--------------:| 
| props get passed to the component | State is managed within the component | 
| props are immutable(The parents are own the props cannot be changed by children)  | State is managed within the component hence the component has full control to change the state | 
| props - functional components | useState Hook - functional components | 
| this.props - class components | this.state - class components | 


create state object and intilize it, usually done in class constructor. With in constructor we call super(), this is req because we extend react component class and call has made to base class constructor and then we create our state object[this.state = {} ].  
Now intilize a property
```javascript
this.state = {
    message: 'welcome visitior'
}
```
Now bind this state value in render function same as props
```javascript
render(){
    return(
        <h1>{this.state.message}</h1>
    )
}
```
Now are using state to render message we now have the ability to change the message
Note: state is a reserved keyword

**We need to call setState() to alter the state of a class component**
```javascript
import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    };
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing Vardhan'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }


}

export default Message;
```

We should never modify the state directly, we have to use setState().  
If we modify state directly react wont render the component.  
setState() on the other hand will let react know it has to re-render the component.  
Calls to setState is Asynchronous, in below example console.log called before the state is set. Many times in our application we want to execute some code only after the state has been updated, so to handle such a situation you can pass in a call back function(which is an arrow function) as the second parameter to setState()
```javascript
Increment(){
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
    }
```

```javascript
Increment(){
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log('call back value', this.state.count)
        })
        console.log(this.state.count);//Syschronous call back statement
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
    }

    ouput:-
    count - 1 | console.log('call back value', this.state.count) - 1 | console.log(this.state.count) - 0
```

Note:- React will group multiple setState() calls into single update for better performance. So whenever you want to update the state based on previous state we need to pass function as an argument to setState() instead of passing in object.

```javascript
import React, {Component} from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    Increment(){
        this.setState((prevState) => ({
            count : prevState.count + 1
            
        }))
    }

    IncrementFive(){
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
        this.Increment();
    }

    render(){
        return(
            <div>
                Count - {this.state.count} <br/>
                <button onClick={()=> this.IncrementFive()}>Increase</button>
            </div>
        )
    }
}
export default Counter;
```

# setState
1. Always make use of setState and never modify the state directly
2. Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
3. When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.

# Destructuring props and state

Destructuring makes it possible to unpack values from arrays or properties from object to distinct variables 

**Props in functional component**
```javascript
import React from "react";

// function Greet(){
//     return <h1>Good Morning vardhan</h1>
// }

const Greet = (props)=>{
    const {name, heroName} = props
    return(
        <div>
            <h1>Good Morning {name} you are {heroName}</h1>
        </div>
    );
}

export default Greet;
```

**Props in class component**
```javascript
import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        return(
            <h1>Welcome {name} you are {heroName}</h1>
        )
    }

}

export default Welcome;
```

# Event Handling

**Functional Components**
```javascript
import React, {Component} from "react";

const FunctionClick = () => {

    function clickHandler(){
        console.log('Button Clicked');
    }

    return(
        <div>
            <button onClick = {clickHandler}>Click</button>
            //Here we are passing clickHandler function as the event handler there are no paranthesis.
            //If we have paranthesis clickHandler() then it becomes a function call. Here we want handler to 
            //be function not function call. 
            //clickHandler()  if we use this the output will be printed in console before clicking the button
            //as this is function call
        </div>
    )

}

export default FunctionClick;
```

**Class Components**
```javascript
import React,{Component} from "react";

class ClassClick extends Component{

    clickHandler(){
        console.log("Class Click Button")
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Class Click Button</button>
            </div>
        )
    }
}

export default ClassClick;
```

# Binding Event Handlers

Why we will bind event handlers in react because of the way 'this' keyword works in javascript

bind() in render method
```javascript
import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(){
        super();
        this.state = {
            message: 'hello'

        }
    }

Message(){
    this.setState({
        message: 'hello world'
    })
    console.log(this)
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.Message.bind(this)}>Click</button>
      </div>
    )
  }
}

```

Arrow function in render method
```javascript
import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(){
        super();
        this.state = {
            message: 'hello'

        }
    }

Message(){
    this.setState({
        message: 'hello world'
    })
    console.log(this)
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.Message()}>Click</button>
      </div>
    )
  }
}

```

Binding the event handler in constructor. Binding happens in class constructor only once. best option
```javascript
import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(){
        super();
        this.state = {
            message: 'hello'

        }
        this.Message = this.Message.bind(this) 
    }

Message(){
    this.setState({
        message: 'hello world'
    })
    console.log(this)
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.Message}>Click</button>
      </div>
    )
  }
}

```

Using class property as Arrow Function
```javascript
import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(){
        super();
        this.state = {
            message: 'hello'

        }
        
    }
    Message = () => {
        this.setState({
            message: 'Good Bye'
        })

    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.Message}>Click</button>
      </div>
    )
  }
}

```


# Method as props

Untill now we have seen how parent component pass props to its child component. Any data in parent component can pass as props to child components. 

Now what if child component want to communicate to it's parent component.  
we pass reference to a method as props to child component.  

```javascript
ParentComponent.js
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)

    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
        //here we are passing method as prop
      </div>
    )
  }
}

export default ParentComponent
```

```javascript
ChildComponent.js
import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
      //here we accessing method as prop object
    </div>
  )
}

export default ChildComponent

```

**We have successfully called a method(greetParent()) in the parent component from a button in the child component by passing the method as props to the child component.**

Now we will pass a Parameter when calling the parent method from the child component[we will use arrow function in the return statement].  
Arrow Function syntax is the simplest way to pass the parameters from the child component to parent component.   

**If we want to pass a parameter use Arrow function syntax**

```javascript
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)

    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent

ChildComponent.js
import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

```




# Conditional Rendering

when you are building react applications you often need to show or hide html based on certain condition luckliy Conditional Rendering works same way like conditions in java script. 
 
# 4 types of Conditional Rendering
1. if/else
2. Element variables
3. Ternary conditional operator
4. Short circuit operator

# if/else
```javascript
import react, {Component} from 'react'

class UserGreeting extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true,
            message: ''
        }
    };

    handler(){
        if(this.state.isLoggedIn){
            this.setState({
                message: "welcome vardhan"
            });
        }
        else{
            this.setState({
                message: "welcome Guest"
            });
        }
    }
   
    render(){
        return(
            <div>
                <h1>{this.state.message} </h1>
                <button onClick={()=>this.handler()}>Click Me</button>
            </div>
        )
       
    }

}

export default UserGreeting
```
Note: If/else statement don't work inside JSX

# Element variables

In this we will use javascript variables to store elements

```javascript

render(){
        let message
        if(this.state.isLoggedIn){
            message = <div>welcome vardhan</div>
        }
        else{
            message = <div>welcome guest</div>
        }
        return(
            <div>{message}</div>//check here
        ) 
    }

```

# Ternary conditional operator
benefit: we can use inside the JSX
```javascript
render(){

        return(
            this.state.isLoggedIn ?(
            <div>Welcome Barishetti</div> 
            ):(
            <div>Welcome Guest</div>
            )
        )
}

```

# Short circuit operator
```javascript
render(){

        return(
            this.state.isLoggedIn && <div>Welcome Barishetti</div>
        )
}
```


# List Rendering

when you build web applications a common scenario is to display list of items. so what we want is to repeate some html for each item in the list.  
we need to use curly braces if we want to evaluate javascript expressions

```javascript
import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name) => {
        return <h1>{name}</h1>
    })
  return (
    <div>{nameList}</div>
  )
}

export default NameList

```

# Example 2
```javascript
NameList.js

import React from 'react'
import Person from './Person'

function NameList() {
    //const names = ['Bruce', 'Clark', 'Diana']

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 26,
            skill: 'Spring'
        },
    ]


    const personList = persons.map((person) => <Person person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default NameList

```

```javascript
Person.js

import React from 'react'

function Person({person}) {
    return (
        <div>

            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.skill}</h1>
        </div>
    )
}

export default Person

```


**ERROR**
Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools
react-jsx-dev-runtime.development.js:87 <br>
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `NameList`. See https://reactjs.org/link/warning-keys for more information.
    at Person (http://localhost:3000/static/js/bundle.js:955:3)
    at NameList
    at div
    at App (http://localhost:3000/static/js/bundle.js:48:1)



# Lists and Keys

