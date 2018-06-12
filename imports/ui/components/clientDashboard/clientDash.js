/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SideBar2 from './clientSidebar/SideBar2';
import AppHeader from '../app/app_header';
import AppFooter from '../app/app_footer';
import StatisticView from '../dashboard/views/statistics/statistics';
import TrainingsView from '../dashboard/views/Trainings/Trainings1';
import HomeView from '../dashboard/views/Home/Home1';


 

class clientDashboard extends Component {
  getContentView() {
    return this.props.children ;
  }

  render() {
    const { currentUser } = this.props;

    const contentMinHeight = {
      minHeight: `${window.innerHeight - 101}px`,
    };

    return (
      <div className="wrapper">
        <AppHeader user={currentUser}  userPanelName="hamza"/>
        <SideBar2 user={this.props.currentUser}  />
        
        <div className="content-wrapper" style={contentMinHeight} >
            {this.getContentView()}
        </div>

        <AppFooter />
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

clientDashboard.propTypes = {
  children: PropTypes.object,
  currentUser: PropTypes.object,
  //users: PropTypes.arrayOf(PropTypes.object),
  userPanelName:PropTypes.string
};

export default createContainer(() => {
  /**
   * Add subscription here
   */
 // Meteor.subscribe('users');

  return {
    currentUser: Meteor.user(),
    //users: Meteor.users.find().fetch(),
    userPanelName:"LMS",

  };
}, clientDashboard);
