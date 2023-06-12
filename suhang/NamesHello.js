import React from "react";

const NamesHello = (props) => {
  return (
    <div>
      {props.age > 30 ? <h2>안녕하십니까. {props.userName}</h2> : <h2></h2>}
    </div>
  );
};

export default NamesHello;
