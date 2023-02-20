import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  // const counter = useSeletor((state) => {state.counter})

  const IncrementHandler = () => {
    console.log("Hello");
    dispatch(counterActions.increment());
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const IncreasedBy5Handler = () => {
    dispatch(counterActions.increase(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        showCounter &&
      <div className={classes.value}>{counter}</div>


      }
      <div>
        <button onClick={IncrementHandler}>increment</button>
        <button onClick={IncreasedBy5Handler}>increment by 5</button>
        <button onClick={DecrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
