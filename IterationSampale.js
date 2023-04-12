import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = //eslint-disable-line no-unused-vars
    //setNames함수는 names값을 변경
    useState([
      { id: 1, text: "눈사람" },
      { id: 2, text: "얼음" },
      { id: 3, text: "눈" },
      { id: 4, text: "바람" },
    ]);
  const [inputText, setInputText] = useState(""); //eslint-disable-line no-unused-vars
  const [nextId, setNextId] = useState(5); //eslint-disable-line no-unused-vars
  //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  //inputText에 input박스의 내용을 저장
  const onClick = // eslint-disable-line no-unused-vars
    () => {
      const nextNames = names.concat({
        //데이터를 연결하고 새로운 배열을 생성
        id: nextId,
        text: inputText, //박스에서 입력한 값
      });
      setNextId(nextId + 1); // nextId에 1을 더해준다. key 값을 증가
      setNames(nextNames); // names 값을 업데이트 한다.
      setInputText(""); // inputText를 비운다.
    };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    //전체 목록중에서 해당되는 데이터를 더블클릭하면 전체 id와 더블클릭한 id를 비교해서 같은 데이터만 제외하고
    setNames(nextNames);
    //nextNames값에 의해서 데이터를 업데이트한다.
  };
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
