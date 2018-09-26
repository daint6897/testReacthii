import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Form_test from './Form_test';
class Test_Router_react extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/form">Form</Link>
                                </li>
                            </ul>

                            <hr />

                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/form" component={Form_test} />
                            {/* <Route path="/topics" component={Topics} /> */}
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Test_Router_react;