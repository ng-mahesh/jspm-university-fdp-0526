import React, { useState } from "react";

const StateExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [textInput, setTextInput] = useState<string>("");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>useState Hook Example</h1>
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <div>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <h3>
            Updated Text: {textInput}
        </h3>
      </div>
    </div>
  );
};

export default StateExample;
