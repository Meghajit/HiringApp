import React from "react"

class SelectorField extends React.Component {
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
                                <select autofocus required  id={this.props.fieldname} value={this.state.value} onChange={this.delta}>
                                    <option value="cp">CP</option>
                                    <option value="hp">HP</option>
                                    <option value="sow">SOW</option>
                                 </select>
                       </div>
           
                   );
           }   
}

export default SelectorField;