import React, { useEffect, useState } from "react";

const EffectExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<string>("Loading data......");

  const handleCounter = () => {
    setCount(count + 1);
  };

  //   Effect 1: Runs on mount (component) and whenever the 'count' changes.
  useEffect(() => {
    document.title = `counter clicked: ${count}`;
  }, [count]);

  // Effect 2: Runs only once when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setData("Data fetched successfully!!!!!");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h2>useEffect Hook Example</h2>
      <div>
        <h3>Counter for title update: {count}</h3>
        <button onClick={handleCounter}>Update title count</button>
      </div>
      <div>
        <h3>API Fetch simulation:</h3>
        <p>
            {data}
        </p>
      </div>
    </div>
  );
};

export default EffectExample;
