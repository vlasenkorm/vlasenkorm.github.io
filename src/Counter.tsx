import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Update the count</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  );
};

export default Counter;
