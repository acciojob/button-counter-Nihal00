
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [data, setData] = useState(0);
  function click(){
    setData(data+1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {data} times</p>
        <button onClick={click}>Click me</button>
    </div>
  )
}

export default App
