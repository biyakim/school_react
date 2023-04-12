import { Component } from "react";
import "./ValidationSample.css";
class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success" //success는 클래스 input 박스의 색지정
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증 하기</button>
      </div>
    );
  }
}
export default ValidationSample;
