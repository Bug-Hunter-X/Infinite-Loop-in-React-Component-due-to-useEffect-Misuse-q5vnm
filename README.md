# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by improper use of the `useEffect` hook. The bug occurs in the `MyComponent` component, where an `useEffect` hook is used to update the state (`count`) based on its current value. This leads to an infinite loop because every state update triggers a re-render, causing the effect to run again and again.

## Bug
The bug is in `bug.js` which contains a React component (`MyComponent`) that demonstrates the problem. The `useEffect` hook with an empty dependency array runs only once after the initial render.  However, the incorrect logic inside the effect still triggers a state change and causes the component to re-render continuously.

## Solution
The solution provided in `bugSolution.js` fixes this issue by correctly defining the dependencies in `useEffect`. Now, the effect runs only when the value of `count` changes.