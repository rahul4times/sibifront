import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class SingleUserView extends Component{
  render(){
    const Gender = this.props.user[0] ? this.props.user[0].Gender : null;
    const NameSet = this.props.user[0] ? this.props.user[0].NameSet : null;
    const Title = this.props.user[0] ? this.props.user[0].Title : null;
    const GivenName = this.props.user[0] ? this.props.user[0].GivenName : null;
    const MiddleInitial = this.props.user[0] ? this.props.user[0].MiddleInitial : null;
    const Surname = this.props.user[0] ? this.props.user[0].Surname : null;
    const StreetAddress = this.props.user[0] ? this.props.user[0].StreetAddress : null;
    const City = this.props.user[0] ? this.props.user[0].City : null;
    const State = this.props.user[0] ? this.props.user[0].State : null;
    const StateFull = this.props.user[0] ? this.props.user[0].StateFull : null;
    const ZipCode = this.props.user[0] ? this.props.user[0].ZipCode : null;
    const Country = this.props.user[0] ? this.props.user[0].Country : null;
    const CountryFull = this.props.user[0] ? this.props.user[0].CountryFull : null;
    const EmailAddress = this.props.user[0] ? this.props.user[0].EmailAddress : null;
    const Username = this.props.user[0] ? this.props.user[0].Username : null;
    const BrowserUserAgent = this.props.user[0] ? this.props.user[0].BrowserUserAgent : null;
    const TelephoneNumber = this.props.user[0] ? this.props.user[0].TelephoneNumber : null;
    const TelephoneCountryCode = this.props.user[0] ? this.props.user[0].TelephoneCountryCode : null;
    const MothersMaiden = this.props.user[0] ? this.props.user[0].MothersMaiden : null;
    const Birthday = this.props.user[0] ? this.props.user[0].Birthday : null;
    const age = this.props.user[0] ? this.props.user[0].age : null;
    const CCType = this.props.user[0] ? this.props.user[0].CCType : null;
    const CCNumber = this.props.user[0] ? this.props.user[0].CCNumber : null;
    const CVV2 = this.props.user[0] ? this.props.user[0].CVV2 : null;
    const CCExpires = this.props.user[0] ? this.props.user[0].CCExpires : null;
    const NationalID = this.props.user[0] ? this.props.user[0].NationalID : null;
    const UPS = this.props.user[0] ? this.props.user[0].UPS : null;
    const WesternUnionMTCN = this.props.user[0] ? this.props.user[0].WesternUnionMTCN : null;
    const MoneyGramMTCN = this.props.user[0] ? this.props.user[0].MoneyGramMTCN : null;
    const Color = this.props.user[0] ? this.props.user[0].Color : null;
    const Occupation = this.props.user[0] ? this.props.user[0].Occupation : null;
    const Company = this.props.user[0] ? this.props.user[0].Company : null;
    const Vehicle = this.props.user[0] ? this.props.user[0].Vehicle : null;
    const Domain = this.props.user[0] ? this.props.user[0].Domain : null;
    const GUID = this.props.user[0] ? this.props.user[0].GUID : null;
    const Latitude = this.props.user[0] ? this.props.user[0].Latitude : null;
    const Longitude = this.props.user[0] ? this.props.user[0].Longitude : null;


    return(
      <div className="container">
        <br/>
        <br/>
        <Breadcrumb>
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>{GivenName}'s Information</BreadcrumbItem>
        </Breadcrumb>
        <br/>
        <br/>
        <h3>Full Information</h3>
        <p>Gender: {Gender}</p>
        <p>Nationality: {NameSet}</p>
        <p>Name: {Title} {GivenName} {MiddleInitial} {Surname}</p>
        <p>Address: {StreetAddress} {City}, {State} {StateFull}, {ZipCode} {Country} {CountryFull}</p>
        <p>Email: {EmailAddress}</p>
        <p>Username: {Username}</p>
        <p>Browser User Agent: {BrowserUserAgent}</p>
        <p>Phone: {TelephoneNumber}</p>
        <p>Country Code: {TelephoneCountryCode}</p>
        <p>Mother's Maiden: {MothersMaiden}</p>
        <p>Birthday: {Birthday}</p>
        <p>Age: {age}</p>
        <p>Credit Card Type: {CCType}</p>
        <p>Credit Card No: {CCNumber}</p>
        <p>CSV No: {CVV2}</p>
        <p>Credit Card Expires: {CCExpires}</p>
        <p>National ID: {NationalID}</p>
        <p>UPS: {UPS}</p>
        <p>Western Union: {WesternUnionMTCN}</p>
        <p>Money Gram: {MoneyGramMTCN}</p>
        <p>Color: {Color}</p>
        <p>Occupation: {Occupation}</p>
        <p>Company: {Company}</p>
        <p>Vehicle: {Vehicle}</p>
        <p>Website: {Domain}</p>
        <p>GUID: {GUID}</p>
        <p>Latitude: {Latitude}</p>
        <p>Longitude: {Longitude}</p>

      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    user: state.users.filter(user => user.id == props.match.params.id)
  }
}

export default connect(mapStateToProps, null)(SingleUserView);
