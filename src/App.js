import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
class App extends Component {
  render() {
    return (
     
         <Router>
            <React.Fragment>
           
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
         </React.Fragment>
         </Router>
      
     
      
    );
  }
}

export default App;
