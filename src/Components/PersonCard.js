import React, {Component} from "react";

class MyNewComponent extends Component{
    render() {
        
        return (
            <div>
                <h3> { this.props.lastName }, { this.props.firstName }</h3>
                <h6>Age: { this.props.age }</h6>
                <h6>Hair Color: { this.props.hairColor }</h6>
            </div>
        )
    }
}

export default MyNewComponent;