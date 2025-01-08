# Namaste react practice 🐱‍🏍

# Parcel features
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code 
- different dev and production bundles


- Config driven UI

- App Structure:-

/**
 * Header
    - logo 
    - Nav Items
* Body
    - Search Bar
    - Restaurant Container
    - Restaurant card
* Footer
    - Copyright
    - Link
    - Address
    - Contact
**/

two types of import/export
- default export/import
export default Component;
import Component from "path";

- named export/import

export const Component;
import { Component } from "path";

* React Hooks
Normal JS utility functions
2 most important hooks
- useState()
- useEffect()

useEffect()
- componentDidMount
- componentDidUpdate
- componentWillUnmount

** Whenever state variable changes, react rerenders the component **

# 2 Types of routing you can have in your web Application:-
    Client side routing
    Server side routing


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)

# Types of Testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing(E2E Testing)

# Setting up Testing in our app
- Install React Testing Library
- Install jest
- Installed babel dependencies
- configure babel
- configure Parcel config file to disable default babel transpilation
- Jest configuration
- Jest -> npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom


