import React from "react"
import { Navbar,Table,Nav,NavbarItems,hero, NavItem,NavbarHeader,NavDropdown,Button, MenuItem } from 'react-bootstrap';
import axios from 'axios';

class PendingRequest extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      pr: []
    };
  }

  componentDidMount() {
    const self = this;
    axios.get('http://localhost:5000/api/pending', {
      params: {
        userID: 'b64bfe4d-9886-4282-9eea-dc2f2ad5d9b5'
      }
    }).then(function (response) {
        if (response.data.responseCode == "1") {
          const pr = { ...self.state.pr }
          self.setState({ pr: response.data.info });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var srCode = 0;
    return (
      <Table striped bordered responsive condensed hover>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Request Id</th>
            <th>Role</th>
            <th>1-Up Manager Approval</th>  
            <th>Aruna Approval</th>
            <th>Peter Approval</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.pr.map((val) => {
              let arr = Object.keys(val).map(childVal => val[childVal]);
              return <RenderTable val={arr} key={srCode++} srCode={srCode}/>
            })
          }
        
        </tbody>
      </Table>
    );
  }
}

const RenderTable = (props)=>{
  const {val : arr, srCode} = props
  var oneUpButton, arunaButton, peterButton;

  
    if(arr[3]==1) // Pending One up
    oneUpButton=  <Button bsStyle="success"  >Approved</Button>
  else
    oneUpButton=  <Button bsStyle="warning"  >Pending</Button>

    if(arr[0]==1) // Pending Aruna
    arunaButton=  <Button bsStyle="success"  >Approved</Button>
  else
    arunaButton=  <Button bsStyle="warning"  >Pending</Button>

    if(arr[4]==1) // Pending Peter
    peterButton=  <Button bsStyle="success"  >Approved</Button>
  else
    peterButton=  <Button bsStyle="warning"  >Pending</Button>


  
 
    
  return (
    <tr><td >{srCode}</td><td>{arr[5]}</td><td>{arr[2]}</td><td >{oneUpButton}</td><td >{ arunaButton}</td><td>{peterButton}</td></tr>
  )
}

export default PendingRequest;