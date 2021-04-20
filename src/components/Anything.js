import React, { useState } from "react";

const Anything = () => {
  const [state, setState] = useState("Nothing");
  return (
    <div>
      <h3>{state}</h3>
      <button onClick={() => setState("Button Clicked")}>Button</button>
    </div>
  );
};

export default Anything;
