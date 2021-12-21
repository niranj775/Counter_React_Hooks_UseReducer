import { useReducer } from "react";

const countReducer = (count, action) => {
  // console.log(count, action);
  switch (action.type) {
    case "INCREMENT":
      return count + action.by;
    case "DECREMENT":
      return count - action.by;
    case "RESET":
      return 0;
    default:
      return count;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);
  const [count1, dispatch1] = useReducer(countReducer, 0);

  const increment = () => dispatch({ type: "INCREMENT", by: 1 });
  const decrement = () => dispatch({ type: "DECREMENT", by: 2 });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <>
      <h3>Counter App 1</h3>
      <p>
        Count 1: <b>{count}</b>
      </p>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
      <button onClick={reset}>Reset</button>

      <h3>Counter App 2</h3>
      <p>
        Count 2: <b>{count1}</b>
      </p>
      <button onClick={() => dispatch1({ type: "INCREMENT", by: 2 })}>
        Increment by 2
      </button>
      <button onClick={() => dispatch1({ type: "DECREMENT", by: 2 })}>
        Decrement by 2
      </button>
      <button onClick={() => dispatch1({ type: "RESET" })}>Reset </button>
    </>
  );
}

export default Counter;
