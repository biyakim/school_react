import PropTypes from "prop-types"; 
import { Component } from "react";

class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div> 안녕하세요, 제 이름은 {name}입니다. <br/> 
            children 값은 {children}<br/>
            입니다.
            <br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다
            </div>
        )   
    }
}



MyComponent.defaultProps = {
    name : "기본이름"
};

MyComponent.protoTypes = {
    name : PropTypes.string
    //name은 문자열을 받을 수 있는 속성으로 지정
}

MyComponent.protoTypes = {
    favoriteNumber:PropTypes.number.isRequired
    //name은 문자열을 받을 수 있는 속성으로 지정
    //isRequired는 반드시 값을 넘겨주어야 한다.
}

export default MyComponent; 