import React from "react"
import { Navbar,Table,Nav,NavbarItems, NavItem,NavbarHeader,NavDropdown, MenuItem } from 'react-bootstrap';


class PendingApprovals extends React.Component {
    constructor(props) {
   super(props);
  
 }

 render(){
     return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Hiring Manager</th>
          <th>Role</th>
          <th>Work ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>shd</td>
        </tr>
      </tbody>
    </Table>
  );
}
}

export default PendingApprovals;