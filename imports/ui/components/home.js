import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="lockscreen-wrapper">
    <div className="lockscreen-logo">
      <a href="../../index2.html"><b>LMS</b>ystem</a>
    </div>

    <div className="lockscreen-name text-center"><b>Learning Management System</b></div>

    <div className="text-center">
      <Link to={'/sign-in'}>Sign in </Link>or
      <Link to={'/sign-up'}> Register</Link>
    </div>
    <div className="lockscreen-footer text-center">
  
      <b><a href="" className="text-black"></a></b>
      <br />
      
    </div>
  </div>
);

export default Home;
