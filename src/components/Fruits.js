import React from "react";


function Fruits() {
    const [fruit, setFruit] = useState('Apple');
  return (
  <>
    <p>The value of Fruit is {fruit}</p>
    <button onClick={() => setFruit('Papaya')}>Papaya</button>
    <button onClick={() => setFruit('Mango')}>Mango</button>
    <button onClick={() => setFruit('Banana')}>Banana</button>
  </>
  );
}

export default Fruits;