require('./bootstrap');
import React ,{ Component }from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import Master from './components/Master';
import Example from './components/Example';
import Test_Router_react from './components/Test_Router_react';
import Search from './components/TestAd/Search';
import Table from './components/TestAd/Table';
import Them from './components/TestAd/Them';
import TestRedux from './components/TestRedux';
import DataUser from './components/TestAd/data.json'
import store1 from './components/Store'
import CreateItem from './components/CreateItem';
import DisplayItemS from './components/DisplayItem';
import Home from './components/Home';
import DisplayItem from './components/DisplayItem';
import Chat_rom from './components/Chat_rom';
// Echo.private('chat')
//         .listen('MessageSent', (e) => {
//             // console.log(e.update);
//             console.log(e);
//         })
render(<Chat_rom />, document.getElementById('chat'));

render(<Master/>,document.getElementById('master_react'));

// render(<Example name="ahihi" />, document.getElementById('example'));
// render(<Test_Router_react />, document.getElementById('Test_Router_react'));
// render(<Search />, document.getElementById('Search'));
// render(<Table />, document.getElementById('Table'));
// render(<Them />, document.getElementById('Them'));


export default app;


