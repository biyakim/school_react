import { useState } from "react";

const Suhang3401_04 = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();

  const handleChange1 = (e) => setNumber1(e.target.value);
  const handleChange2 = (e) => setNumber2(e.target.value);
  const handleChange3 = (e) => setNumber3(e.target.value);

  const onclick1 = () => {
    setNumber3(number1 + number2);
  };
  const onclick2 = () => {
    setNumber3(number1 - number2);
  };
  const onclick3 = () => {
    setNumber3(number1 * number2);
  };
  const onclick4 = () => {
    setNumber3(number1 / number2);
  };

  return (
    <div>
      <h2>이벤트를 이용한 사칙연산 연습</h2>
      <h2>숫자1</h2>
      <input
        type="number"
        name="number1"
        placeholder="정수값을 입력하세요"
        value={number1}
        onChange={handleChange1}
      />
      <h2>숫자2</h2>
      <input
        type="number"
        name="number2"
        placeholder="정수값을 입력하세요"
        value={number2}
        onChange={handleChange2}
      />
      <h2>실행결과</h2>
      <input
        type="number"
        name="number3"
        value={number3}
        onChange={handleChange3}
      />
      <button onClick={onclick1}>덧셈</button>
      <button onClick={onclick2}>뺄셈</button>
      <button onClick={onclick3}>곱셈</button>
      <button onClick={onclick4}>나눗셈</button>
    </div>
  );
};

export default Suhang3401_04;
