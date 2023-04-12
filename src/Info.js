import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //Info 컴포넌트가 마운트 될 때 useEffect가 2번 호출
  //useEffect()함수의 두번째 인자값이 배열([])을 추가하면
  //컴포넌트가 마운트 될 때만
  //name값이 변경될 때 렌더링이 발생
  useEffect(() => {
    console.log("마운트 될 때만 실행합니다.");
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
    //name값을 변경한다.
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
    //nickname값을 변경한다.
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickname}
      </div>
    </div>
  );
};

export default Info;
