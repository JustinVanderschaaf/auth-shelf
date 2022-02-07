import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

// import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import AboutPage from '../AboutPage/AboutPage';
// import UserPage from '../UserPage/UserPage';
// import ShelfPage from '../ShelfPage/ShelfPage';
// import LandingPage from '../LandingPage/LandingPage';
// import LoginPage from '../LoginPage/LoginPage';
// import RegisterPage from '../RegisterPage/RegisterPage';
import AddItem from '../AddItem/AddItem';

import './App.css';

function App() {
  const dispatch = useDispatch();


  return (
    <Router>
      <div>
          <Route
            exact
            path="/add"
          >
            <AddItem />
          </Route>

          
      </div>
    </Router>
  );
}

export default App;
