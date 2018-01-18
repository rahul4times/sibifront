import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from './actions/users';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import TopNavBar from './components/top_nav_bar';
import UsersList from './components/users_list';
import SingleUserView from './components/single_user_view';

class App extends Component {

  componentDidMount(){
    this.props.getUsers();
  }

  render() {
    return (
      <Router>
      <div className="App">

          <TopNavBar />
          <Route exact path="/" component={UsersList} />
          <Route exact path="/:id" component={SingleUserView} />

      </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getUsers: bindActionCreators(getUsers, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
