/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import CallOutMessage from './warnings/callout_message';



export default class SignIn extends Component {
  constructor(props) {
    super(props);



//   let user = "hamza.niazi"
// let dn ="CN=Hamza Khan Niazi,OU=HO,DC=adtest,DC=com";
// let domain = "MBL"
// let password= "mbl@1234";
// Meteor.loginWithLDAP(user, password, {
//     // The dn value depends on what you want to search/auth against
//     // The structure will depend on how your ldap server
//     // is configured or structured.
//   dn: dn,
// // searchBeforeBind: {'sAMAccountName': user} ,
//     // The search value is optional. Set it if your search does not
//     // work with the bind dn.
//  search: "(&(sAMAccountName=hamza.niazi))"
// }, function(err,result) {
//   if (err){
//     console.log("Error "+err);
// }

// else {
//              // login successful
//              console.log("Success "+result)
//          }
// }
// );

 
    this.state = {
      email: '',
      password: '',
      hasError: false,
      isLoggingIn: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  ldap(email , password){






//  setTimeout(function() {




// //  let user = "muhammad.asadullah"
// // let dn ="OU=HO,DC=adtest,DC=com";
// // let domain = "MBL"
// // let password= "mbl@1234";




// // Meteor.loginWithLDAP(user, password,
// //   { dn: domain + '\\' + user, search: '(sAMAccountName=' + user + ')' } , function(err,result) {
// //   if (err){
// //     console.log("Error1 "+err);
// // }

// // else {
// //              // login successful
// //              console.log("Success1 "+result)
// //          }
// // }
// // );

// // Meteor.loginWithLDAP(user, password, {
// //     // The dn value depends on what you want to search/auth against
// //     // The structure will depend on how your ldap server
// //     // is configured or structured.
// //   dn: dn,
// //  searchBeforeBind: {

// //   'name' : user,
// //   'sAMAccountName': user,

// // } ,
// //     // The search value is optional. Set it if your search does not
// //     // work with the bind dn.
// // search: "(&(sAMAccountName=muhammad.asadullah))"
// // }, function(err,result) {
// //   if (err){
// //     console.log("Error "+err);
// // }

// // else {
// //              // login successful
// //              console.log("Success "+result)
// //          }
// // }
// // );


//   }, 5000);



  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggingIn: true, hasError: false });




//   let user = this.state.email 
// let dn ="CN=" + user + ",OU=HO,DC=adtest,DC=com";
// let domain = "MBL"
// let password= this.state.password
// Meteor.loginWithLDAP(user, password, {
//     // The dn value depends on what you want to search/auth against
//     // The structure will depend on how your ldap server
//     // is configured or structured.
//   dn: dn,
// // searchBeforeBind: {'sAMAccountName': user} ,
//     // The search value is optional. Set it if your search does not
//     // work with the bind dn.
// // search: "(&(sAMAccountName="+ user +"))"
// }, function(err,result) {
//   if (err){
//     console.log("Error "+err);
// }

// else {
//              // login successful
//              console.log("Success "+result)
//          }
// }
// );


    //this.ldap(this.state.email ,  this.state.password )

    Meteor.loginWithPassword({ username: this.state.email }, this.state.password, ( error , res) => {
      this.setState({ isLoggingIn: false });
      
      if (error) {
        this.setState({ hasError: true });
      } else {
        // successful log in
       // console.log(Meteor.user())
       

       if(Meteor.user().username === "0987654") {
        browserHistory.push('/dashboard');
      }

      else{

          browserHistory.push('/client-Dash');
      }

      }
    });
  }

  getLoginResponseMessage() {
    let message = '';
    if (this.state.hasError) {
      message = <CallOutMessage description="Forbidden" />;
    }

    return message;
  }

  displayLoggingIn() {
    let loading = '';
    if (this.state.isLoggingIn) {
      loading = (<div className="login-box-msg">
        <i className="fa fa-cog fa-spin fa-2x fa-fw" />
      </div>);
    }

    return loading;
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
       {/*   <a href="/"><b>LMS</b>ystem</a>*/}

      {/* <a href="/"><img src={IMG} /></a>*/}

      <img alt="User" src="/Logo1.jpg" className="" />


        </div>

        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          {this.displayLoggingIn()}
          {this.getLoginResponseMessage()}

          <form onSubmit={this.onSubmit}>
            <div className="form-group has-feedback">
              <input
                type="text"
                className="form-control"
                placeholder="Employee Id"
                onChange={this.onChangeEmail}
                value={this.state.email}
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>

            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={this.state.password}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

            <div className="row">
              <div className="pull-right col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">
                  Sign In
                </button>
              </div>
            </div>
          </form>
{/*
           <button   className="btn btn-primary btn-block btn-flat">
                  Sign In Ldap
                </button>*/}

        {/*  <a href="#">I forgot my password</a><br />
          <Link to={'/sign-up'}>
            Register
          </Link>*/}

        </div>
      </div>
    );
  }
}
