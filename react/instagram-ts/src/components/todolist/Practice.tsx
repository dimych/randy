import { useState } from "react";

export const Practice = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>{count}</h1>
    </div>
  );
};
