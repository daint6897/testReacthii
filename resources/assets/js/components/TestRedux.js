import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestRedux extends Component {
    render() {
        return (
            <div>
                {this.props.duLieu}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        duLieu: state.num
    }
}
export default connect(mapStateToProps)(TestRedux);