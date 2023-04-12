import "./App.css";
import { useState } from "react";
import Timer from "./Timer";
const App = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle</button>
    </div>
  );
};

export default App;
