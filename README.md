1. What is JSX, and why is it used?

# ans:
JSX, or JavaScript XML, is a special syntax in React that lets me write HTML-like code inside JavaScript. It helps make my code cleaner and easier to understand, and I can mix both design and logic in one place. Behind the scenes, JSX turns into normal JavaScript, making it simple and secure to build dynamic user interfaces.

2. What is the difference between State and Props?

# ans:
State is the component’s own changeable data that can be updated over time, while props are read-only values passed from a parent to a child component. In short, state is internal and mutable, whereas props are external and immutable.

3. What is the useState hook, and how does it work?

# ans:
The useState hook lets React functional components store and update data. It returns a state variable and a function to change it, causing the component to re-render whenever the state updates.

4. How can you share state between components in React?

# ans:
I can share state between components in React by lifting the state up to their common parent component. The parent keeps the state using useState and passes it down as props so both components can access and update it. For bigger projects, I can also use tools like the Context API or Redux to manage shared state more easily.

5. How is event handling done in React?

# ans:
In React, event handling is done using camelCase event names and passing functions as handlers. React automatically binds events, so I can simply attach a handler function to an element’s event prop like onClick.