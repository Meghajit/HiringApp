import ReactDataGrid from 'react-data-grid';
import React from "react"
 
const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }];
const rows = [{ id: 1, title: 'Title 1' }];
const rowGetter = rowNumber => rows[rowNumber];
 

class Samplegrid extends React.Component{


    constructor(props) {
        super(props);
       
      }



render(){
    return(
   <ReactDataGrid
    columns={columns}
    rowGetter={rowGetter}
    rowsCount={rows.length}
    minHeight={500} />
    );
}
}

export default Samplegrid;
    


