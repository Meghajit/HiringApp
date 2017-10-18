import React from "react"

class Textareawithlabel extends React.Component {
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
                           <textarea rows ={this.props.rows} cols={this.props.cols} id={this.props.fieldname} value={this.state.value} onChange={this.delta}></textarea>
                       </div>
           
                   );
           }   
}

export default Textareawithlabel;