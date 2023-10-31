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

**Stateless Functional Component** 

A stateless functional component in React is a component that does not have any state. This means that it does not track any changes to its own data, and it does not have a lifecycle. Functional Components are bascially Javascript functions they return HTML which describes UI.
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




