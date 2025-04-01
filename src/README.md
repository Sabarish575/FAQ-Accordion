# FAQ Accordion

This is a solution to the **FAQ Accordion Challenge** from Frontend Mentor. The project focuses on creating an interactive FAQ section where users can toggle the visibility of answers. It's built with React and styled using Flexbox to make the layout responsive and user-friendly.

## What I Learned

During the development of this project, I gained experience in several key areas:

1. **Flexbox Layout & Styling**: 
   I used Flexbox to create a clean and responsive layout for the FAQ section. Flexbox made it easy to center and align elements properly, even as the layout adjusts across different screen sizes. 

2. **Toggling Visibility for Different States**:
   The main feature of this FAQ is the ability to toggle the visibility of answers. I used React's `useState` hook to manage the visibility state of each individual question. Each FAQ item's answer visibility is controlled independently, which allows users to open and close multiple answers at once.

3. **Conditional Rendering in React**:
   By using conditional rendering with the state, I dynamically changed the icons (like the plus and minus icons) and the visibility of the content based on whether the answer is open or closed. It helped me grasp how React state interacts with the DOM.

Example code for toggling visibility:
```js
const [flip, setFlip] = useState({
  0: false,
  1: false,
  2: false,
  3: false,
});

const handleClick = (index) => {
  setFlip((prevState) => ({
    ...prevState,
    [index]: !prevState[index],
  }));
};

4.**Tools & Libraries Used**:
## React: The JavaScript library used to manage the UI state and interactions.

## CSS Flexbox: A powerful layout system used to create a responsive, flexible layout.


5.**Challenges Faced**:
Managing state for each individual FAQ item and ensuring only the clicked question's visibility changes while keeping the rest unaffected.

Implementing responsive design for different screen sizes, ensuring the layout works perfectly across mobile and desktop devices.