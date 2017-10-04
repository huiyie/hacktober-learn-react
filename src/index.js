import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import LoginForm from './components/LoginForm';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <div id="routing-tab">
         <div className="route"><Link to="/">Main</Link></div>
         <div className="route"><Link to="/login">Login</Link></div>
      </div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LoginForm} />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
