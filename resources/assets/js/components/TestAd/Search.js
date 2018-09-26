import React, { Component } from 'react';

class Seach extends Component {
    
    
    render() {
        return (
            <div className="row">
                <div className="form-group">
                <div className="btn" onClick={this.props.checkConnect}>Them moi</div>
                    <label htmlFor>Tiem Kiem</label>
                    <input className="form-control" name="timKiem" id aria-describedby="helpId" placeholder type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" />
                    <input defaultValue="Tim kiem" type="submit" />
                </div>
            </div>
        );
    }
}

export default Seach;