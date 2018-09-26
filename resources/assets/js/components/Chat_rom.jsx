import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import io from 'socket.io-client';
const socketUrl ="http://localhost:8002";

class Chat_rom extends Component {
    constructor(props) {
        super(props);
        this.state = { mess: null, allMess: null, messTemp:null,socket:null }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
   initSocket(){
        const socket = io(socketUrl);
        //lang nghe event private-chat:message
        // socket.on('private-chat:message',res => this.setState({messTemp: res.message.message}));

        socket.on('private-chat:message', (response) => {this.newMessage(response.message)})

    }
    newMessage(m) {
       // const messages = this.state.allMess;
       // messages.push(m);

       this.state.allMess.push(m)
        this.setState(
          this.state
        )
        this.state
       console.log(m);
    }

    handleChange(event) {
        this.setState({
            mess: event.target.value,
        })
    }
    componentDidMount() {
        
    }

    componentWillMount() {
        // console.log(window.location)
        const url = window.location.pathname;
        const temp=url.split("/");
        console.log(temp[2]);
        axios.get('/messages/'+temp[2])
            .then(response => {
                this.setState({ allMess: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
            this.initSocket();
    }
    handleSubmit(event) {
        event.preventDefault(this.state.mess);
        // this.sendnewMessage(this.state.mess);
        const url = window.location.pathname;
        const temp=url.split("/");
        console.log(temp[2]);
        axios.post('/messages', { message: this.state.mess,user_id_receive:temp[2]})
            .then(response => {
                console.log(response.status);
            })
            .catch(error => {
                this.errors = []
                if (error.response.data.errors.name) {
                    console.log(error.response.data.errors.name)
                }
                if (error.response.data.errors.price) {
                    this.errors.push(error.response.data.errors.price)
                }
            })
            this.setState({mess:""})
    }
    contentMess(mess) {
        if (mess instanceof Array) {
        return mess.map(function(value){
            return (
                <div>
                    <div className="alert alert-success">
                        {value.message}
                    </div>
                </div>
            );
        });
        }
    }
    contentMessTemp(mess){
        return( <div>
                    <div className="alert alert-secondary">
                        {mess}
                    </div>
                </div>);
    }
    sendnewMessage(m){
        const socket = io(socketUrl);
        socket.emit("newMess",{dataMess:m});
    }
    // componentDidUpdate(mess) {
    //     if (mess instanceof Array) {
    //     return mess.map(function(value){
    //         return (
    //             <div>
    //                 <div className="alert alert-success">
    //                     {value.message}
    //                 </div>
    //             </div>
    //         );
    //     });
    //     }
    // }
    render() {
        // {this.addNewMess()}
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Chat Box</div>
                                <div className="panel-body" style={{ height: 350, overflowY: 'auto' }} id="content">
                                </div>
                                 {this.contentMess(this.state.allMess)}
                                {this.contentMess(this.state.messTemp)}
                                <div className="panel-footer">
                                    <form onSubmit={(event) => this.handleSubmit(event)}>
                                        <div className="input-group">
                                            <input onChange={(event) => this.handleChange(event)} className="form-control" id="input" placeholder="Enter your message..." type="text" value={this.state.mess}/>
                                            <span className="input-group-btn">
                                                <input value="Send" type="submit" />
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat_rom;