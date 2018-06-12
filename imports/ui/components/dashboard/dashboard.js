/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SideBar from './sidebar/sidebar';
import AppHeader from '../app/app_header';
import AppFooter from '../app/app_footer';
import StatisticView from './views/statistics/statistics';
import TrainingsView from './views/Trainings/Trainings1';
import HomeView from './views/Home/Home1';
import Loading from '../../layouts/loading/loading';


class Dashboard extends Component {
  getContentView() {

     const user = this.props.users;    
    let childView = this.props.children;

    // undefined - there is a cached user but not yet verified
    // null - no cached user and not authenticated
    
    if (user === undefined) {
      childView = <Loading />;
    }

    return childView;

  }





  render() {
    const { currentUser } = this.props;

    const contentMinHeight = {
      minHeight: `${window.innerHeight - 101}px`,
    };


if (this.props.loading) {
            return <Loading />
        } 
        else 
        {
    return (
      <div className="wrapper">
        <AppHeader user={currentUser} />
        <SideBar user={this.props.currentUser} users={this.props.users} />
        
        <div className="content-wrapper" style={contentMinHeight} >
            {this.getContentView()}
        </div>

        <AppFooter />
        <div className="control-sidebar-bg"></div>
      </div>
    );
    }
  }
}

Dashboard.propTypes = {
  children: PropTypes.object,
  currentUser: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default createContainer(() => {
  /**
   * Add subscription here
   */
 const sub1 = Meteor.subscribe('users');

console.log(sub1)

let loading = !sub1.ready()

  return {
    loading : loading,
    currentUser: Meteor.user(),
    users: Meteor.users.find().fetch(),
  };
}, Dashboard);
