import React, { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  //count=0, state 변수
  //count가 변경될 때마다 렌더링이 발생한다
  const [renderer, setRenderer] = useState(0);
  //renderer값이 변경될 때 렌더링이 발생

  const countRef = useRef(0);
  //countRef 값이 변경되어도 렌더링이 발생되지 않는다
  //렌더링이 발생되어도 값이 유지된다
  //countRef.current = 0, 전역변수 개념이다
  //countRef.courrent이 값은 바뀌어도 렌더링이 되지 않는다.

  let countVar = 0;
  //countVar 값이 변경되어도 렌더링이 발생되지 않는다
  //렌더링이 발생하면 초기화 된다.

  console.log(countRef);
  console.log("렌더링");

  const doRendering = () => {
    setRenderer(renderer + 1); //renderer값이 변경되면 렌더링이 발생한다.
  };

  // const increaseCountState = () => {
  //   setCount(count + 1);
  //   //count값을 1씩 증가하면 count값이 변경될 때 다시 렌더링을 한다
  // };

  const increaseCountRef = () => {
    countVar = countVar + 1;
    console.log("var : ", countVar);
  };

  const increaseVar = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };
  const printResult = () => {
    countVar = countVar + 1;
    console.log("ref : ", countVar - 1, "var : ", countRef.current);
  };
  return (
    <div>
      <p> State : {count} </p>
      <p> Ref : {countRef.current} </p>
      <button onClick={doRendering}>State증가</button>
      <button onClick={increaseCountRef}>Ref증가</button>
      <button onClick={increaseVar}>Var증가</button>
      <button onClick={printResult}>Ref Var 값 출력</button>
    </div>
  );
};

export default App;
