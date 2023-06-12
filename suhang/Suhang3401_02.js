import React from "react";

const Suhang3401_02 = (props) => {
  let gender = "";
  const contactStyle = {
    backgroundColor: "#60966f",
    margin: "5px",
    padding: "2px",
  };
  if (props.contact.gendercode === 1) {
    gender = "남";
  } else {
    gender = "여";
  }
  return (
    <div style={contactStyle}>
      <h4>
        {props.contact.name}({gender})
      </h4>
      <p>{props.contact.phone}</p>
      <p>{props.contact.address}</p>
    </div>
  );
};

export default Suhang3401_02;
