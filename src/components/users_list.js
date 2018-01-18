import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import User from './user';
import SearchBar from './search_bar';


class UsersList extends Component{

  render(){
    let usersList = this.props.users ? this.props.users.map(user => {
      return (
        <User key={user.id} user={user}/>
      )
    }) : "Loading...!";

    return(
      <div className="container">
      <br/>
      <br/>
      <h3 className="text-center">Users</h3>
      <br/>
      <br/>
      <SearchBar />
      <br/>
      <br/>
      <ListGroup>
        {usersList}
      </ListGroup>
      </div>
    );
  }
}
function mapStateToProps(state, props){
  var filtered = state.users

  if(state.filtered.givenName){
    filtered = filtered.filter(user => user.GivenName == state.filtered.givenName)
  }
  if(state.filtered.surName){
    filtered = filtered.filter(user => user.Surname == state.filtered.surName)
  }

  return {
    filtered: state.filtered,
    users: filtered
  }
}

export default connect(mapStateToProps, null)(UsersList);
