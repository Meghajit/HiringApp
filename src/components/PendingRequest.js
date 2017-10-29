import React from "react"
import { Navbar,Table,Nav,NavbarItems,hero,wwewe, NavItem,NavbarHeader,NavDropdown,Button, MenuItem } from 'react-bootstrap';
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
        debugger;
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
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Request Id</th>
            <th>Role</th>
            <th>1-Up Manager Approval</th>
            <th>Peter Corrigan Approval</th>
            <th>Craig Marrow Approval</th>
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
  var buttonTodisplay;

  for(var i=3;i<=5;i++)
  {
    if(arr[i]==0) // Pending
    buttonTodisplay=  <Button bsStyle="success" bsSize="large" block>Approved</Button>
  else
    buttonTodisplay=  <Button bsStyle="danger" bsSize="large" block>Pending</Button>
  }
 
    
  return (
    <tr><td >Hello</td><td>Hello</td><td>Hello</td><td >Hello</td><td >Hello</td><td>{buttonTodisplay}</td></tr>
  )
}

export default PendingRequest;