import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import LandingPageCard from './LandingPageCard';
import Textboxwithlabel from "./Textboxwithlabel";
import Textareawithlabel from "./Textareawithlabel";
import { BrowserRouter } from 'react-router-dom'


var arr = [];

class Submitbutton extends Component {
  render() {
    return (
      <div>
        <button bsStyle="success" bsSize="small"> {this.props.fieldname} </button>
      </div>
    );
  }
}




class NewRequest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ht: []
    };
    this.updateFormValues = this.updateFormValues.bind(this);
  }

  updateFormValues(myname, myvalue) {
    console.log("LOL");
    const ht = this.state.ht;
    ht[myname] = myvalue;

    this.setState({ ht });
    arr = ht;


  }



  handleSubmit(e) {
    console.log("HEHEEHE");
    e.preventDefault();
    //var str="{";
    var str = "";
    for (var key in arr)
      str = str + '"' + key + '" : "' + arr[key] + '",';
    str = str.slice(0, -1);
    //  str=str+"}"; 
    console.log(str);

    axios.post('http://localhost:5000/api/newReq', {
      "hiring_manager_id": arr["hiring_manager_id"],
      "job_title": arr["job_title"],
      "lob": arr["lob"],
      "instance_no": arr["instance_no"],
      "employment_type": arr["employment_type"],
      "request_type": arr["request_type"],
      "project_rate": arr["project_rate"],
      "comments": arr["comments"],
      "resource": arr["resource"],
      "proposed_rate": arr["proposed_rate"],
      "laptop": arr["laptop"],
      "duration": arr["duration"],
      "indicative_po_value": arr["indicative_po_value"],
      "perm_savings": arr["perm_savings"],
      "cP_hP_hSoW": arr["cP_hP_hSoW"],
      "pd_file_name": arr["pd_file_name"],
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    // alert(str);
  }





  render() {

    return (


      <div>

        <form action="https://google.co.in" method="POST" onSubmit={this.handleSubmit}>
          <div className="form-row justify-content-md-center">

            <div className="form-group col-md-2">
              <label for="hiring_manager_id" className="col-form-label">Hiring Manager Id</label>
              <Textboxwithlabel fieldname="hiring_manager_id" whenupdate={this.updateFormValues} classname="form-control input-sm" idname="hiring_manager_id" placeholdername="ID" />
            </div>

            <div className="form-group col-md-1"></div>

            <div className="form-group col-md-2">
              <label for="job_title" className="col-form-label">Job Title</label>
              <Textboxwithlabel fieldname="job_title" whenupdate={this.updateFormValues} className="form-control" idname="job_title" placeholdername="Job Title" />
            </div>

            <div className="form-group col-md-1"></div>

            <div className="form-group col-md-2">
              <label for="LOB" className="col-form-label">Line Of Business</label>
              <Textboxwithlabel fieldname="lob" whenupdate={this.updateFormValues} className="form-control" idname="LOB" placeholdername="LOB" />
            </div>
            <div className="form-group col-md-1"></div>


            <div className="form-group col-md-2">
              <label for="employment_type" className="col-form-label">Employment Type</label>
              <Textboxwithlabel fieldname="employment_type" whenupdate={this.updateFormValues} className="form-control" idname="employment_type" placeholdername="Employment type" />
            </div>

          </div>

          // 2nd row
          <div className="form-row justify-content-md-center">

            <div className="form-group col-md-2">
              <label for="duration" className="col-form-label">Duration</label>
              <Textboxwithlabel fieldname="duration" whenupdate={this.updateFormValues} className="form-control" idname="duration" placeholdername="Duration" />
            </div>

            <div className="form-group col-md-1"></div>

            <div className="form-group col-md-2">
              <label for="instance_no" className="col-form-label">Instance Number</label>
              <Textboxwithlabel fieldname="instance_no" whenupdate={this.updateFormValues} className="form-control" idname="instance_no" placeholdername="Instance No" />
            </div>

            <div className="form-group col-md-1"></div>

            <div className="form-group col-md-2">
              <label for="request_type" className="col-form-label">Request Type</label>
              <Textboxwithlabel fieldname="request_type" whenupdate={this.updateFormValues} className="form-control" idname="request_type" placeholdername="Request Type" />
            </div>

            <div className="form-group col-md-1"></div>


            <div className="form-group col-md-2">
              <label for="project_rate" className="col-form-label">Project Rate</label>
              <Textboxwithlabel fieldname="project_rate" whenupdate={this.updateFormValues} className="form-control" idname="project_rate" placeholdername="project_rate" />
            </div>
          </div>
          <div className="form-row justify-content-md-center">
            <div className="form-group col-md-2">
              <label for="resource" className="col-form-label">Resource</label>
              <Textboxwithlabel fieldname="resource" whenupdate={this.updateFormValues} className="form-control" idname="resource" placeholdername="Resource" />
            </div>
            <div className="form-group col-md-1"></div>
            <div className="form-group col-md-2">
              <label for="proposed_rate" className="col-form-label">Proposed Rate</label>
              <Textboxwithlabel fieldname="proposed_rate" whenupdate={this.updateFormValues} className="form-control" idname="proposed_rate" placeholdername="Proposed Rate" />
            </div>
            <div className="form-group col-md-1"></div>
            <div className="form-group col-md-2">
              <label for="laptop" className="col-form-label">Laptop</label>
              <Textboxwithlabel fieldname="laptop" whenupdate={this.updateFormValues} className="form-control" idname="laptop" placeholdername="Request Type" />
            </div>
            <div className="form-group col-md-1"></div>
            <div className="form-group col-md-2">
              <label for="project_rate" className="col-form-label">Project Rate</label>
              <Textboxwithlabel fieldname="project_rate" whenupdate={this.updateFormValues} className="form-control" idname="project_rate" placeholdername="Project Rate" />
            </div>
          </div>
          <div className="form-row justify-content-md-center">
            <div className="form-group col-md-2">
              <label for="perm_savings" className="col-form-label">Permanent Savings</label>
              <Textboxwithlabel fieldname="perm_savings" whenupdate={this.updateFormValues} className="form-control" idname="perm_savings" placeholdername="Perm Savings" />
            </div>
            <div className="form-group col-md-1"></div>
            <div className="form-group col-md-2">
              <label for="cphp" className="col-form-label">CP/ HP/ SoW</label>
              <Textboxwithlabel fieldname="cP_hP_hSoW" whenupdate={this.updateFormValues} className="form-control" idname="cphp" placeholdername="CP / HP/ SoW" />
            </div>
            <div className="form-group col-md-1"></div>
            <div className="form-group col-md-2">
              <label for="pdfile" className="col-form-label">PD File Name</label>
              <Textboxwithlabel fieldname="pd_file_name" whenupdate={this.updateFormValues} className="form-control" idname="pdfile" placeholdername="PD File Name" />
            </div>
            <div className="form-group col-md-1"></div>
            <div className="form-group col-md-2">
              <label for="indicative_po_value" className="col-form-label">Indicative PO Value</label>
              <Textboxwithlabel fieldname="indicative_po_value" whenupdate={this.updateFormValues} className="form-control" idname="indicative_po_value" placeholdername="Indicative PO Value" />
            </div>
          </div>
          <div className="form-row justify-content-md-center ">
            <div className="form-group col-md-6 ">
              <label for="comments" className="col-form-label">Comments</label>
              <Textareawithlabel fieldname="comments" whenupdate={this.updateFormValues} className="form-control" idname="comments" placeholdername="Comments" rows="3" cols="80" />
            </div>
          </div>
          <div className="form-row justify-content-md-center">
            <div className="form-group col-md-3">
              <button type="submit" className="col-md-3 btn btn-info">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default NewRequest;