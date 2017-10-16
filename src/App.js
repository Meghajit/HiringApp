import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }
//}
//
//export default App;

class Textboxwithlabel extends Component {
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


class Submitbutton extends Component{
    render(){
        return(
            <div>
              <br/>  <button>{this.props.fieldname}</button><br/>
            </div>
        );
    }
    
    }
    
    

var arr=[];
 class App extends Component {
       
        constructor(props) {
    super(props);
    this.state = {
      ht:[]
    };
           this.updateFormValues=this.updateFormValues.bind(this);
  }
     
      updateFormValues(myname,myvalue)
     {
         const ht = this.state.ht;
         ht[myname]=myvalue;
         
         this.setState({ht});
         arr = ht;
     }
     
   

           handleSubmit(e){
            e.preventDefault();
            alert(arr.toString);
          }
     
    
  
    

        render(){
           
            return (
                <div>
                    <form onSubmit={this.handleSubmit} method="GET">
                    <Textboxwithlabel fieldname="first" whenupdate={this.updateFormValues}/>
                    <Textboxwithlabel fieldname="second" whenupdate={this.updateFormValues} />
                    <Textboxwithlabel fieldname="third" whenupdate={this.updateFormValues}/>
                    <Submitbutton fieldname="Submit"   whenupdate={this.updateFormValues}/>
                    </form>
                </div>
            );
        }
    }
export default App;