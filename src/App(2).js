import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incriment = () => setCounter(counter + 1);
  const decriment = () => setCounter(counter - 1);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incriment}>incriment</button>
      <button onClick={decriment}>decriment</button>
    </div>
  );
};

export default App;
