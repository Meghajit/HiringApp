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
               let dispORnot = null;
                if(this.props.mandatory=="required")
                    dispORnot =  <input required type="text"  id={this.props.fieldname} value={this.state.value} onChange={this.delta} placeholder={this.props.placeholdername} ></input>
                else
                dispORnot = <input type="text"  id={this.props.fieldname} value={this.state.value} onChange={this.delta} placeholder={this.props.placeholdername} ></input>
                   return(
                       <div>
                           <label htmlFor={this.props.fieldName}></label>
                           
                           <input required type="text"  id={this.props.fieldname} value={this.state.value} onChange={this.delta} placeholder={this.props.placeholdername} ></input>
                       </div>
           
                   );
           }   
}

export default Textboxwithlabel;