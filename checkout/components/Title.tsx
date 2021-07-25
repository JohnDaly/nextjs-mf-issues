import React, { useEffect, useState } from "react";
const Title = () => {
  console.log("---------loading remote component---------");
  useEffect(() => {
    console.log("HOOKS WORKS");
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div className="hero">
      <h1 className="title">
        {" "}
        This came fom <code>checkout</code> !!!
      </h1>
      <p className="description">And it works like a charm v2</p>
      <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
    </div>
  );
};

export default Title;
