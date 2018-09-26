import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class TableRow2 extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.id}
          </td>
          <td>
            {this.props.name}
          </td>
          <td>
            {this.props.price}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
            {/* <Link to={"edit/"+this.props.id} className="btn btn-primary">Edit</Link> */}
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow2;