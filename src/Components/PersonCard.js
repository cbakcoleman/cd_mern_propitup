import React, {Component} from "react";

class MyNewComponent extends Component{
    render() {
        const { firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h3> { this.props.lastName }, { this.props.firstName }</h3>
                <h6>Age: { age }</h6>
                <h6>Hair Color: { hairColor }</h6>
            </div>
        )
    }
}

export default MyNewComponent;