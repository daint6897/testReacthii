import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import TableRow2 from './TableRow2';
import { Link } from 'react-router-dom';

const getProductData = () =>axios.get('http://localhost:8000/items').then(response => {
  return response.data
})

class DisplayItemS extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', items: '' ,productName: '', productPrice: ''};
  }
  componentWillMount() {
    // axios.get('http://localhost:8000/items')
    //   .then(response => {
    //     this.setState({ items: response.data });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    getProductData().then(res=>{
      this.setState({
        items:res
      });
    })
  }
  printData(){
    if(this.state.items != null){
    //  return this.state.items.map((value,key)=>{
    //     // return (<TableRow2 id={value.id} price={value.price} name={value.name} />)
    //     {value.name}
    //   })
    if (this.state.items instanceof Array) {
      return this.state.items.map(function (value,key) {
        return (<TableRow2 id={value.id} price={value.price} name={value.name} key={key}/>)
        //  return  <TableRow2 obj="ahihi132" />;
      })
      // return this.state.items.map((object) => {
      //   <TableRow obj={object}/> ;
      //   console.log(object.name)});

    }
    
    }
    
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
      id:12,
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

      //load lai API
      this.componentWillMount();

  }
  render() {
   console.log(this.state.items);
    return (
      <div>
        <h1>ItemsSS</h1> 
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
            {this.printData()}
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
export default DisplayItemS;