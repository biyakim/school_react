import React, { useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.value = "";
    inputRef.current.focus();
    //alert창에서 확인 버튼을 input박스에 포커스 된다,
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};
export default App;
