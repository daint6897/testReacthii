import React, { Component } from 'react';

class Them extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: false
            
        }
    }
    hienThiNut() {
        if (this.state.trangThai === false) {
            return <button onClick={()=>this.thayDoiTrangThai()} type="button" className="list-group-item list-group-item-action ">Hien form</button>;
        } else {
            return <button onClick={()=>this.thayDoiTrangThai()} type="button" className="list-group-item list-group-item-action">Dong</button>;
        }
    }    
    hienThiForm(){
        if (this.state.trangThai === true) {
            return (
                <div className="form-group">

                    <label htmlFor>Ten</label>
                    <input name="ten" id className="form-control" placeholder aria-describedby="helpId" type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" />
                    <label htmlFor>So dien thoai</label>
                    <input name="soDienThoai" id className="form-control" placeholder aria-describedby="helpId" type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" />
                    <label htmlFor>Phan quyen</label>
                    <input name="phanQuyen" id className="form-control" placeholder aria-describedby="helpId" type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" />
                    <input name id className="btn btn-primary|secondary|success|danger|warning|info|light|dark|link" defaultValue="Them" type="submit" />
                </div>
            );
        }
    }
    thayDoiTrangThai(){
        this.setState({
            trangThai:!this.state.trangThai
        });
    }
    render() {
        return (
            <div>
                {this.hienThiNut()}
                {this.hienThiForm()}
            </div>
        );
    }
}

export default Them;