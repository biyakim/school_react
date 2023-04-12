import { Component } from "react";

class ScrollBox extends Component {
  scrollBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // 앞 코드에는 비구조화 할당 문법을 사용했음
    // 다음 코드와 같은 의미
    // const scrollHeight = this.box.scrollHeight
    // const clientHeight = this.box.clientHeight
    //
    this.box.scrollTop = scrollHeight - clientHeight;
    // scrollHeight  요소의 전체(실제) 높이로, 보이지 않는 영역의 content + padding 까지 포함된 값
    // clientHeight -> 내부 높이를 픽셀로 반환
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "80%",
      height: "550px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
