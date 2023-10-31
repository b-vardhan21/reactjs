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