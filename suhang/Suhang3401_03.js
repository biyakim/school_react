import { useState } from "react";

const Suhang3401_03 = (props) => {
  const [name, setName] = useState("홍길동");
  let msg = "";

  if (props.age > 10) {
    msg = "성인입니다";
  } else {
    msg = "미성년자입니다";
  }

  const onClick = () => setName("사랑해");

  return (
    <div>
      <h2>
        {name}({props.age}) : {msg}
      </h2>
      <button onclick={onClick}>Change</button>
    </div>
  );
};

export default Suhang3401_03;
