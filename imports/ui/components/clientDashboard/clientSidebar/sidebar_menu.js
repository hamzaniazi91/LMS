import React, { PropTypes } from 'react';
import { Link } from 'react-router';




const SideBarMenu = ({ userCount }) => (
  <ul className="sidebar-menu">
    <li className="header">MAIN NAVIGATION</li>
    <li className="active treeview">
      <Link to={'/client-dash'}>
        <i className="fa fa-dashboard" />
      <span> Home </span>   {/*<i className="fa fa-angle-left pull-right" />*/}
      </Link>

    </li>

     <li >
      <Link to={'/client-dash'}>
        <i className="fa fa-dashboard" />
      <span> Live Broadcast </span>   {/*<i className="fa fa-angle-left pull-right" />*/}
      </Link>

    </li>
 
  {/*  <li>
      <Link to={'/dashboard/userlist'} >
        <i className="fa fa-users" /> <span> Users </span>
        <small className="label pull-right bg-blue" > {userCount} </small>
      </Link>
    </li>*/}
  </ul>
);

SideBarMenu.propTypes = {
  userCount: PropTypes.number,
};

export default SideBarMenu;
