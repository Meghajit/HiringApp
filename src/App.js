import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
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
              <Button bsStyle="success" bsSize="small">{this.props.fieldname}</Button>
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
            alert(arr["first"]+ "\n" + arr["second"] +" \n" + arr["third"]);
          }
     
    
  
    

        render(){
           
            return (
                <div>
                
                
                
       <form>
          <div class="form-row justify-content-md-center">
                
            <div class="form-group col-md-2">
              <label for="hiring_manager_id" class="col-form-label">Hiring Manager Id</label>
              <input class="form-control" id="hiring_manager_id" placeholder="ID"></input>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
            <div class="form-group col-md-2">
              <label for="inputPassword4" class="col-form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
            </div>
                
              <div class="form-group col-md-1"></div>  
                
                <div class="form-group col-md-2">
              <label for="inputPassword4" class="col-form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
            </div>
                 <div class="form-group col-md-1"></div>
                
                
                <div class="form-group col-md-2">
              <label for="inputPassword4" class="col-form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
            </div>
                
                 
                
            </div>
                
              
        
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
                
                
                
                   
                    <form action="http://www.google.co.in" onSubmit={this.handleSubmit} method="GET">
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