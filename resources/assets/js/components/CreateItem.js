import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import DisplayItemS from './DisplayItemS';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = { productName: '', productPrice: '' };

    // this.handleChange1 = this.handleChange1.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(event) {

    this.setState({
      productName: event.target.value
    })
  }
  handleChange2(event) {
    console.log(event.target.value);
    this.setState({
      productPrice: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const products = {
      name: this.state.productName,
      price: this.state.productPrice
    }
    console.log(this.state.productName);
    let uri = '/items';

    axios.post('/items',products)
      .then(response => {
        browserHistory.push('/display-item');
      })
      .catch(error => {
        this.errors = []
        if (error.response.data.errors.name) {
          this.errors.push(error.response.data.errors.name)
        }
        if (error.response.data.errors.price) {
          this.errors.push(error.response.data.errors.price)
        }
      })

      // var loadLai = new DisplayItemS();
      // loadLai.componentWillMount();
      // this.DisplayItemS.componentWillMount();

  }

  render() {
    return (
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
    )
  }
}
export default CreateItem;