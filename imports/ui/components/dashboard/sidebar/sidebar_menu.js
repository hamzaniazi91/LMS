import React, { PropTypes } from 'react';
import { Link } from 'react-router';




const SideBarMenu = ({ userCount }) => (
  <ul className="sidebar-menu">
    <li className="header">MAIN NAVIGATION</li>
    <li className="active treeview">
      <Link to={'/dashboard/Home1'}>
        <i className="fa fa-dashboard" />
      <span> Home </span>   {/*<i className="fa fa-angle-left pull-right" />*/}
      </Link>

    </li>
  {/*  <li className=" treeview">
      <a href="#">
        <i className="fa fa-dashboard" />
        <span> Trainings </span> <i className="fa fa-angle-left pull-right" />
      </a>
      <ul className="treeview-menu">
        <li className="active">
          <Link to={'/dashboard/statistics'}><i className="fa fa-circle-o" /> Dashboard 1</Link></li>
        <li><a href="#"><i className="fa fa-circle-o" /> Dashboard 2</a></li>
      </ul>
    </li>*/}
   {/* <li className=" treeview">
      <a href="#">
        <i className="fa fa-dashboard" />
        <span> Trainers </span> <i className="fa fa-angle-left pull-right" />
      </a>
      <ul className="treeview-menu">
        <li className="active">
          <Link to={'/dashboard/trainings'}><i className="fa fa-circle-o" /> Trainings 1</Link></li>
        <li><a href="#"><i className="fa fa-circle-o" /> Dashboard 2</a></li>
      </ul>
    </li>*/}


      <li>
      <Link to={'/dashboard/trainingAnalysis'} >
        <i className="fa fa-users" /> <span> Training Analysis </span>
        <small className="label pull-right bg-blue" >  </small>
      </Link>
    </li>

     {/*  <li>
      <Link to={'/dashboard/activeUlist'} >
        <i className="fa fa-users" /> <span> Active Users </span>
        <small className="label pull-right bg-blue" > {userCount} </small>
      </Link>
    </li>*/}


    <li>
      <Link to={'/dashboard/userlist'} >
        <i className="fa fa-users" /> <span> Users </span>
        <small className="label pull-right bg-blue" > {userCount} </small>
      </Link>
    </li>
  </ul>
);

SideBarMenu.propTypes = {
  userCount: PropTypes.number,
};

export default SideBarMenu;
