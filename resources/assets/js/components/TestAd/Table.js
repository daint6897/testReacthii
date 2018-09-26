import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table className="table table-{1:striped|sm|bordered|hover|inverse} table-inverse table-responsive">
            <thead className="thead-inverse|thead-default">
              <tr>
                <th>STT</th>
                <th>Ten</th>
                <th>Dien thoai</th>
                <th>Quyen</th>
                <th>Hanh dong</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ahihi</td>
                <td>123123123</td>
                <td>ADMIN</td>
                <td><a name id className="btn btn-primary|secondary|success|danger|warning|info|light|dark|link" href="#" role="button">Sua</a>
                  <a name id className="btn btn-primary|secondary|success|danger|warning|info|light|dark|link" href="#" role="button">xoa</a>
                </td>
              </tr>
              <tr>
                <td scope="row" />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        );
    }
}

export default Table;