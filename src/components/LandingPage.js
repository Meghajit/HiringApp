import React from "react"

class LandingPage extends React.Component {
    constructor(props) {
   super(props);
  
        this.delta = this.delta.bind(this);
 }

 render(){
    return(
        <div>
            <label htmlFor={this.props.fieldName}></label>
            <textarea rows ={this.props.rows} cols={this.props.cols} id={this.props.fieldname} value={this.state.value} onChange={this.delta}></textarea>
        </div>

    );
}
}   