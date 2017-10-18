import React from "react"

class Textboxwithlabel extends React.Component {
    constructor(props) {
   super(props);
   this.state = {
     value: "",
   };
        this.delta = this.delta.bind(this);
 }
    
       delta(event){
           this.setState({
               value:event.target.value
           });
           this.props.whenupdate(this.props.fieldname,event.target.value);
           console.log(this.props.fieldname+ " --->" +event.target.value);
           }
           
           render(){
                   return(
                       <div>
                           <label htmlFor={this.props.fieldName}></label>
                           <input type="text" id={this.props.fieldname} value={this.state.value} onChange={this.delta}></input>
                       </div>
           
                   );
           }   
}

export default Textboxwithlabel;