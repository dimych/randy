import { useState } from "react";

export const Practice = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("hello");

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h3>{count}</h3>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.currentTarget.value);
        }}
      />
    </div>
  );
};
