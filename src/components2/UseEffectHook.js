import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);

    useEffect(() =>{

    }, [])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
