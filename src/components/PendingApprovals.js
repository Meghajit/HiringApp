import React from "react"
import { Navbar,Table,Nav,NavbarItems, NavItem,NavbarHeader,NavDropdown, MenuItem } from 'react-bootstrap';
import axios from 'axios';

class PendingApprovals extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      pa: []
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
          const pa = { ...self.state.pa }
          self.setState({ pa: response.data.info });
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
            <th>Hiring Manager</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.pa.map((val) => {
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
  return (
    <tr><td >{srCode}</td><td>{arr[1]}</td><td>{arr[2]}</td><td>{arr[3]}</td></tr>
  )
}

export default PendingApprovals;