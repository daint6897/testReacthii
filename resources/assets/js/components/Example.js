import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 69,
            trangThai:0
        }
    }

    renderForm(){
        return(
            <div className="row">       
                <div className="form-group">
                <input id="my-input" className="form-control" type="text" />
                <div className="btn btn-block btn-danger" onClick={() => this.saveClick()} name="ten">Save</div>
                </div>
      </div>
        )
        
    }
    renderButton(){
        return(
        <div className="row">       
        <div className="btn-group">
            <button className="btn btn-info" onClick={() => this.editClick()} >Edit</button>
            <div className="btn btn-default" >Remove</div>
        </div>
    </div>
        )
    }
    editClick(){
        this.setState(prevState => ({
            trangThai: 1
          }));
    }
    saveClick(){
        this.setState({trangThai:0});
    }
    displayCheck(){
        console.log(this.state.trangThai);
        if(this.state.trangThai ===0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }
    
    

    render() {
        return (
            <div className="container">
            <div><h1>{this.props.name}</h1></div>
                <div>{this.displayCheck()}</div>
            </div> 
                 
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example /> , document.getElementById('example'));
}

export default Example;


// import React, { Component } from 'react';

// export default class Example extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-8 col-md-offset-2">
//                         <div className="panel panel-default">
//                             <div className="panel-heading">Example Component</div>

//                             <div className="panel-body">
//                                 I am an example component!
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }