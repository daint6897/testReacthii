import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import TableRow2 from './TableRow2';


class DisplayItem extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', items: '' };
  }
  componentWillMount() {
    axios.get('http://localhost:8000/items')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    if (this.state.items instanceof Array) {
      return this.state.items.map(function (object) {
        console.log(object.name);
        return <TableRow obj={object} />;
        //  return  <TableRow2 obj="ahihi132" />;
      })
      // return this.state.items.map((object) => {
      //   <TableRow obj={object}/> ;
      //   console.log(object.name)});

    }
  }

  render() {
    return (
      <div>
        <h1>Items</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Item Name</td>
              <td>Item Price</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
        <div>
        <h1>Create An Item</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" className="form-control" onChange={(event) => this.handleChange1(event)} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Price:</label>
                <input type="text" className="form-control col-md-6" onChange={(event) => this.handleChange2(event)} />
              </div>
            </div>
          </div><br />
          <div className="form-group">
            <button className="btn btn-primary">Add Item</button>
            {/* <input type="submit" className="form-control col-md-6" value="add item" /> */}
          </div>
        </form>
      </div>
      </div>
    )
  }
}
export default DisplayItem;