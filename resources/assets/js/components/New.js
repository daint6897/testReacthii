import React, { Component } from 'react';
import { connect } from 'react-redux';

class New extends Component {
    render() {
        return (
            <div>
                <h2>day la commpoer NEW</h2>
                <button>Click di </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(New)