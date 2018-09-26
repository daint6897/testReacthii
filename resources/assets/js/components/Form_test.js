import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
class Form_test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,

        }
    }

    submitFrom(event) {
        event.preventDefault();
        this.setState({ isRedirect: true });
    }
    isChange(event) {
        const ten = event.target.name;
        const giaTri = event.target.value;
        this.setState({ [ten]: giaTri });
        // console.log(ten);
        // console.log(giaTri);
    }
    isFileChange(event){
        const fileAnh = event.target.files;
        console.log(fileAnh);
    }
    render() {
        if (this.state.isRedirect) {
            console.log(this.state.ten);
            console.log(this.state.ngay);
            return <Redirect to="/" />;
        }
        return (
            <div className="row">
                <div className="form-group">
                    <label htmlFor>ten</label>
                    <form action>
                        <select className="form-control form-control-lg" name="ngay" onChange={(event) => this.isChange(event)}>
                            <option value="thu 3">thu 3</option>
                            <option value="thu 4">thu 4</option>
                            <option value="thu 5">thu 5</option>
                            <option value="thu 6">thu 6</option>
                        </select>
                        <input onChange={(event) => this.isChange(event)} className="form-control" name="ten" placeholder type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" />
                        <label>file</label>
                        <input onChange={(event) => this.isFileChange(event)} className="form-control-file" name="fileAnh" id placeholder aria-describedby="fileHelpId" type="file" />
                        <input defaultValue="Send" type="submit" onClick={(event) => this.submitFrom(event)} />
                    </form>
                </div>
            </div>

        );
    }
}

export default Form_test;