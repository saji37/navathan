import React from "react";
import Clock from "./Clock";

const App = () => {
  let deadline = "February, 23, 2023";

  return (
    <div className="App">
      <Clock deadline={deadline} />
    </div>
  );
};

export default App;
