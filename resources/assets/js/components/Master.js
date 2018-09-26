import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateItem from './CreateItem';
import DisplayItem from './DisplayItem';
import DisplayItemS from './DisplayItemS';
import EditItem from './EditItem';

class Master extends Component {
  // listItem(){
  //  return <DisplayItem />
  // }
  render() {
    return (
      <div >
       <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="panel panel-primary">
                            <div className="panel-heading">Chat Box</div>
                            <div className="panel-body" style={{ height: 350, overflowY: 'auto' }} id="content">
                            </div>
                            <div className="panel-footer">
                                <div className="input-group">
                                    <input className="form-control" id="input" placeholder="Enter your message..." type="text" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button" id="send">Send</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <DisplayItemS />
        
            <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/test_curd">Home</Link>
                  </li>
                  <li>
                    <Link to="/test_curd/create-item">Create item</Link>
                  </li>
                  <li>
                    <Link to="/display-item">List Item</Link>
                  </li>
                  
                </ul>

                <hr />

                <Route exact path="/" component={Master} />
                <Route exact path="/test_curd/create-item" component={CreateItem} />
                <Route  path="/display-item" component={DisplayItem} />
                <Route exact path="/test_curd/edit/:id" component={EditItem} />
                {/* <Route path="/topics" component={Topics} /> */}
              </div>
            </Router>

          </div>
       
    )
  }
}
export default Master;