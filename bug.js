```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here. This effect runs on every render,
    // including when `count` changes, causing an infinite loop.
    console.log('Count changed:', count);
    setCount(count + 1);
  }, []); // Empty dependency array causes the effect to run only once,
         // but still incorrect in this case.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```