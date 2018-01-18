import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
class User extends Component{
  render(){
    const user = this.props.user ? this.props.user : "Loading...!";
    return(
      <div className="container">
        <ListGroupItem >
            <Link to={`/${user.id}`}>
            {user.Title} {user.GivenName} {user.MiddleInitial} {user.Surname} , {user.City} {user.State} {user.ZipCode}
            </Link>
        </ListGroupItem>
      </div>
    );
  }
}
export default User;
