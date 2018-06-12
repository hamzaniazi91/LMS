/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Index from '../../ui/components/index';
import Home from '../../ui/components/home';
import SignIn from '../../ui/components/sign_in';
import SignUp from '../../ui/components/sign_up';
import Dashboard from '../../ui/components/dashboard/dashboard';
import Statistics from '../../ui/components/dashboard/views/statistics/statistics';
import Trainings1 from '../../ui/components/dashboard/views/Trainings/Trainings1';
import clientDashboard from '../../ui/components/clientDashboard/clientDash';

import Home1 from '../../ui/components/dashboard/views/Home/Home1';
import TrainingAnalysis from '../../ui/components/dashboard/views/Home/TrainingAnalysis';
import clientHome1 from '../../ui/components/clientDashboard/clientHome/clientHome1';
import trainingDetails from '../../ui/components/clientDashboard/clientHome/trainingDetails';
import UserList from '../../ui/components/dashboard/views/UserList/UserList1';

import { NotFound } from '../../ui/pages/not_found/not_found';

export const requireAuth = (nextState, replace) => {
  // No user is authenticated redirect ro index

  console.log(nextState)
  console.log(Meteor.userId())
  console.log(Meteor.loggingIn())
  console.log(nextState.location.pathname.indexOf("dashboard"));

  let  nextState2 = nextState.location.pathname.indexOf("dashboard");

  if (Meteor.userId() === null) {
    replace({
      pathname: '/',
    });
  }


  else if (   Meteor.userId() !== "xQqatjYXNmz4TfYxC" && nextState2 > 0){
    console.log("Not Admin")
    replace({
      pathname: '/client-dash',
    });
  }


};




export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute name="home" component={Home} />
      <Route path="sign-in" name="signIn" component={SignIn} />
      <Route path="sign-up" name="signUp" component={SignUp} />
      <Route path="client-dash" name="clientDashboard" component={clientDashboard} onEnter={requireAuth}>

      <IndexRoute component={clientHome1} />
        <Route path="/client-dash/:name" component={trainingDetails}/>
      </Route>


      <Route path="dashboard" name="dashboard" component={Dashboard} onEnter={requireAuth}>
        <IndexRoute component={Home1} />
        <Route path="trainings" name="trainings" component={Trainings1} />
        <Route path="statistics" name="statistics" component={Statistics} />
         <Route path="Home1" name="Home1" component={Home1} />
         <Route path="UserList" name="UserList" component={UserList} />
         <Route path="trainingAnalysis" name="UserList" component={TrainingAnalysis} />
      </Route>

    </Route>
    <Route path="*" name="not-found" component={NotFound} />
  </Router>
);
