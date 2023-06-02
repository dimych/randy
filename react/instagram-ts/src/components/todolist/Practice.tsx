import { useState } from "react";

export const Practice = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("hello");
  const [gender, setGender] = useState("1");

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
      <select
        value={gender}
        onChange={(event) => setGender(event.currentTarget.value)}
      >
        <option value={"1"}>male</option>
        <option value={"2"}>female</option>
      </select>
    </div>
  );
};
