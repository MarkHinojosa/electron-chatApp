import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Login from './screens/login';
import Chat from './screens/chat';

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chat">Chat</Link></li>
            </ul>
            <Route exact path="/" component={Login} />
            <Route exact path="/chat" component={Chat} />
        </div>
    </Router>
    , document.getElementById('app'));
