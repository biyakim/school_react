import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    //renderCount가 업데이트가 되더라도 렌더링이 발생
    console.log("렌더링 수", renderCount.current);
  });

  //useEffect()안에 state변수가 업데이트가 되면
  //계속해서 useEffect를 호출하기 때문에 무한 loop가 발생한다
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려!!</button>
    </div>
  );
};

export default App;
