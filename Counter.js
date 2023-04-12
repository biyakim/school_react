import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }
    // 리액트 프레임워크에서 생성자를 실행하게끔 설계되어 있음 
    
    render() {
        const {number, fixedNumber} = this.state; // state에 있는 number값을 조회
        // number = 0, fixedNumber = 0이 저장
        return (
            <div>
                <h1>{number}</h1>
                <h2>바꾸지 않는 값 : {fixedNumber}</h2>
                <button
                // onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정합니다.
                onClick={() => {
                    this.setState(
                    {
                        number: number + 1
                    },
                    () => {
                        console.log('방금 setState가 호출되었습니다.')
                        console.log(this.state);
                        }
                    );
                }}
                >

                    +1
                </button>
                   
                
            </div>
        )
    }
}

export default Counter;