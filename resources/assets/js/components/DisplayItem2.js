import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import TableRow2 from './TableRow2';
import { Link } from 'react-router-dom';

const getProductData = () =>axios.get('http://localhost:8000/items').then(response => {
  return response.data
})

class DisplayItem2 extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', items: '' };
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
  render() {
   console.log(this.state.items);
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
            {this.printData()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default DisplayItem2;