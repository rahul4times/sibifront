import React, { Component } from 'react';
import { Button, Form, Input, Row, Col } from 'reactstrap';
import { updateFilter } from './../actions/filtered';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  state = {
    givenName: '',
    surName: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateFilter(this.state);
  }

  render(){
    return(
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs="5" sm="4">
              <Input type="text" placeholder="First name"
                value={this.state.givenName}
                onChange={(e)=>this.setState({givenName: e.target.value})}
              />
            </Col>
            <Col xs="5" sm="4">
              <Input type="text" placeholder="Last name"
                value={this.state.surName}
                onChange={(e)=>this.setState({surName: e.target.value})}
              />
            </Col>
            <Col xs="2" sm="4"><Button>Search</Button></Col>
          </Row>
        </Form>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateFilter: updateFilter}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
