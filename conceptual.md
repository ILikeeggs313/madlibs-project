### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - A free and open-source front-end JS library for building UI based on components. it is maintained by Facebook.

- What is Babel?
  - A free and open-source JS transcompiler that is mainly used to convert ES2015+ into backwards-compatible JS code that can only be run older JS bases

- What is JSX?
  - an extension to JS language syntax which provides a way to structure component rendering using syntax familiar to many developers commonly used in React. Similar in apperance to HTML

- How is a Component created in React?
  - It is a JS function essentially

- What are some difference between state and props?
  - props get passed to the component (like parameters) whereas state is managed within a component (like variables declared within a function)

- What does "downward data flow" refer to in React?
  - the passing of data and/or function via props from parents to child component
  
- What is a controlled component?
  - fdata is handled by state within the component
  

- What is an uncontrolled component?
  - form data handled by the DOM itself

- What is the purpose of the `key` prop when rendering a list of components?
  - helps React identify which items/components have changed, added, or removed, we use ID as key most of the time

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - because you are not passing a unique key for each child element in the list.

- Describe useEffect.  What use cases is it used for in React components?
  - allow us to perform side effects in components, like fetching data, directly updating the DOM, and timers, accepts 2 arguments, 2nd one is optional

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - a React hook that lets us reference a value that's not needed rendering
    - useRef returns an object with a single property:
      - It returns the initial value you set, which you can change later on

- When would you use a ref? When wouldn't you use one?
  - To later assign values to an inital value

- What is a custom hook in React? When would you want to write one?
  - a custom hook in React starts with "use" in a custom folder called hooks, we use custom hooks when we have large code database and want to be able to share the logic and functionality of a specific function, like useAxios, useToggle, etc.
