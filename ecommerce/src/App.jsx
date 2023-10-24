import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./App.css"
import Navbar from './Components/Navbar';
import TopNav from './Components/TopNav';
import Dashboard from './Components/Dashboard';

const App = () => {
  return <Fragment>
    <Navbar />
    <TopNav />
    <Dashboard/>




  </Fragment>
}

export default App