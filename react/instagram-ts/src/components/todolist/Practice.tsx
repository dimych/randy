import * as React from "react";

export const Practice = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>

      {count}
    </div>
  );
};
