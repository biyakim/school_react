import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  //에러가 발생하면 호출되는 메소드이고
  //this.state.error값이 true로 변경한다,
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러가 발생했습니다</div>;
    return this.props.children;
  }
}
export default ErrorBoundary;
