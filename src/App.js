import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
          console.log("LOL");
         const ht = this.state.ht;
         ht[myname]=myvalue;
         
         this.setState({ht});
         arr
       
        
     }
     
   

           handleSubmit(e){
               console.log("HEHEEHE");
            e.preventDefault();
               str="{\n";
          for(var i=1;i<=16;i++)
             var str=str+arr[i]" : "+arr[i]
               
                  axios.post('http://localhost:5000/api/newReq', {
                       
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
               
               
              // alert(str);
          }
     
    
  
    

        render(){
           
            return (
                <div>
                     
       <form action="https://google.co.in" method = "POST" onSubmit={this.handleSubmit}>
          <div class="form-row justify-content-md-center">
                
            <div class="form-group col-md-2">
              <label for="hiring_manager_id" class="col-form-label">Hiring Manager Id</label>
              <Textboxwithlabel fieldname= "1"  whenupdate={this.updateFormValues} classname="form-control input-sm" idname="hiring_manager_id" placeholdername="ID"/>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
            <div class="form-group col-md-2">
              <label for="job_title" class="col-form-label">Job Title</label>
              <Textboxwithlabel fieldname= "2"  whenupdate={this.updateFormValues} class="form-control" idname="job_title" placeholdername="Job Title"/>
            </div>
                
              <div class="form-group col-md-1"></div>  
                
                <div class="form-group col-md-2">
              <label for="LOB" class="col-form-label">Line Of Business</label>
              <Textboxwithlabel fieldname= "3"  whenupdate={this.updateFormValues} class="form-control" idname="LOB" placeholdername="LOB"/>
            </div>
                 <div class="form-group col-md-1"></div>
                
                
                <div class="form-group col-md-2">
              <label for="employment_type" class="col-form-label">Employment Type</label>
              <Textboxwithlabel fieldname= "4"  whenupdate={this.updateFormValues} class="form-control" idname="employment_type" placeholdername="Employment type"/>
            </div>
                  
            </div>
                
                // 2nd row
             <div class="form-row justify-content-md-center">
                
            <div class="form-group col-md-2">
              <label for="duration" class="col-form-label">Duration</label>
              <Textboxwithlabel fieldname= "5"  whenupdate={this.updateFormValues} class="form-control" idname="duration" placeholdername="Duration"/>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
            <div class="form-group col-md-2">
              <label for="instance_no" class="col-form-label">Instance Number</label>
              <Textboxwithlabel fieldname= "6"  whenupdate={this.updateFormValues} class="form-control" idname="instance_no" placeholdername="Instance No"/>
            </div>
                
              <div class="form-group col-md-1"></div>  
                
                <div class="form-group col-md-2">
              <label for="request_type" class="col-form-label">Request Type</label>
              <Textboxwithlabel fieldname= "7"  whenupdate={this.updateFormValues} class="form-control" idname="request_type" placeholdername="Request Type"/>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
                
                <div class="form-group col-md-2">
              <label for="project_rate" class="col-form-label">Project Rate</label>
              <Textboxwithlabel fieldname= "8"  whenupdate={this.updateFormValues} class="form-control" idname="project_rate" placeholdername="project_rate"/>
            </div>
                  
            </div>
                
                // 3rd row
                
                 <div class="form-row justify-content-md-center">
                
            <div class="form-group col-md-2">
              <label for="resource" class="col-form-label">Resource</label>
              <Textboxwithlabel fieldname= "9"  whenupdate={this.updateFormValues} class="form-control" idname="resource" placeholdername="Resource"/>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
            <div class="form-group col-md-2">
              <label for="proposed_rate" class="col-form-label">Proposed Rate</label>
              <Textboxwithlabel fieldname= "10"  whenupdate={this.updateFormValues} class="form-control" idname="proposed_rate" placeholdername="Proposed Rate"/>
            </div>
                
              <div class="form-group col-md-1"></div>  
                
                <div class="form-group col-md-2">
              <label for="laptop" class="col-form-label">Laptop</label>
              <Textboxwithlabel fieldname= "11"  whenupdate={this.updateFormValues} class="form-control" idname="laptop" placeholdername="Request Type"/>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
                
                <div class="form-group col-md-2">
              <label for="project_rate" class="col-form-label">Project Rate</label>
              <Textboxwithlabel fieldname= "12"  whenupdate={this.updateFormValues} class="form-control" idname="project_rate" placeholdername="Project Rate"/>
            </div>
                  
            </div>
                
                //4th row
                
                
                 <div class="form-row justify-content-md-center">
                
            <div class="form-group col-md-2">
              <label for="perm_savings" class="col-form-label">Permanent Savings</label>
              <Textboxwithlabel fieldname= "13"  whenupdate={this.updateFormValues} class="form-control" idname="perm_savings" placeholdername="Perm Savings"/>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
            <div class="form-group col-md-2">
              <label for="cphp" class="col-form-label">CP/ HP/ SoW</label>
              <Textboxwithlabel fieldname= "14"  whenupdate={this.updateFormValues}  class="form-control" idname="cphp" placeholdername="CP / HP/ SoW"/>
            </div>
                
              <div class="form-group col-md-1"></div>  
                
                <div class="form-group col-md-2">
              <label for="pdfile" class="col-form-label">PD File Name</label>
              <Textboxwithlabel fieldname= "15"  whenupdate={this.updateFormValues} class="form-control" idname="pdfile" placeholdername="PD File Name"/>
            </div>
                
                 <div class="form-group col-md-1"></div>
                
                
                <div class="form-group col-md-2">
              <label for="project_rate" class="col-form-label">Project Rate</label>
              <Textboxwithlabel fieldname= "16"  whenupdate={this.updateFormValues} class="form-control" idname="project_rate" placeholdername="Project Rate"/>
            </div>
                  
            </div>
              
                 <div class="form-row justify-content-md-center">
                
            <div class="form-group col-md-9">
              <label for="comments" class="col-form-label">Comments</label>
                <textarea class="form-control" rows="3"></textarea>
            </div>
                </div>
       
                 <button type="submit" name="Submit"></button>
              
        </form>
                </div>
            );
        }
    }
export default App;