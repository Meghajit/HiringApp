import React from "react"
import { Navbar,Table,Nav,NavbarItems, NavItem,NavbarHeader,NavDropdown, MenuItem } from 'react-bootstrap';


class PendingApprovals extends React.Component {
    constructor(props) {
   super(props);
   
  
 }

 componentDidMount(){

    const self = this;
        axios.get('http://localhost:5000/api/pending', {
            params: {
              userID:'b64bfe4d-9886-4282-9eea-dc2f2ad5d9b5'
            }
          })
          .then(function (response) {

            console.log(response.data.info);
            
            if(response.data.responseCode=="1")
            {
                const pa = {...self.state.pa}
                self.setState({pa: response.data.info});


            }

            
          })
          .catch(function (error) {
            console.log(error);
          });


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