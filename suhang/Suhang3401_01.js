import React from "react";

const Suhang3401_01 = () => {
  let a = 100;
  let b = 100; //a,b와 같은 경우, 다른 경웅도 실행

  return (
    <div>
      {a == 100 && b == 100 ? (
        <h1>
          참이면 보여줄 리액트
          <br />
          리액트는 재미 있다.
        </h1>
      ) : (
        <h1>리액트는 잼 있다.</h1>
      )}
    </div>
  );
};

export default Suhang3401_01;
